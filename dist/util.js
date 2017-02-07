'use strict';Object.defineProperty(exports,'__esModule',{value:!0});function _toConsumableArray(b){if(Array.isArray(b)){for(var c=0,d=Array(b.length);c<b.length;c++)d[c]=b[c];return d}return Array.from(b)}var history=window.history,getOrigin=function(b){return b.origin||b.protocol+'//'+b.host},origin=exports.origin=getOrigin(window.location),originRegEx=exports.originRegEx=new RegExp(origin),sanitize=exports.sanitize=function(b){var c=b.replace(originRegEx,''),d=c.match(/^\//)?c.replace(/\/{1}/,''):c;return''===d?'/':d},parseURL=exports.parseURL=function(b){var c=document.createElement('a');return c.href=b,c},link=exports.link={isSameOrigin:function isSameOrigin(b){return origin===getOrigin(parseURL(b))},isHash:function isHash(b){return /#/.test(b)},isSameURL:function isSameURL(b){return window.location.search===parseURL(b).search&&window.location.pathname===parseURL(b).pathname}},getScrollPosition=exports.getScrollPosition=function(){return window.pageYOffset||window.scrollY},saveScrollPosition=exports.saveScrollPosition=function(){return window.history.replaceState({scrollTop:getScrollPosition()},'')},restoreScrollPos=exports.restoreScrollPos=function(){var b=history.state?history.state.scrollTop:void 0;return history.state&&void 0!==b?(window.scrollTo(0,b),b):void window.scrollTo(0,0)},activeLinks=[],setActiveLinks=exports.setActiveLinks=function(b){activeLinks.forEach(function(c){return c.classList.remove('is-active')}),activeLinks.splice(0,activeLinks.length),activeLinks.push.apply(activeLinks,_toConsumableArray(Array.prototype.slice.call(document.querySelectorAll('[href$="'+b+'"]')))),activeLinks.forEach(function(c){return c.classList.add('is-active')})};