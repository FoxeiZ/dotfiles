"use strict";!function(t){var e={totalSec:0,lastTimestamp:0,el:null,initiate:function(){var t=document.createElement("div");t.id="j2team_fb_timer",t.style.cssText="position: fixed;bottom: 15px;left: 15px;text-shadow: 2px 2px 8px rgba(150, 150, 150, 0.9);color: #fff;padding: 5px 8px;background-color: #000;border-radius: 10px;opacity: 0.7;font-size: 18px;",null!==document.querySelector("#facebook.__fb-dark-mode")&&(t.style.color="rgb(0 255 78)"),this.el=document.createElement("span"),this.el.classList.add("j2team_timer"),this.el.textContent="00:00:00",t.appendChild(this.el),document.body.appendChild(t),this.loaded()},loaded:function(){var o=this;t.storage.local.get({fb_timer_second:null,fb_timer_date:null},function(t){var a=1+parseInt(t.fb_timer_second);o.totalSec=a||0,o.lastTimestamp=t.fb_timer_date||o.getTimestamp(),o.track(),o.autoSave(),window.addEventListener("unload",e.autoSave.bind(e),!1)})},track:function(){var t=void 0;(t=this.getTimestamp())!==this.lastTimestamp&&(this.totalSec=0),this.totalSec++,this.lastTimestamp=t,this.update(),window.setTimeout(e.track.bind(e),1e3)},update:function(){var t=void 0,e=void 0,o=void 0;t=Math.floor(this.totalSec/3600),e=Math.floor((this.totalSec-3600*t)/60),o=this.totalSec-60*e-3600*t,t<10&&(t="0"+t),e<10&&(e="0"+e),o<10&&(o="0"+o),this.el.textContent=t+":"+e+":"+o},getTimestamp:function(){var t=new Date;return[t.getFullYear(),t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,t.getDate()<10?"0"+t.getDate():t.getDate()].join("")},autoSave:function(){try{t.storage.local.set({fb_timer_second:this.totalSec,fb_timer_date:this.lastTimestamp})}catch(o){}window.setTimeout(e.autoSave.bind(e),3e4)}};t.storage.sync.get({showFacebookTimeCounter:!1},function(t){t.showFacebookTimeCounter&&e.initiate()})}(chrome);