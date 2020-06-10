(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(242)),l={title:"128T Monitoring Agent 1.2 Release Notes",sidebar_label:"1.2"},i={id:"release_notes_monitoring_agent_1.2",title:"128T Monitoring Agent 1.2 Release Notes",description:"Release 1.2.1",source:"@site/docs/release_notes_monitoring_agent_1.2.md",permalink:"/docs/release_notes_monitoring_agent_1.2",lastUpdatedAt:1591797696,sidebar_label:"1.2",sidebar:"docs",previous:{title:"128T Monitoring Agent 2.0 Release Notes",permalink:"/docs/release_notes_monitoring_agent_2.0"},next:{title:"128T Monitoring Agent 1.1 Release Notes",permalink:"/docs/release_notes_monitoring_agent_1.1"}},c=[{value:"Release 1.2.1",id:"release-121",children:[{value:"New Features and Improvements",id:"new-features-and-improvements",children:[]},{value:"Issues Fixed",id:"issues-fixed",children:[]}]},{value:"Release 1.2.0",id:"release-120",children:[{value:"New Features and Improvements",id:"new-features-and-improvements-1",children:[]},{value:"Issues Fixed",id:"issues-fixed-1",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"release-121"},"Release 1.2.1"),Object(o.b)("h3",{id:"new-features-and-improvements"},"New Features and Improvements"),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MON-225")," Update telegraf dependency to 1.14.3")),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"MON-218")," Expose MAC address in the device state input"),Object(o.b)("p",{parentName:"li"},"Allow better correlation between device and network interfaces."))),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"MON-210")," Improve performance of several provided inputs"),Object(o.b)("p",{parentName:"li"},"Reduce the resource consumption as well as the time needed to collect data. In particular, the ",Object(o.b)("inlineCode",{parentName:"p"},"t128_metrics")," input has been significanly improved."))),Object(o.b)("h3",{id:"issues-fixed"},"Issues Fixed"),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"MON-205")," Honor the input enable/disable flag in the agent's config"),Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Resolution"))," The configuration allows the user to disable an input. However, an input was being treated as enabled as long as it existed in the config. That configuration option is now honored."))),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"MON-225")," ",Object(o.b)("inlineCode",{parentName:"p"},"t128_events")," input would occasionally drop or delayed events"),Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Resolution"))," Update the telegraf dependency to 1.14.3 as well as the ",Object(o.b)("inlineCode",{parentName:"p"},"execd")," input to better handle simultaneous events."))),Object(o.b)("h2",{id:"release-120"},"Release 1.2.0"),Object(o.b)("h3",{id:"new-features-and-improvements-1"},"New Features and Improvements"),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"MON-184")," Added stop command in cli to stop all associated Telegraf services."),Object(o.b)("p",{parentName:"li"},"For help using this cli option, please refer to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/plugin_monitoring_agent#stopping-services"}),"Monitoring Agent Guide"),"."))),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"MON-141")," Added support for multiple logically seperate monitoring agent instances with the ",Object(o.b)("inlineCode",{parentName:"p"},"lib-directory")," config option."),Object(o.b)("p",{parentName:"li"},"For help configuring this option, please refer to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/plugin_monitoring_agent#configuration"}),"Monitoring Agent Guide"),"."))),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"MON-208")," Update Telegraf to latest stable version 1.14.2."),Object(o.b)("p",{parentName:"li"},"A new stable version of telegraf was released upstream. The main reason for upgrading was to get support for multiline lines."))),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"MON-194")," Added arp state collector to collect state of the arp table."),Object(o.b)("p",{parentName:"li"},"To configure the new input plugin, please refer to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/plugin_monitoring_agent#arp-state-collector"}),"Monitoring Agent Guide"),"."))),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MON-144")," Added configuration option to enable tracking of index so that the event collector picks up where it left off in the case of a restart.")),Object(o.b)("p",null,"For help configuring this option, please refer to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/plugin_monitoring_agent#event-collector"}),"Monitoring Agent Guide"),"."),Object(o.b)("h3",{id:"issues-fixed-1"},"Issues Fixed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"MON-195")," Device state collector collects state from peer node on an HA router."),Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Resolution"))," The device state collector will now only request state from the local node."))),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"MON-181")," Event collector excludes multiline events."),Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Resolution"))," The event collector will accumulate subsequent invalid lines and attempt to submit the accumulated line."))))}p.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return n?a.a.createElement(d,i(i({ref:t},b),{},{components:n})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<o;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);