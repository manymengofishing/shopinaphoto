(function(){if(window.vdna&&window.vdna.advertising&&window.vdna.impressions){return;
/*
        http://www.JSON.org/json2.js
        2010-03-20

        Public Domain.
    */
}if(!this.JSON){this.JSON={};}(function(){function f(n){return n<10?"0"+n:n;}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key);}if(typeof rep==="function"){value=rep.call(holder,key,value);}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null";}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null";}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v;}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v);}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v;}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" ";}}else{if(typeof space==="string"){indent=space;}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify");}return str("",{"":value});};}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}return reviver.call(holder,key,value);}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);});}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j;}throw new SyntaxError("JSON.parse");};}}());var vdna=vdna||{};vdna.SECONDS_PER_DAY=86400;vdna.SECONDS_PER_WEEK=604800;vdna.SECONDS_PER_YEAR=31536000;vdna.page=vdna.page||{};vdna.logger=vdna.logger||{excludes:[],exclude:function(exclusion){this.excludes.push(exclusion);},log:function(){var i=0,j=0,args=Array.prototype.slice.apply(arguments),exclude=false,length=args.length;if("string"===typeof args[0]){for(;(exclude=this.excludes[j]);j=j+1){if(0===args[0].indexOf(exclude)){return;}}}for(;i<length;i=i+1){if("object"===typeof args[i]&&"callee"!==typeof args[i].length&&"undefined"!==typeof args[i].callee){args[i]=Array.prototype.slice.call(args[i]);}if(window&&window.console){if(!(window.console.provider&&"Companion.JS")&&window.console.dir&&"string"!==typeof args[i]){window.console.dir(args[i]);}else{if(window.console.log){window.console.log(args[i]);}}}}}};vdna.getRootDomain=function(){var domain=document.domain;domain="."+domain.replace(/.*?([A-Za-z0-9_\-]+(?:\.co\.[a-z]+|\.com))$/,"$1");return domain;};vdna.guid={s4:function(){return(((1+Math.random())*65536)|0).toString(16).substring(1);},generate:function(){var S4=vdna.guid.s4;return(S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());}};vdna.runScript=vdna.runScript||function(url){var script=document.createElement("script");script.src=url;document.getElementsByTagName("head")[0].appendChild(script);};vdna.postForm=vdna.postForm||function(url,formData,callback){var form,iframe,input,i,nameValuePair,loaded,loadCount,target;target="vdna-post-"+Math.random()*100000000000000000;loaded=false;loadCount=0;function handleLoad(){loaded=true;loadCount=loadCount+1;if(1<loadCount){form.parentNode.removeChild(form);window.setTimeout(function(){iframe.parentNode.removeChild(iframe);},500);iframe.onreadystatechange=null;iframe.onload=null;if("function"===typeof callback){callback();}}else{loaded=false;window.setTimeout(function(){form.submit();},500);}}form=document.createElement("form");form.action=url;form.method="POST";form.target=target;form.style.display="none";form.setAttribute("aria-hidden","true");var div=document.createElement("div");div.innerHTML="<iframe name='"+target+"'></iframe>";iframe=div.removeChild(div.childNodes[0]);iframe.src="about:blank";iframe.title="VisualDNA Analytics";iframe.style.display="none";iframe.width=0;iframe.height=0;iframe.name=target;iframe.setAttribute("aria-hidden","true");if(formData){for(i=0;(nameValuePair=formData[i]);i=i+1){input=document.createElement("input");input.type="hidden";input.name=nameValuePair.name;input.value=nameValuePair.value;form.appendChild(input);}}document.body.insertBefore(form,document.body.firstChild);iframe.onload=function(){if(!loaded){handleLoad();}};iframe.onreadystatechange=function(){if(!loaded&&"complete"===iframe.readyState){handleLoad();}};document.body.insertBefore(iframe,document.body.firstChild);};vdna.io=vdna.io||{};vdna.io.cookies=vdna.io.cookies||(function(){function buildCookiePair(name,value,lifetime,domain,path,secure){var s,expires;path="undefined"!==typeof path?path:"/";domain="undefined"!==typeof domain?domain:false;s=name+"="+window.encodeURIComponent(value);if(false!==lifetime){expires=new Date();expires.setTime(expires.getTime()+lifetime*1000);s+="; expires="+expires.toUTCString();}if(domain){s+="; domain="+domain;}if(path){s+="; path="+path;}if(secure){s+="; secure";}return s;}return{setItem:function(name,value,lifetime,domain,path,secure){var args=Array.prototype.slice.call(arguments);if(!args[3]){args[3]=vdna.getRootDomain();}var cookiePair=buildCookiePair.apply(this,args);document.cookie=cookiePair;},getItem:function(name){var pair,i=0,nameEquals=name+"=",cookiePairs=document.cookie.split("; "),length=cookiePairs.length;for(;i<length;i=i+1){pair=cookiePairs[i];if(0===pair.indexOf(nameEquals)){return window.decodeURIComponent(pair.substring(nameEquals.length,pair.length));}}return undefined;},removeItem:function(name,domain,path,secure){var cookiePair,value="";path=("undefined"===typeof path)?"/":path;value="";cookiePair=buildCookiePair(name,"foo",-99999,domain,path,secure);document.cookie=cookiePair;},canSetLongTermCookies:function(){vdna.io.cookies.setItem("vdnaTestLongTermCookie","1",1000,vdna.getRootDomain());if(vdna.io.cookies.getItem("vdnaTestLongTermCookie")!=="1"){return false;}else{vdna.io.cookies.getItem("vdnaTestLongTermCookie");this.removeItem("vdnaTestLongTermCookie",vdna.getRootDomain());return true;}},canSetSessionCookies:function(){vdna.io.cookies.setItem("vdnaTestSessionCookie","1",false);if(vdna.io.cookies.getItem("vdnaTestSessionCookie")!=="1"){return false;}else{vdna.io.cookies.setItem("vdnaTestSessionCookie");this.removeItem("vdnaTestSessionCookie",vdna.getRootDomain());return true;}}};}());vdna.io.userData=vdna.io.userData||(function(){var els;els={};function getXmlStoreForKey(key){return"vdna-userData-"+key;}function getUserDataEl(key){var el,head;head=document.getElementsByTagName("head");if("undefined"===typeof els[key]){el=document.createElement("meta");if("undefined"!==typeof el.addBehavior){el.addBehavior("#default#userData");head.insertBefore(el,head.firstChild);try{el.load(getXmlStoreForKey(key));}catch(e){}els[key]=el;}}if(els[key]){try{els[key].load(getXmlStoreForKey(key));}catch(e){}return els[key];}return false;}return{setItem:function(key,value,ttl){var el,expiry;el=getUserDataEl(key);if(el){expiry=new Date();expiry.setTime(+expiry+(ttl*1000));el.expires=expiry.toUTCString();el.setAttribute("data-"+key,value);if("undefined"!==typeof el.save){el.save(getXmlStoreForKey(key));return true;}}return false;},getItem:function(key){var el,value;el=getUserDataEl(key);if(el){value=el.getAttribute("data-"+key);}return value;},removeItem:function(key){var el=getUserDataEl(key);if("undefined"!==typeof el.load&&"undefined"!==typeof el.save){el.removeAttribute("data-"+key);el.save("vdna-userData-"+key);return true;}return false;},canSet:function(){var key="vdnaTestUserData",value="1";this.setItem(key,value,1000);if(value===this.getItem(key)){this.removeItem(key);return true;}return false;}};}());vdna.io.sessionStorage=vdna.io.sessionStorage||(function(){return{setItem:function(key,value){var expiry;if(window.sessionStorage){window.sessionStorage.setItem(key,value);return true;}return false;},getItem:function(key){var expiry,value,now;if(window.sessions){return window.sessionStorage.getItem(key);}return undefined;},removeItem:function(key){if(window.sessionStorage){window.sessionStorage.removeItem(key);}},canSet:function(){var key,value;key="vdnaTestSessionStorage";value="1";this.setItem(key,value);if(value===this.getItem(key)){this.removeItem(key);return true;}return false;}};}());vdna.io.localStorage=vdna.io.localStorage||(function(){return{setItem:function(key,value,ttl){var expiry;if(window.localStorage){window.localStorage.setItem(key+"-value",value);expiry=Math.round((+new Date())/1000)+ttl;window.localStorage.setItem(key+"-expires",expiry);return true;}return false;},getItem:function(key){var expiry,value,now;if(window.localStorage){value=window.localStorage.getItem(key+"-value");expiry=window.localStorage.getItem(key+"-expires");now=Math.round((+new Date())/1000);if(now>expiry){this.removeItem(key);return undefined;}return value;}return undefined;},removeItem:function(key){if(window.localStorage){window.localStorage.removeItem(key+"-value");window.localStorage.removeItem(key+"-expires");}},canSet:function(){try{var key,value;key="vdnaTestLocalStorage";value="1";this.setItem(key,value,9999);if(value===this.getItem(key)){this.removeItem(key);return true;}}catch(e){}return false;}};}());vdna.io.storage=vdna.io.storage||(function(){var implementations;function getImplementations(){var implementations=[];implementations.push("cookies");if(window.location.pathname.match(/(?:aat|impression_tracker)\.html$/)&&vdna.io.userData.canSet()){implementations.push("userData");}if(vdna.io.localStorage.canSet()){implementations.push("localStorage");}return implementations;}implementations=getImplementations();return{setItem:function(key,value,ttl){var i,implementation,set;set=[];for(i=0;(implementation=implementations[i]);i=i+1){if("cookies"===implementation&&!vdna.io.cookies.canSetLongTermCookies()){continue;}if("cookies"===implementation&&/\.visualdna\.com$/.test(window.location.host)&&/^(vdnaUserId|vdnaWidgetMC)$/.test(key)){continue;}try{vdna.io[implementation].setItem(key,value,ttl);}catch(e){}set.push(implementation);}},getItem:function(key){var i,implementation,value;for(i=0;(implementation=implementations[i]);i=i+1){value=vdna.io[implementation].getItem(key);if(value){return value;}}},removeItem:function(key){var i,implementation,value;for(i=0;(implementation=implementations[i]);i=i+1){vdna.io[implementation].removeItem(key);}}};}());vdna.setIdentity=function(data){var identityTtl,changed,xml;identityTtl=365*24*60*60;if(data&&data.key){if(data.isMeasured){changed=(!vdna.user.originalVdnaUserId||(vdna.user.originalVdnaUserId&&vdna.user.originalVdnaUserId.toString()!==data.key.toString()));vdna.io.storage.setItem("vdnaUserId",data.key,identityTtl);}else{changed=(vdna.user.originalVdnaWidgetMC&&vdna.user.originalVdnaWidgetMC.toString()!==data.key.toString());vdna.io.storage.setItem("vdnaWidgetMC",data.key,identityTtl);}if(changed){xml="";if(vdna.user.originalVdnaUserId){xml+="<old_vdna_user_id>"+vdna.user.originalVdnaUserId.toString()+"</old_vdna_user_id>";}if(vdna.user.originalVdnaWidgetMC){xml+="<old_vdna_widget_mc>"+vdna.user.originalVdnaWidgetMC.toString()+"</old_vdna_widget_mc>";}vdna.events.sendEvent("UPDATED_IDENTITY","tracking","VDNASITETRACKING",vdna.io.storage.getItem("vdnaSessionId"),xml);}vdna.user.originalVdnaUserId=vdna.io.storage.getItem("vdnaUserId");vdna.user.originalVdnaWidgetMC=vdna.io.storage.getItem("vdnaWidgetMC");if("function"===typeof callback){callback({key:data.key,isMeasured:data.isMeasured});}}};vdna.globalCallbackId=function(func){var i;if("function"!==typeof func){throw"vdna.globalCallbackId expects first parameter to be a function.";}window.vdna=window.vdna||{};window.vdna.globalCallbacks=window.vdna.globalCallbacks||[];if(!vdna.arrays.isArray(window.vdna.globalCallbacks)){throw"vdna.globalCallbackId expects window.vdna.globalCallbacks to be falsy or an array.";}window.vdna.globalCallbacks.push(function(){func.apply(this,arguments);});i=window.vdna.globalCallbacks.length-1;return"window.vdna.globalCallbacks["+i+"]";};vdna.startedIdentitySync=false;vdna.identitySyncListeners=[];vdna.callIdentitySyncListeners=function(){var i,fn;for(i=0;(fn=vdna.identitySyncListeners[i]);i=i+1){fn();}};vdna.syncIdentity=function(callback){var vdnaUserId,vdnaWidgetMC,postData,url,identityTtl;if("function"===typeof callback){vdna.identitySyncListeners.push(callback);}if(vdna.startedIdentitySync){return;}vdna.startedIdentitySync=true;url="http://t.api.visualdna.com/1/user/identify?";vdnaUserId=vdna.io.storage.getItem("vdnaUserId");if("0"===vdnaUserId){vdnaUserId=undefined;}identityTtl=365*24*60*60;if(vdnaUserId){vdna.io.storage.setItem("vdnaUserId",vdnaUserId,identityTtl);}else{if(!vdnaUserId){vdnaWidgetMC=vdna.io.storage.getItem("vdnaWidgetMC");}}postData=[{name:"vdnaUserId",value:vdnaUserId||""},{name:"vdnaWidgetMC",value:vdnaWidgetMC||""}];vdna.postForm(url+"&bust="+Math.random()*9999999999,postData,function handleSyncIdentityPost(){var callbackId=vdna.globalCallbackId(function handleGotIdentity(data){vdna.setIdentity(data);vdna.callIdentitySyncListeners();});if("function"!==eval("typeof "+callbackId)){throw"vdna.syncIdentity: Callback ID "+callbackId+" refers to "+eval("typeof "+callbackId);}url+="&callback="+window.encodeURIComponent(callbackId);vdna.runScript(url+"&bust="+Math.random()*9999999999);});};vdna.identify=function(callback,alwaysSync){var vdnaUserId,vdnaWidgetMC,identityTtl;identityTtl=365*24*60*60;vdnaUserId=vdna.io.storage.getItem("vdnaUserId");vdnaWidgetMC=vdna.io.storage.getItem("vdnaWidgetMC");if("string"===typeof vdnaUserId&&vdnaUserId.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)){vdna.io.storage.setItem("vdnaUserId",vdnaUserId,identityTtl);}else{vdnaUserId=false;vdna.io.storage.removeItem("vdnaUserId");if("string"===typeof vdnaWidgetMC&&vdnaWidgetMC.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)){vdna.io.storage.setItem("vdnaWidgetMC",vdnaWidgetMC,identityTtl);}else{if(vdna.temporaryIdentity){vdna.setIdentity(vdna.temporaryIdentity);vdna.syncIdentity(callback);return vdna.temporaryIdentity;}else{vdnaWidgetMC=vdna.guid.generate();vdna.setIdentity({key:vdnaWidgetMC,isMeasured:false});vdna.syncIdentity(callback);vdna.advertising.sendAdEvent("MINTED_USER_KEY");return{key:vdnaWidgetMC,isMeasured:false};}}}if(alwaysSync){vdna.syncIdentity(callback);}else{if("function"===typeof callback){callback({key:vdnaUserId||vdnaWidgetMC,isMeasured:vdnaUserId?true:false});}}return{key:vdnaUserId||vdnaWidgetMC,isMeasured:vdnaUserId?true:false};};vdna.addPixel=vdna.addPixel||function(url,node){var img=new Image();img.src=url;};vdna.postForm=vdna.postForm||function(url,formData,callback){var form,iframe,input,i,nameValuePair,loaded,loadCount,target;target="vdna-post-"+Math.random()*100000000000000000;loaded=false;loadCount=0;function handleLoad(){loaded=true;loadCount=loadCount+1;if(1<loadCount){form.parentNode.removeChild(form);window.setTimeout(function(){iframe.parentNode.removeChild(iframe);},500);iframe.onreadystatechange=null;iframe.onload=null;if("function"===typeof callback){callback();}}else{loaded=false;window.setTimeout(function(){form.submit();},500);}}form=document.createElement("form");form.action=url;form.method="POST";form.target=target;form.style.display="none";form.setAttribute("aria-hidden","true");var div=document.createElement("div");div.innerHTML="<iframe name='"+target+"'></iframe>";iframe=div.removeChild(div.childNodes[0]);iframe.src="about:blank";iframe.title="VisualDNA Analytics";iframe.style.display="none";iframe.width=0;iframe.height=0;iframe.name=target;iframe.setAttribute("aria-hidden","true");if(formData){for(i=0;(nameValuePair=formData[i]);i=i+1){input=document.createElement("input");input.type="hidden";input.name=nameValuePair.name;input.value=nameValuePair.value;form.appendChild(input);}}document.body.insertBefore(form,document.body.firstChild);iframe.onload=function(){if(!loaded){handleLoad();}};iframe.onreadystatechange=function(){if(!loaded&&"complete"===iframe.readyState){handleLoad();}};document.body.insertBefore(iframe,document.body.firstChild);};vdna.events=vdna.events||{sendEventData:function(data){var url="http://general.visualdna-stats.com/events?b=GenericApp_v_0.1&enc=json&e="+window.encodeURIComponent(JSON.stringify(data))+"&bust="+Math.random()*99999999999;vdna.addPixel(url);},sendEvent:function(name,namespace,type,sessionId,data){var extraDataXml,event;extraDataXml="<vdna_widget_mc>"+(vdna.user.unprofiledId()?vdna.user.unprofiledId():"0")+"</vdna_widget_mc>";if(data){extraDataXml=extraDataXml+data;}extraDataXml="<extradata>"+extraDataXml+"</extradata>";event={esVDNAAppUserActionEvent:[{Ba4:namespace,Ba5:vdna.page.url,Ba6:vdna.page.referrer,Ba18:name,Ba20:vdna.apiKey,Ba24:vdna.user.id()?vdna.user.id():"0",Ba25:vdna.io.storage.getItem("vdnaSessionId"),Ba26:type,Ba27:null,Ba28:extraDataXml}]};vdna.events.sendEventData(event);}};vdna.generateSessionId=function(){var i,x,length,chars,sessionId;length=32;chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";sessionId="";for(x=0;x<length;x=x+1){i=Math.floor(Math.random()*62);sessionId+=chars.charAt(i);}return sessionId;};vdna.updateIdentity=vdna.updateIdentity||function(userKey,isMeasured){var cookieName;if(userKey){cookieName=isMeasured?"vdnaUserId":"vdnaWidgetMC";if(userKey!==vdna.io.storage.getItem("vdnaUserId")&&userKey!==vdna.io.storage.getItem("vdnaWidgetMC")){vdna.io.storage.removeItem("vU");vdna.io.storage.removeItem("vdnaTargetingAdsList");vdna.io.storage.removeItem("vT");}vdna.io.storage.setItem(cookieName,userKey,vdna.SECONDS_PER_YEAR);}};vdna.env=vdna.env||{};vdna.env.getStagingUrl=function(url){if("http://general.visualdna-stats.com/events"===url){return"http://events.test.visualdna.com/events";}else{if(/targeting\.api\.visualdna\.com/.test(url)){return url;}else{if("http://widgets-ak.visualdna.com/mirror.visualdna.com/live/itt/v1/aat.html?"===url){return"http://widgets-ak.visualdna.com/mirror.visualdna.com/staging/20100913125116/itt/v1/aat.html?";}else{return url.replace(/(https?:\/\/[^\/]*)visualdna\.com/,"$1staging.visualdna.com");}}}};vdna.env.getVmUrl=function(url){if("http://general.visualdna-stats.com/events"===url){return"http://events.test.visualdna.com/events";}else{if("http://widgets-ak.visualdna.com/mirror.visualdna.com/live/itt/v1/aat.html?"===url){return"http://widgets-ak.mirror.vm.visualdna.com/widgets/itt/v1/aat.html?";}else{return url.replace(/(https?:\/\/[^\/]*)visualdna\.com/,"$1vm.visualdna.com");}}};vdna.env.getEnvUrl=function(url){if(window.location.href.toLowerCase().indexOf("vm.")!=-1){return vdna.env.getVmUrl(url);}else{if(window.location.href.toLowerCase().indexOf("staging.")!=-1){return vdna.env.getStagingUrl(url);}else{return url;}}};var req;vdna.advertising={setup:function(config){this.adApiUrl=vdna.env.getEnvUrl(config.adApiUrl);this.identityApiUrl=vdna.env.getEnvUrl(config.identityApiUrl);if(!vdna.io.storage.getItem(this.adListCookieName)){this.getBackEndData(this.adApiUrl+"?");}},userCookieName:"vdnaUserId",trackCookieName:"vdnaWidgetMC",adListCookieName:"vdnaTargetingAdsList",maxRecommendationsPerAd:15,targetingAdId:"",version:"17",cookieLifePerm:(60*60*24*365),cookieLifeRetry:(60*60*24),gettingBackendData:false,sendAdEvent:function(eventName,adId,timestamp,adWidth,adHeight,elementCount){var extraData,identity,impressionEvent;extraData="";identity=vdna.identify();if(!identity.isMeasured){extraData="<vdna_widget_mc>"+identity.key+"</vdna_widget_mc>";}extraData+="<ts>"+timestamp+"</ts>";extraData+="<ad_size>"+adWidth+"x"+adHeight+"</ad_size>";extraData+="<elements>"+elementCount+"</elements>";extraData="<extradata>"+extraData+"</extradata>";impressionEvent={esVDNAAppUserActionEvent:[{Ba4:"adTargetingTag",Ba5:vdna.page.url,Ba6:vdna.page.referrer,Ba18:eventName,Ba20:vdna.apiKey,Ba24:identity.isMeasured?identity.key:"0",Ba25:vdna.io.storage.getItem("vdnaSessionId"),Ba26:"AD",Ba27:adId,Ba28:extraData}]};vdna.events.sendEventData(impressionEvent);return true;},sendImpressionEvent:function(adId,timestamp,adWidth,adHeight,elementCount){this.sendAdEvent("AD_RECOMMENDATION",adId,timestamp,adWidth,adHeight,elementCount);}};vdna.impressions={tries:0,defaultSample:1,overrideSample:false,parentUrl:"",referrerUrl:"",getUserId:function(){var vdna_cookie=vdna.io.storage.getItem("vdnaUserId");return(!vdna_cookie)?0:vdna_cookie;},trackImpression:function(eventNamespace,pageUrl,referrerUrl){vdna.impressions.parentUrl=pageUrl;vdna.impressions.referrerUrl=referrerUrl;vdna.impressions.sendPageViewEvent();},sendPageViewEvent:function(){vdna.events.sendEvent("PAGE_VIEW","tracking","VDNASITETRACKING",vdna.io.storage.getItem("vdnaSessionId"));return true;},get_url_param:function(param_name){var name,regexS,regex,results;name=param_name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");regexS="[\\?&]"+name+"=([^&#]*)";regex=new RegExp(regexS);results=regex.exec(window.location.href);if(results==null){return false;}else{return window.decodeURIComponent(results[1]);}}};vdna.arrays=vdna.arrays||{isArray:function(variable){return("object"===typeof variable&&variable&&typeof variable.length==="number"&&!(variable.propertyIsEnumerable("length"))&&typeof variable.splice==="function");},contains:function(haystack,needle){var i=0,length;if(!Array.prototype.indexOf){length=haystack.length;for(;i<length;i=i+1){if(haystack[i]===needle){return true;}}return false;}return(haystack.indexOf(needle)!==-1);}};vdna.user=(function(){var that={};that.originalVdnaUserId=vdna.io.storage.getItem("vdnaUserId");that.originalVdnaWidgetMC=vdna.io.storage.getItem("vdnaWidgetMC");that.key=function(){if(this.id()){return this.id();}else{return this.unprofiledId();}};that.id=function(){var key=vdna.io.storage.getItem("vdnaUserId");if("0"!==key){return key;}};that.unprofiledId=function(){return vdna.io.storage.getItem("vdnaWidgetMC");};that.assumeUninferred=function(bool){if(that.id()){vdna.io.storage.removeItem("vU");return false;}if(!that.id()&&"undefined"!==typeof bool){if(true===bool){vdna.io.storage.setItem("vU","true",vdna.SECONDS_PER_DAY);vdna.remarketing.sendRemarketingEvent("SET_ASSUME_UNINFERRED");}if(false===bool){vdna.io.storage.removeItem("vU");}}if(vdna.io.storage.getItem("vU")){return true;}else{return false;}};that.hasInferredProfile=function(bool){if(!that.id()&&!that.assumeUninferred()&&vdna.io.storage.getItem("vT")){return true;}return false;};return that;}());vdna.page.url=window.location.href;vdna.page.referrer=document.referrer;vdna.loaded=false;vdna.onLoad=function(callback){if(window.attachEvent){window.attachEvent("onload",function(){vdna.loaded=true;callback();});}else{if(window.addEventListener){window.addEventListener("load",function(){vdna.loaded=true;callback();},null);}}};vdna.init=vdna.init||function(){if(!vdna.io.storage.getItem("vdnaSessionId")){vdna.io.storage.setItem("vdnaSessionId",vdna.generateSessionId(),1800);}};vdna.init();window.vdna=vdna;}());"use strict";(function(){var a;window.vdna=window.vdna||{};a=window.vdna;a.advertising=a.advertising||{};a.advertising.getRecommendedAdId=function(c,b){var e,d;e=c+"x"+b;d=this.recommendedAds;if("object"===typeof d&&"object"===typeof d[e]&&d[e].length>0&&"function"===typeof d[e].pop){return d[e].pop();}};a.when=function(e,d,b){var c;if(e){d();return;}else{c=window.setInterval(function(){window.clearInterval(c);d();},b);}};a.advertising.getRecommendedAdDoubleClickUrlParams=function(b,c){var f,e,d;f=this.getRecommendedAdId(b,c)||0;d=Math.round(new Date().getTime()/1000);e=document.body.getElementsByTagName("*").length;window.setTimeout(function(){a.when(document.body,function(){a.identify(function(){a.advertising.sendImpressionEvent(f,d,b,c,e);});},100);},100);return"vdna="+window.encodeURIComponent(f);};a.analytics=a.analytics||{};a.analytics.insertAudienceAnalyticsTag=function(){var c,b,d;b="http://widgets-ak.visualdna.com/mirror.visualdna.com/live/itt/v1/aat.html?";b=a.env.getEnvUrl(b);d=document.referrer?document.referrer:"";b=b+"parent_url="+window.encodeURIComponent(window.location.href)+"&ref="+window.encodeURIComponent(d);if(a.apiKey){b+="&api_key="+window.encodeURIComponent(a.apiKey);}c=document.createElement("iframe");c.title="VisualDNA Audience Analytics";c.src=b;c.width="1";c.height="1";c.style.display="none";document.body.insertBefore(c,document.body.firstChild);};a.onLoad(function(){a.identify(a.analytics.insertAudienceAnalyticsTag);});a.setTemporaryIdentity=a.setTemporaryIdentity||function(b){var c;if(b&&b.key){a.temporaryIdentity=b;}};a.setTemporaryIdentity=a.setTemporaryIdentity||function(b){var c;if(b&&b.key){a.temporaryIdentity=b;}};a.setClient=function(b){a.apiKey=b;};a.advertising.setRecommendedAds=function(b){a.advertising.recommendedAds=b;};}());vdna.setClient("mirrornews");vdna.advertising.setRecommendedAds([]);