"use strict";!function(e){var n=document.createElement("script");n.id="j2team-js",n.src=e.extension.getURL("scripts/facebook-content-script.js"),n.onload=function(){document.getElementById("j2team-js").remove()},(document.head||document.documentElement||document.body).appendChild(n),window.addEventListener("message",function(n){n.isTrusted&&n.origin.includes(".facebook.com")&&"facebook_content_script"===n.data.sender&&"sync_settings"===n.data.cmd&&e.storage.sync.get({blockSeen:!1,blockTypingChat:!1},function(e){window.postMessage({cmd:"sync_settings_response",sender:"j2team_security",data:e})})}),e.storage.onChanged.addListener(function(e,n){if("sync"===n&&(e.blockSeen||e.blockTypingChat)){var t={};e.blockSeen&&(t.blockSeen=e.blockSeen.newValue),e.blockTypingChat&&(t.blockTypingChat=e.blockTypingChat.newValue),window.postMessage({cmd:"sync_settings_response",sender:"j2team_security",data:t})}})}(chrome);