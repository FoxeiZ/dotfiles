"use strict";!function(e,t){var n=new URL(t.top.location.href),a=n.searchParams.get("analytics"),o=n.searchParams.get("ref");if(o&&a&&"j2team"===o&&1===parseInt(a)){var c=document.createElement("script");c.src=e.runtime.getURL("scripts/shopeefood-analytics.js"),c.onload=function(){this.remove()},(document.head||document.body||document.documentElement).appendChild(c)}}(chrome,window);