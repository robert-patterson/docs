(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(1),o=r(11),a=(r(0),r(223)),i={title:"Creating a Bootable USB from ISO",sidebar_label:"Creating Bootable USB"},c={id:"intro_creating_bootable_usb",title:"Creating a Bootable USB from ISO",description:"## Introduction",source:"@site/docs/intro_creating_bootable_usb.md",permalink:"/docs/intro_creating_bootable_usb",editUrl:"https://github.com/128technology/docs/tree/master/docs/intro_creating_bootable_usb.md",lastUpdatedAt:1586877354,sidebar_label:"Creating Bootable USB",sidebar:"docs",previous:{title:"Quick Start from Bootable ISO",permalink:"/docs/intro_ztp"},next:{title:"Upgrading the 128T Networking Platform",permalink:"/docs/intro_upgrading"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Windows",id:"windows",children:[{value:"Prequisites",id:"prequisites",children:[]},{value:"Procedure",id:"procedure",children:[]}]},{value:"OSX",id:"osx",children:[]},{value:"System Preparation",id:"system-preparation",children:[]},{value:"Further Resources",id:"further-resources",children:[]}],s={rightToc:l};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"128 Technology distributes its software as a set of RPM packages, an ISO or a container.  The ISO is most commonly used to stage a system when it does not have an operating system or if the system is being repurposed as a 128T."),Object(a.b)("p",null,"The goal of this guide is produce a bootable USB drive from a 128T ISO."),Object(a.b)("p",null,"The first step is to acquire an ISO of the version of software that is intended to be loaded onto the bootable USB media following the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/intro_downloading_iso"}),"download instructions"),"."),Object(a.b)("h2",{id:"windows"},"Windows"),Object(a.b)("h3",{id:"prequisites"},"Prequisites"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Install Rufus software ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://rufus.akeo.ie/downloads/"}),"https://rufus.akeo.ie/downloads/")," ",Object(a.b)("sup",Object(n.a)({parentName:"li"},{id:"fnref-1"}),Object(a.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))),Object(a.b)("li",{parentName:"ul"},"Verify in system BIOS that the USB drive is listed in the boot priority properly")),Object(a.b)("h3",{id:"procedure"},"Procedure"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Launch Rufus"),Object(a.b)("li",{parentName:"ul"},"Select the USB Device"),Object(a.b)("li",{parentName:"ul"},'Select "MBR partition scheme for BIOS or UEFI"'),Object(a.b)("li",{parentName:"ul"},"Select the 128T ISO"),Object(a.b)("li",{parentName:"ul"},'Click "Start"'),Object(a.b)("li",{parentName:"ul"},'Select "Write in ISO image mode"'),Object(a.b)("li",{parentName:"ul"},'Click "OK"')),Object(a.b)("h2",{id:"osx"},"OSX"),Object(a.b)("p",null,"Creating a bootable ISO from OS is straightforward.  The only requirements are that you need administrative privileges to the system."),Object(a.b)("p",null,"Locate the USB volume name of the target drive (in this example, \u201cdisk2s1\u201d) with the ",Object(a.b)("inlineCode",{parentName:"p"},"diskutil")," command."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"diskutil list\n")),Object(a.b)("p",null,"Once you have identified the target USB device, ensure that you have ISO already copied onto the machine creating the bootable USB.  This example uses ",Object(a.b)("inlineCode",{parentName:"p"},"128T-OTP-4.2.4-1.el7.x86_64.iso")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo diskutil unmount /dev/disk2s1\nsudo dd if=~/128T-OTP-4.2.4-1.el7.x86_64.iso of=/dev/rdisk2 bs=16384\ndiskutil eject /dev/disk2s1\n")),Object(a.b)("h2",{id:"system-preparation"},"System Preparation"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Ensure that the platform meets minimal 128T hardware requirements"),Object(a.b)("li",{parentName:"ul"},"BIOS configured to boot off from USB drive first")),Object(a.b)("h2",{id:"further-resources"},"Further Resources"),Object(a.b)("p",null,"Additional information on other available possible USB bootable creation tools can be found here as well:"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.pcsteps.com/1461-create-linux-installation-usb-dvd/"}),"https://www.pcsteps.com/1461-create-linux-installation-usb-dvd/")),Object(a.b)("div",{className:"footnotes"},Object(a.b)("hr",{parentName:"div"}),Object(a.b)("ol",{parentName:"div"},Object(a.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-1"}),"tested on version 2.18.1213",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}b.isMDXComponent=!0},223:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(r),p=n,m=u["".concat(i,".").concat(p)]||u[p]||d[p]||a;return r?o.a.createElement(m,c({ref:t},s,{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);