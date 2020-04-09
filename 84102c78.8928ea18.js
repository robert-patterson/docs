(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(11),o=(n(0),n(237)),i={title:"128T 4.2.2 Release Notes",sidebar_label:"4.2.2"},s={id:"release_notes/128t_release_notes_4.2.2",title:"128T 4.2.2 Release Notes",description:":::note",source:"@site/docs/release_notes/128t_release_notes_4.2.2.md",permalink:"/docs/release_notes/128t_release_notes_4.2.2",editUrl:"https://github.com/128technology/docs/tree/master/docs/release_notes/128t_release_notes_4.2.2.md",lastUpdatedAt:1586452018,sidebar_label:"4.2.2",sidebar:"docs",previous:{title:"128T 4.2.1 Release Notes",permalink:"/docs/release_notes/128t_release_notes_4.2.1"},next:{title:"128T 4.2.3 Release Notes",permalink:"/docs/release_notes/128t_release_notes_4.2.3"}},c=[{value:"Special Considerations",id:"special-considerations",children:[]},{value:"Issues Fixed",id:"issues-fixed",children:[]},{value:"Caveats",id:"caveats",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The 4.2.2 release is a superset of the 4.2.1 release. Features and corrections in the 4.2.1 release are not provided in these release notes. Please refer to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/release_notes/128t_release_notes_4.2.1"}),"4.2.1 release notes")," for further information."))),Object(o.b)("h2",{id:"special-considerations"},"Special Considerations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Support has been added to manage the Linux interfaces that are not part of the controlled 128T interfaces. These interfaces are called non-forwarding interfaces. These interfaces should be configured, when the conductors are upgraded to 4.2.0 the configuration validation will provide a warning that a non-forwarding interface is not configured until this configuration is added for each node/router. If these interfaces are configured and defined before the conductors are upgraded, the shared or fabric device interface type must be explicitly set and DHCP is not supported. Note: 4.1.5 does not raise a validation error if the interface had DHCP. (I95-30831)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Support has been added to allow the 128T Software to determine the number of CPU forwarding Cores that the router will use. In previous releases the "automatic/manual" parameter was not available and the core count was set in either the local.init or in the UI for the number of cores. If local.init is set only, 4.2.0 will set to automatic and determine the number of cores to use. If set in the UI, this parameter will be set to manual and the existing value will be used. Note if automatic is set and the core count is changed in the PCLI the change will be accepted as valid configuration but the automatic parameter will override as this parameter takes precedence over the value in the forwarding core count. (I95-30884)')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Prior to 4.1.5, any peering with routers that have the same IP addresses was not supported. In 4.1.5 or greater remote peers having the same IP address is now supported in one direction, with the use of "outbound-only". 128T currently does not support ALL routers having the same IP address, the same IP address support is unidirectional. For example:'),Object(o.b)("p",{parentName:"li"},"  The following is supported:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"    R1(172.16.1.1) --- peered --- R2 (192.168.1.1)\n              |------- peered --- R3 (192.168.1.1)\n")),Object(o.b)("p",{parentName:"li"},"  The following is not supported:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"    R1(192.168.1.1) --- peered --- R2 (192.168.1.1)\n               |------- peered --- R3 (192.168.1.1)\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"When creating non-forwarding interfaces on pre 4.2.0 routers, these interfaces should not be configured with default routes until after upgrading the routers to 4.2.0 or greater. (I95-30940)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"On 128T nodes installed after July 1 2019 on pre 4.2.0 versions, Chrome running on MAC OSX Cataline does not consider the 128T self signed web certificates valid. Apple has put out an advisory: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.apple.com/en-us/HT210176"}),"https://support.apple.com/en-us/HT210176")," . Once the node is upgraded to 4.2.0, create a new self signed web cert in the PCLI ",Object(o.b)("inlineCode",{parentName:"p"},"create certificate self-signed webserver")," (I95-31672)"))),Object(o.b)("h2",{id:"issues-fixed"},"Issues Fixed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"I95-32521")," Packets continuously dropping on HA failover triggered by power outage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"I95-32686")," BFD packets only sent once a minute on an outbound only link even when the peer is sending once a second")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"I95-32699")," Packets dropped on HA failure with adaptive encryption"))),Object(o.b)("h2",{id:"caveats"},"Caveats"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"I95-29592")," Conductor UI and/or PCLI may not update the asset software version correctly"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"_**Symptom:**_ The Conductor UI and/or the PCLI may not correctly reflect the software version running on the asset\n\n_**Conditions:**_ After the asset has been upgraded\n\n_**Corrective Action:**_ If the asset is not updated after ~5 minutes after an upgrade is performed, the salt-minion will need a restart on the asset node that does not update the version. This is done with the following command on the node as the root Linux user:\n```\n")),Object(o.b)("p",{parentName:"li"},"systemctl restart salt-minion"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"```\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"I95-27808")," ",Object(o.b)("inlineCode",{parentName:"p"},"sync peer addresses router force")," from conductor may not trigger router to send address information from peer"),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Symptom:"))," When performing the following command on the Conductor PCLI, ",Object(o.b)("inlineCode",{parentName:"p"},"sync peer addresses router force")," the router may not provide the peer address information"),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Conditions:"))," Unknown"),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Corrective Action:"))," Perform the PCLI command on the router to update the information on the conductor."))))}l.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?a.a.createElement(m,s({ref:t},p,{components:n})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);