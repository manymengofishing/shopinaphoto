
var tm;if(!tm)tm={};if(!tm.siteLife)tm.siteLife={};if(navigator.appName=='Netscape'){tm.siteLife.logger=tm.logger;tm.siteLife.logger.log('info','tm.siteLife.logger',['','logger enabled']);}
function daapi(){doLog=true;var MOST_POPULAR_AGE=14;var MOST_POPULAR_SECTION="All";var MAX_BATCH_SIZE=20;var serverUrl="";var articles={};var discoveries={};var articlePostQueue=[];var discoveriesPostQueue=[];var getArticle=function(artID,callback){if(!articles[artID]){_daapiLogger('debug','Queueing request for article \''+artID+'\'');articles[artID]={};articles[artID].callbacks=[callback];_daapiLogger('debug','Registering callback #'+articles[artID].callbacks.length+'  for article \''+artID+'\'');articlePostQueue[articlePostQueue.length]=artID;}
else if(articles[artID].article==null){articles[artID].callbacks[articles[artID].callbacks.length]=callback;_daapiLogger('debug','Registering callback #'+articles[artID].callbacks.length+'  for article \''+artID+'\'');}
else{callback(articles[artID].article);}}
this.getArticle=getArticle;var addMostPopularCallback=function(callback,discoverySearch){var section,age,key;if(discoverySearch){age=discoverySearch['age']?discoverySearch['age']:MOST_POPULAR_AGE;section=discoverySearch['section']?discoverySearch['section']:MOST_POPULAR_SECTION;}else{age=MOST_POPULAR_AGE;section=MOST_POPULAR_SECTION;}
key=_uniqueDiscoveryKey(age,section);if(!discoveries[key]){_daapiLogger('debug','Queueing request for Most-Popular data \''+key+'\'');discoveries[key]={age:age,section:section,callbacks:[callback]};_daapiLogger('debug','Registering callback #'+discoveries[key].callbacks.length+'  for Most-Popular data \''+key+'\'');discoveriesPostQueue[discoveriesPostQueue.length]=key;}
else if(!(discoveries[key].Commented&&discoveries[key].Recommended)){discoveries[key].callbacks[discoveries[key].callbacks.length]=callback;_daapiLogger('debug','Registering callback #'+discoveries[key].callbacks.length+'  for Most-Popular data \''+key+'\'');}
else{callback({Commented:discoveries[key].Commented,Recommended:discoveries[key].Recommended});}}
this.addMostPopularCallback=addMostPopularCallback;var postCount=0;var post=function(){if(typeof RequestBatch!='undefined'){var requestBatch=new RequestBatch();}
var artID;var articleKey;var articlePost;var discoveryKey;var discoveriesPost;var section;var age;var postSize=MAX_BATCH_SIZE;var doPost=false;if(discoveriesPostQueue.length>postSize){discoveriesPost=discoveriesPostQueue.slice(0,postSize);discoveriesPostQueue=discoveriesPostQueue.slice(postSize);}else{discoveriesPost=discoveriesPostQueue;discoveriesPostQueue=[];}
for(var i=0;i<discoveriesPost.length;i++){discoveryKey=discoveriesPost[i];discovery=discoveries[discoveryKey];section=discovery.section;age=discovery.age;requestBatch.AddToRequest(_createMostCommentedRequest(section,age));requestBatch.AddToRequest(_createMostRecommendRequest(section,age));postSize=postSize-2;doPost=true;}
if(articlePostQueue.length>postSize){articlePost=articlePostQueue.slice(0,postSize);articlePostQueue=articlePostQueue.slice(postSize);}else{articlePost=articlePostQueue;articlePostQueue=[];}
if(articlePost.length>0){doPost=true;_daapiLogger('debug','adding articles to sitelife requestBatch');for(var i=0;i<articlePost.length;i++){artID=articlePost[i];articleKey=new ArticleKey(artID);requestBatch.AddToRequest(articleKey);}}
if(doPost){_daapiLogger('debug','posting SiteLIfe RequeastBatch no '+(++postCount),requestBatch);requestBatch.BeginRequest(serverUrl,function(responseBatch){_processResponse(articlePost,responseBatch);});}else{_daapiLogger('debug','Nothing to post to sitelife');}}
this.post=post;var _processResponse=function(articlePost,responseBatch){var article;var artID;var message;var articlesInResponse=[];_daapiLogger('debug','processing daapi response',responseBatch);try{message=responseBatch.Messages[0].Message;if(message!='ok'){_daapiLogger('error','SiteLife Message is ',message);}else{_daapiLogger('debug','Message was "ok"');}}
catch(e){_daapiLogger('error','SiteLife Message response was unrecognised',e);}
try{for(var i=0;i<responseBatch.Responses.length;i++){try{var siteLifeObject=responseBatch.Responses[i];if("Article"in siteLifeObject){article=siteLifeObject.Article;artID=article.ArticleKey.Key;articles[artID].article=article;articlesInResponse[articlesInResponse.length]=artID;}else if("DiscoverContentAction"in siteLifeObject){var articleArray=siteLifeObject.DiscoverContentAction.DiscoveredContent;for(var j=0;j<articleArray.length;j++){article=articleArray[j];artID=article.ArticleKey.Key;if(articles[artID]==null){articles[artID]={article:article,callbacks:[]};}else{articles[artID].article=article;}
articlesInResponse[articlesInResponse.length]=artID;}
if(siteLifeObject.DiscoverContentAction.Activity.Name=="Commented"){var uniqueDiscoveryKey=_uniqueDiscoveryKey(siteLifeObject.DiscoverContentAction.Age,siteLifeObject.DiscoverContentAction.SearchCategories[0].Name);discoveries[uniqueDiscoveryKey]['Commented']=siteLifeObject.DiscoverContentAction.DiscoveredContent;}else if(siteLifeObject.DiscoverContentAction.Activity.Name=="Recommended"){var uniqueDiscoveryKey=_uniqueDiscoveryKey(siteLifeObject.DiscoverContentAction.Age,siteLifeObject.DiscoverContentAction.SearchCategories[0].Name);discoveries[uniqueDiscoveryKey]['Recommended']=siteLifeObject.DiscoverContentAction.DiscoveredContent;}else{_daapiLogger('error','unrecognised DiscoverContentAction Name: ',siteLifeObject.DiscoverContentAction.Name);}}else{_daapiLogger('error','unrecognised sitelife object: ',siteLifeObject);}}catch(e){_daapiLogger('error','SiteLife Response was not recognised',e);continue;}}}
catch(e){_daapiLogger('error','SiteLife Response Batch not recognised',e);return;}
for(var i=0;i<articlePost.length;i++){var isRequestedArticleInResponse=false;var artID=articlePost[i];for(var j=0;j<articlesInResponse.length;j++){if(artID==articlesInResponse[j]){isRequestedArticleInResponse=true;break;}}
if(!isRequestedArticleInResponse){_daapiLogger('debug','Warning: article with id '+artID+' is not registered with SiteLife');for(var j=0;j<articles[artID].callbacks.length;j++){articles[artID].callbacks[j](null);}
articles[artID].callbacks=[];}}
_executeArticleCallbacks(articlesInResponse);_executeDiscoveryCallbacks();_cleanArticlePostQueue();_daapiLogger('debug','Articles sent by SiteLife: ',articles);}
var _executeArticleCallbacks=function(articleArray){for(var i=0;i<articleArray.length;i++){var articleId=articleArray[i];var articleTask=articles[articleId];var article=articleTask.article;if(article==null){_daapiLogger('debug','Warning: article with id '+articleId+' is null');for(var j=0;j<articleTask.callbacks.length;j++){articleTask.callbacks[j](null);}}else{_daapiLogger('debug','article with id '+articleId+' is registered with SiteLife');for(var j=0;j<articleTask.callbacks.length;j++){articleTask.callbacks[j](article);}}
articleTask.callbacks=[];}}
var _executeDiscoveryCallbacks=function(){for(key in discoveries){var discovery=discoveries[key];if(discovery.callbacks&&discovery.Commented&&discovery.Recommended){var mostPopular={mostCommented:discovery.Commented,mostRecommended:discovery.Recommended};for(var i=0,len=discovery.callbacks.length;i<len;i++){discovery.callbacks[i](mostPopular);}
discovery.callbacks=null;}}}
var _cleanArticlePostQueue=function(){var newArticlePostQueue=[];for(var i=0;i<articlePostQueue;i++){if(articles[articlePostQueue[i]].article==null){newArticlePostQueue[newArticlePostQueue.length]=articlePostQueue[i];}}
articlePostQueue=newArticlePostQueue;}
var _createMostCommentedRequest=function(section,age){var searchSections=new Array();searchSections[0]=new Section("All");var searchCategories=new Array();searchCategories[0]=new Category(section);var activity=new Activity("Commented");var contentType=new ContentType("Article");var contributors=new Array();contributors[0]=new UserTier("Standard");contributors[1]=new UserTier("Staff");contributors[2]=new UserTier("Editor");contributors[3]=new UserTier("Trusted");contributors[4]=new UserTier("Featured");var maximumNumberOfDiscoveries=10;var requestBatch=new RequestBatch();var discoveryAction=new DiscoverContentAction(searchSections,searchCategories,contributors,activity,contentType,_validAge(age),maximumNumberOfDiscoveries);return discoveryAction;}
var _createMostRecommendRequest=function(section,age){var searchSections=new Array();searchSections[0]=new Section("All");var searchCategories=new Array();searchCategories[0]=new Category(section);var contributors=new Array();contributors[0]=new UserTier("Standard");contributors[1]=new UserTier("Staff");contributors[2]=new UserTier("Editor");contributors[3]=new UserTier("Trusted");contributors[4]=new UserTier("Featured");var activity=new Activity("Recommended");var contentType=new ContentType("Article");var maximumNumberOfDiscoveries=10;var requestBatch=new RequestBatch();var discoveryAction=new DiscoverContentAction(searchSections,searchCategories,contributors,activity,contentType,_validAge(age),maximumNumberOfDiscoveries);return discoveryAction;}
var _uniqueDiscoveryKey=function(age,section){return('age:'+age+'::'+section).toLowerCase();}
var _validAge=function(age){return(age>14)?14:(age<1)?1:age;}
var _attemptPost=function(){if(articlePostQueue.length==MAX_BATCH_SIZE){post();}}
var setServerUrl=function(url){serverUrl=url;}
this.setServerUrl=setServerUrl;this.getMaxBatchSize=function(){return MAX_BATCH_SIZE;};var _daapiLogger=function(){};if(doLog&&tm.siteLife.logger!=null){_daapiLogger=function(level){tm.siteLife.logger.log(level,'tm.siteLife.daapi',arguments);}
_daapiLogger('info','log enabled');}}
tm.siteLife.daapi=new daapi();