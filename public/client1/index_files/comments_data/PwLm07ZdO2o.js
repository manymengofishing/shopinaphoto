/*1309144341,169776069*/

if (window.CavalryLogger) { CavalryLogger.start_js(["aHXCe"]); }

WindowComm={_callbacks:{},makeHandler:function(a,c){c=c||'opener';var b='f'+(Math.random()*(1<<30)).toString(16).replace('.','');WindowComm._callbacks[b]=a;return new URI('/connect/window_comm.php').setQueryData({_id:b,_relation:c}).getQualifiedURI().toString();},_recv:function(b){var a=new URI(b).getQueryData();WindowComm._callbacks[a._id](a);}};
var PopupResizer={_opts:{allowShrink:true,timeout:100},init:function(a){copy_properties(PopupResizer._opts,a);PopupResizer._resizeCheck.recur(PopupResizer._opts.timeout);},_resizeCheck:function(){var e=Vector2.getViewportDimensions(),a=PopupResizer._getDocumentSize(),c=a.y-e.y,d=a.x-e.x;if(d<0)d=0;if(!PopupResizer._opts.allowShrink&&c<0)c=0;if(c||d)try{window.resizeBy(d,c);if(d)window.moveBy(d/-2,0);}catch(b){}},_getDocumentSize:function(){var a={x:ua.firefox()?document.documentElement.scrollWidth:document.body.scrollWidth,y:document.body.scrollHeight};if(a.x<=0||a.x>document.documentElement.scrollWidth)a.x=document.documentElement.scrollWidth;if(a.y<=0||a.y>document.documentElement.scrollHeight)a.y=document.documentElement.scrollHeight;if(window.Dialog&&Dialog.max_bottom&&Dialog.max_bottom>a.y)a.y=Dialog.max_bottom;return a;},open:function(i,b,j){var f=typeof window.screenX!='undefined'?window.screenX:window.screenLeft,g=typeof window.screenY!='undefined'?window.screenY:window.screenTop,e=typeof window.outerWidth!='undefined'?window.outerWidth:document.body.clientWidth,d=typeof window.outerHeight!='undefined'?window.outerHeight:(document.body.clientHeight-22),c=parseInt(f+((e-j)/2),10),h=parseInt(g+((d-b)/2.5),10),a=('width='+j+',height='+b+',left='+c+',top='+h);return window.open(i,'_blank',a);}};
ConnectLogin={init:function(a){this.appID=a.appID;this.oneClick=a.oneClick;XD.init(a);},login:function(a,c,b){if(this.oneClick&&!c){this._oneClick(a);}else this._openPopup(a,c,b);},logout:function(){XD.send({type:'logout'});},_oneClick:function(a){new AsyncRequest().setURI('/ajax/api/tos.php').setData({app_id:this.appID,grant_perm:1}).setHandler(function(b){ConnectLogin._refreshLoginStatus();a&&a();}).send();},_openPopup:function(c,e,d){d=d||{};var b=WindowComm.makeHandler(function(h){ConnectLogin._closePopup();if(ConnectLogin.appID)ConnectLogin._refreshLoginStatus();c&&c();}),a=WindowComm.makeHandler(function(h){ConnectLogin._closePopup();}),g=new URI('/login.php');g.setQueryData({api_key:this.appID,next:b,channel_url:a,cancel_url:a,req_perms:e,v:'1.0',fbconnect:1,display:'popup'});g.addQueryData(d);var f=this._getSize(d);this._popup=PopupResizer.open(g.toString(),f.height,f.width);},_closePopup:function(){if(this._popup){this._popup.close();this._popup=null;}},_refreshLoginStatus:function(){XD.send({type:'refreshLoginStatus'});},_getSize:function(a){if(a.social_plugin=='registration'){return {width:640,height:370};}else return {width:610,height:280};}};
WidgetArbiter={_findSiblings:function(){if(WidgetArbiter._siblings)return;WidgetArbiter._siblings=[];for(var b=parent.frames.length-1;b>=0;b--)try{if(parent.frames[b]&&parent.frames[b].Arbiter&&parent.frames[b].Arbiter.inform)WidgetArbiter._siblings.push(parent.frames[b].Arbiter);}catch(a){}},inform:function(){WidgetArbiter._findSiblings();var a=$A(arguments);WidgetArbiter._siblings.each(function(b){b.inform.apply(b,a);});}};
var PlatformOptInPopup=function(){};copy_properties(PlatformOptInPopup,{DIALOG_URL:'/connect/uiserver.php',DIALOG_WIDTH:420,DIALOG_HEIGHT:450,APP_ID:127760087237610,open:function(d,c,a){if(!d)d='generic';if(!c)c='opt.in';var b=new URI(PlatformOptInPopup.DIALOG_URL);b.addQueryData({social_plugin:d,method:c,display:'popup',secure:URI.getRequestURI().isSecure(),app_id:PlatformOptInPopup.APP_ID});if(a)b.addQueryData(a);return PopupResizer.open(b.toString(),PlatformOptInPopup.DIALOG_WIDTH,PlatformOptInPopup.DIALOG_HEIGHT);}});
function ConnectSocialWidget(a,b){ConnectSocialWidget.setInstance(b,this);ConnectSocialWidget.delayUntilDisplayed(function(){this.initializeObject.call(this,a,b);}.bind(this));}copy_properties(ConnectSocialWidget,{OPT_IN_FACEBOOK_APP_ID:'127760087237610',TYPE_ACTIVITY:'A',TYPE_RECOMMENDATIONS:'R',TYPE_LIKEBOX:'L',instances:{},setInstance:function(b,a){ConnectSocialWidget.instances[b]=a;},getInstance:function(a){return ConnectSocialWidget.instances[a];},popups:{},login:function(a,b){ConnectSocialWidget.popups[b]={popup:PlatformOptInPopup.open('login','opt.in')};},aDelayedFunctions:[],delayUntilDisplayed:function(a){ConnectSocialWidget.aDelayedFunctions.push(a);if(ConnectSocialWidget.aDelayedFunctions.length===1){if(!ConnectSocialWidget.ndTestDim){var b=document.createElement('div'),c={position:'absolute',width:'1px',height:'1px',overflow:'hidden',top:'0px'};for(var d in c)if(typeof c[d]==='string')CSS.setStyle(b,d,c[d]);document.body.appendChild(b);ConnectSocialWidget.ndTestDim=b;}ConnectSocialWidget.testForDisplay();}},testForDisplay:function(){var a=Vector2.getElementDimensions(ConnectSocialWidget.ndTestDim).y;if(a!==0){ConnectSocialWidget.aDelayedFunctions.forEach(function(b){b();});ConnectSocialWidget.aDelayedFunctions=[];}else ConnectSocialWidget.testForDisplay.defer(100);},listenForLogin:function(){if(!ConnectSocialWidget.listenerAttached){Arbiter.subscribe('platform/socialplugins/login',function(a){if(a.user!==Env.user)document.location.reload();});ConnectSocialWidget.listenerAttached=true;}}});copy_properties(ConnectSocialWidget.prototype,{initializeObject:function(e,g){var d=DOM.scry(document.body,e.sOverflowContainerSelector)[0],c=DOM.scry(d,'.fbConnectWidgetFooter')[0],a=c?Vector2.getElementDimensions(c).y:0,f=e.sOverflowItemsSelector,b=DOM.scry(document.body,e.sStreamContainerSelector)[0];this.fRemoveOverflowElements=this.removeOverflowElements.bind(this,d,b,f,-a);copy_properties(this,{bInitialized:true,sWidgetId:g,iFooterHeight:a,ndTop:d,ndFooter:c,ndContentContainer:b,oQueryParams:new URI(window.location.href).getQueryData(),bComboMode:e.bComboMode,sOverflowItemsSelector:f});copy_properties(this.oQueryParams,{post_form_id:Env.post_form_id,user:Env.user});this.fRemoveOverflowElements();CSS.setStyle(b,'visibility','visible');animation(b).from('opacity',0).to('opacity',1).duration(200).go();ConnectSocialWidget.listenForLogin();new ClickThroughMonitor({ndTop:this.ndContentContainer,fValidateLink:this.getElementTop.bind(this),fGetMonitorData:function(h){var i={site:this.oQueryParams.site,type:this.getLinkType(),plugin:this.getPluginType(),social:(DOM.scry(h,'^div.fbSocial').length>0),pos:this.getItemPosition(this.getElementTop(h)),signature:this.getItemSignature(this.getElementTop(h))};if(this.oQueryParams.api_key)i.api_key=this.oQueryParams.api_key;return i;}.bind(this)});},getElementTop:function(b){var a=DOM.scry(b,'^'+this.sOverflowItemsSelector);return a[0];},getItemPosition:function(d){var a=DOM.scry(this.ndContentContainer,this.sOverflowItemsSelector),c=a.length,b=a.indexOf(d)+1;return b+'/'+c;},getItemSignature:function(c){var a=c.className.split(' ');for(var b=0;b<a.length;b++)if(a[b].startsWith("RES_"))return a[b].substring(4);return '';},removeOverflowElements:function(h,g,i,d,e){var f,a=i?DOM.scry(g,i):$A(g.childNodes);if(!e){var d=d||0,b=Vector2.getElementDimensions(h).y+d,c=Vector2.getElementPosition(h).y;e=b+c;}while(a.length>0&&(f=$(a.pop()))&&(Vector2.getElementDimensions(f).y+Vector2.getElementPosition(f).y)>e)DOM.remove(f);},login:function(){ConnectSocialWidget.login(this.appID,this.sWidgetId);},toggleLogin:function(){DOM.scry(this.ndTop,'.fbToggleLogin').forEach(function(a){CSS.toggle(a);});this.fRemoveOverflowElements();}});function ActivityWidget(a,b){this.parent.construct(this,a,b);}ActivityWidget.extend('ConnectSocialWidget');ActivityWidget.ENDPOINT='/ajax/connect/activity_widget.php';ActivityWidget.REQUEST_INTERVAL=15*1000;ActivityWidget.ACTIVITY_HEIGHT=45;ActivityWidget.MAX_INTERVAL=30;ActivityWidget.MAX_ITEMS=24;copy_properties(ActivityWidget.prototype,{initializeObject:function(a,b){this.parent.initializeObject.call(this,a,b);this.oQueryParams.nb_activities=Math.min(ActivityWidget.MAX_ITEMS,Math.round((this.oQueryParams.height||300)/ActivityWidget.ACTIVITY_HEIGHT));this.oQueryParams.newest=a.iNewestStoryTime||0;},getLinkType:function(){return ConnectSocialWidget.TYPE_ACTIVITY;},getPluginType:function(){return ConnectSocialWidget.TYPE_ACTIVITY;},removeOverflowElements:function(){if(this.bComboMode&&!this.bFirstRound){this.bFirstRound=true;var d=Vector2.getElementPosition(this.ndTop).y,b=Vector2.getElementDimensions(document.body).y-(d+this.iFooterHeight),c=Math.round(b/2),a=$A(arguments);a[a.length]=c;ConnectSocialWidget.prototype.removeOverflowElements.apply(this,a);}else ConnectSocialWidget.prototype.removeOverflowElements.apply(this,arguments);},hasFriendsActivity:function(){return DOM.scry(this.ndContentContainer,'div.fbFriendsActivity')[0].childNodes.length>0;},hasContent:function(){return DOM.scry(this.ndTop,this.sOverflowItemsSelector).length>0;},getEmptyMessage:function(){return DOM.find(this.ndContentContainer,'div.fbEmptyWidget');},showEmptyMessage:function(){var a=this.getEmptyMessage();if(a)CSS.show(a);}});function RecommendationsWidget(a,b){this.parent.construct(this,a,b);}RecommendationsWidget.extend('ConnectSocialWidget');copy_properties(RecommendationsWidget.prototype,{getLinkType:function(){return ConnectSocialWidget.TYPE_RECOMMENDATIONS;},getPluginType:function(){return this.sActivityParent?ConnectSocialWidget.TYPE_ACTIVITY:ConnectSocialWidget.TYPE_RECOMMENDATIONS;},initializeObject:function(a,b){this.parent.initializeObject.call(this,a,b);this.sActivityParent=a.sActivityParent;this.cropImages();},cropImages:function(){var a=DOM.scry(this.ndContentContainer,".fbImageContainer img");if(a.length>0){var b=function(event){RecommendationsWidget.image_resize({image:event.getTarget(),dimension:RecommendationsWidget.IMAGE_HEIGHT});};a.forEach(function(c){if(c.complete){RecommendationsWidget.image_resize({image:c,dimension:RecommendationsWidget.IMAGE_HEIGHT});}else Event.listen(c,'load',b);});}},hasContent:function(){return this.ndContentContainer.childNodes.length>0;},getParent:function(){if(this.sActivityParent)return ConnectSocialWidget.getInstance(this.sActivityParent);},showRecommendationsSeparator:function(){var b=this.getParent();if(b&&b.hasContent()){var a=DOM.scry(this.ndTop,'div.fbRecommendationsSeparator')[0];CSS.show(a);CSS.setStyle(a,'visibility','visible');}return this;},removeOverflowElements:function(){ConnectSocialWidget.prototype.removeOverflowElements.apply(this,arguments);if(this.sActivityParent&&!this.hasContent()){var a=DOM.scry(this.ndTop,'div.fbRecommendationsSeparator')[0];CSS.hide(a);}}});RecommendationsWidget.IMAGE_HEIGHT=35;RecommendationsWidget.ITEM_HEIGHT=45;function LikeBoxWidget(a,b){this.parent.construct(this,a,b);}LikeBoxWidget.extend('ConnectSocialWidget');copy_properties(LikeBoxWidget.prototype,{getLinkType:function(){return ConnectSocialWdiget.TYPE_LIKEBOX;},getPluginType:function(){return ConnectSocialWidget.TYPE_LIKEBOX;}});RecommendationsWidget.image_resize=function(k){var i=k.image,j=Vector2.getElementDimensions(i),b=j.y,h=j.x,f=k.dimension,l=f+'px';if(b<=5||h<=5)return;var e=b/h;if(e<.5||e>2)return;if(b===h){CSS.setStyle(i,'width',l);}else if(b<h){var d=f/b,c=-Math.round((h-b)*d/2);CSS.setStyle(i,'height',l);CSS.setStyle(i,'marginLeft',c+'px');}else{var d=f/h,g=-Math.round((b-h)*d/2);CSS.setStyle(i,'width',l);CSS.setStyle(i,'marginTop',g+'px');}CSS.setStyle(i,'visibility','visible');CSS.setStyle(i.parentNode,'background','transparent');var a=Parent.byClass(i,'fbRecommendation');if(a)CSS.removeClass(a,'invisible_elem');};ClickThroughMonitor=function(a){copy_properties(this,{ndTop:a.ndTop||document.body,fValidateLink:a.fValidateLink||function(){return true;},fGetMonitorData:a.fGetMonitorData||function(){return {};}});Event.listen(this.ndTop,'mousedown',this.onMouseDown.bind(this));};ClickThroughMonitor.CALL_BACK_SOCIAL_PLUGINS=2;copy_properties(ClickThroughMonitor.prototype,{getMonitoredLink:function(event){var a=event.getTarget(),b=Parent.byTag(a,'a');if(b&&CSS.hasClass(b,'fbMonitor')&&this.fValidateLink(b)){return b;}else return null;},getMonitorData:function(a){var b=this.fGetMonitorData(a);if(document.referrer!=='')b.referrer=document.referrer;b.cb=ClickThroughMonitor.CALL_BACK_SOCIAL_PLUGINS;return b;},onMouseDown:function(event){var a=this.getMonitoredLink(event);if(a)UntrustedLink.bootstrap(a,Env.lhsh,event,this.getMonitorData.bind(this));}});
function fbpage_set_fan_status(c,f,a,h,g,d,e){g=g?g:function(j){_fbpage_show_change_status_feedback(c,j.getPayload());};var b={fbpage_id:f,add:a,reload:h};if(e!=null)copy_properties(b,e);var i=new AsyncRequest().setURI('/ajax/pages/fan_status.php').setData(b).setNectarModuleDataSafe(c).setHandler(g);if(d)i.setErrorHandler(d);i.send();return false;}function fbpage_set_favorite_status(d,e,a){var f=function(){_fbpage_show_change_status_feedback(d,this.getUserData());};var c={fbpage_id:e,add:a};var b=new AsyncRequest().setMethod('POST').setURI('/ajax/pages/favorite_status.php').setData(c);new Dialog().setAsync(b).setCloseHandler(f).show();return false;}function _fbpage_show_change_status_feedback(b,a){if(!a||!b)return;if(a.reload){fbpage_reload_on_fan_status_changed(a.preserve_tab);}else fbpage_redraw_on_fan_status_changed(b,a.feedback);}function fbpage_reload_on_fan_status_changed(a){var c=URI.getRequestURI();if(a){var b=Arbiter.query('SideNav.selectedKey');if(!c.getQueryData().sk&&b)c.addQueryData({sk:b});}window.location.href=c;}function fbpage_redraw_on_fan_status_changed(a,b){if(!b)return;var d=document.createElement('span');d.innerHTML=b;CSS.setClass(d,'fan_status_inactive');a.parentNode.replaceChild(d,a);var c=function(){if(data.can_repeat_action)d.parentNode.replaceChild(a,d);};animation(d).duration(3000).checkpoint().to('backgroundColor','#FFFFFF').duration(1000).ondone(c).go();}