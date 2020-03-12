(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(9),o=(n(0),n(161)),i={title:"Non-forwarding HA Interfaces",sidebar_label:"Non-forwarding HA Interfaces"},c={id:"config_non_forwarding_ha_interfaces",title:"Non-forwarding HA Interfaces",description:"Non forwarding interfaces are used for several purposes, including HA peer node control traffic, reaching a 128T Conductor from a 128T Router, reaching managed 128T Routers from a 128T Conductor, management traffic and reaching the public internet.",source:"@site/docs/config_non_forwarding_ha_interfaces.md",permalink:"/docs/config_non_forwarding_ha_interfaces",editUrl:"https://github.com/128technology/docs/tree/master/docs/config_non_forwarding_ha_interfaces.md",lastUpdatedBy:"Michael Baj",lastUpdatedAt:1584042689,sidebar_label:"Non-forwarding HA Interfaces",sidebar:"docs",previous:{title:"Configuring High Availability (128T Router)",permalink:"/docs/config_ha"},next:{title:"Adding Interfaces to HA Team Interface",permalink:"/docs/config_adding_interfaces_to_ha_team"}},d=[],s={rightToc:d};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Non forwarding interfaces are used for several purposes, including HA peer node control traffic, reaching a 128T Conductor from a 128T Router, reaching managed 128T Routers from a 128T Conductor, management traffic and reaching the public internet."),Object(o.b)("p",null,"Before we get started, it is important to understand the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"concepts_interface_types"}),"terminology relating to 128T interfaces")),Object(o.b)("div",{className:"admonition admonition-important"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Changing a forwarding interface to non forwarding and vice versa is not dynamically reconfigurable and requires a restart of the 128T node"))),Object(o.b)("p",null,"A quick recap:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"External")," interfaces are not used for any control traffic to the node's HA peer and the user has no limit to how many ",Object(o.b)("inlineCode",{parentName:"p"},"external")," interfaces they configure. A user may configure either one ",Object(o.b)("inlineCode",{parentName:"p"},"fabric")," or one ",Object(o.b)("inlineCode",{parentName:"p"},"shared")," interface per node, and that interface will be used for all HA control traffic."),Object(o.b)("p",null,"This example will configure an interface to be used to establish connectivity between HA peers. To configure a non-forwarding interface, set the ",Object(o.b)("inlineCode",{parentName:"p"},"forwarding")," flag to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),". This examples uses a ",Object(o.b)("inlineCode",{parentName:"p"},"device-interface")," set to type ",Object(o.b)("inlineCode",{parentName:"p"},"ethernet"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"node    T116_DUT1\n    name                      T116_DUT1\n\n    device-interface          control\n        name               control\n        type               ethernet\n        pci-address        0000:00:04.0\n        forwarding         false\n")),Object(o.b)("p",null,"The next step is to add a ",Object(o.b)("inlineCode",{parentName:"p"},"network-interface"),". Start by creating a ",Object(o.b)("inlineCode",{parentName:"p"},"fabric")," interface to reach the HA peer node.  ",Object(o.b)("inlineCode",{parentName:"p"},"fabric")," was chosen in this situation because the HA nodes are directly connected:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"node    T127_DUT1\n    name                      T127_DUT1\n\n    device-interface          control\n        name               control\n        type               ethernet\n        pci-address        0000:00:04.0\n        forwarding         false\n\n        network-interface  peer-fabric-intf\n            name       peer-fabric-intf\n            type       fabric\n\n            address    172.16.1.1\n                ip-address     172.16.1.1\n                prefix-length  24\n                gateway        172.16.1.201\n            exit\n        exit\n    exit\nexit\n")),Object(o.b)("p",null,"This interface is needed to establish connectivity to the HA peer node. A similar ",Object(o.b)("inlineCode",{parentName:"p"},"fabric")," interface is required on each node of the HA pair."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"node    T127_DUT2\n    name                      T127_DUT2\n\n    device-interface          control\n        name               control\n        type               ethernet\n        pci-address        0000:00:04.0\n        forwarding         false\n\n        network-interface  peer-fabric-intf\n            name       peer-fabric-intf\n            type       fabric\n\n            address    172.16.1.2\n                ip-address     172.16.1.2\n                prefix-length  24\n                gateway        172.16.1.201\n            exit\n        exit\n    exit\nexit\n")),Object(o.b)("p",null,"At this point, it may be a good time to commit the configuration."),Object(o.b)("p",null,"The interfaces created within the 128T configuration will manage corresponding interfaces in Linux. 128T will dynamically update all SSH tunnels which are used to send control traffic to the peer node."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"eth1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet6 fe80::f816:3eff:fe4c:5ebe  prefixlen 64  scopeid 0x20<link>\n        ether fa:16:3e:4c:5e:be  txqueuelen 1000  (Ethernet)\n        RX packets 5581689  bytes 1057148542 (1008.1 MiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 5818989  bytes 1002306918 (955.8 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n        \nteam-eth1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 172.16.1.1  netmask 255.255.255.0  broadcast 172.16.1.255\n        inet6 fe80::f816:3eff:fe4c:5ebe  prefixlen 64  scopeid 0x20<link>\n        ether fa:16:3e:4c:5e:be  txqueuelen 1000  (Ethernet)\n        RX packets 5544219  bytes 977056448 (931.7 MiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 5777931  bytes 979222766 (933.8 MiB)\n        TX errors 0  dropped 2 overruns 0  carrier 0  collisions 0\n")),Object(o.b)("div",{className:"admonition admonition-note"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'The first time a non-forwarding interface is configured and 128T "takes over" the Linux interfaces, a backup of all the previous ifcfg scripts will be created at ',Object(o.b)("inlineCode",{parentName:"p"},"/var/run/128technology/network-script-backups.tar.gz"),"."))),Object(o.b)("p",null,"Notice the interfaces are configured as network team because the type was set to ",Object(o.b)("inlineCode",{parentName:"p"},"fabric"),". If instead the type was set to ",Object(o.b)("inlineCode",{parentName:"p"},"shared")," then interface ",Object(o.b)("inlineCode",{parentName:"p"},"eth1")," would have been configured directly with the static IP address."),Object(o.b)("div",{className:"admonition admonition-info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Upon committing configuration changing the control IP addresses, it can take up to ",Object(o.b)("strong",{parentName:"p"},"two minutes")," for the node to reconnect internally or reconnect to its HA peer node. This delay happens because 128T is waiting for the TCP state machine to close existing connections.  Don't panic.  Just sit tight and wait for everything to reconnect."))),Object(o.b)("p",null,"While this example showcases peering with a HA node on a conductor, the configuration and operations are identical for a router."),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"show system connectivity")," to ensure that both nodes are connected."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@T127_DUT1.Conductor# show system connectivity\nWed 2019-02-13 16:09:06 UTC\n\n===================== ===================== ==============\n Local Node            Remote Node           State\n===================== ===================== ==============\n T127_DUT1.Conductor   T127_DUT2.Conductor   connected\n\nCompleted in 0.11 seconds\n")),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"show system connectivity internal")," to confirm that the internal processes are communicating with each other."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@T127_DUT1.Conductor# show system connectivity internal\nWed 2019-02-13 16:09:30 UTC\n\n===================== ===================== ================= ================= ===========\n Local Node            Remote Node           Service           Address           Message\n===================== ===================== ================= ================= ===========\n T127_DUT1.Conductor   T127_DUT1.Conductor   Zookeeper         127.0.0.1:4370    Connected\n T127_DUT1.Conductor   T127_DUT1.Conductor   ssc               127.0.0.2:12222   Connected\n T127_DUT1.Conductor   T127_DUT1.Conductor   step-repository   127.0.0.2:15555   Connected\n T127_DUT1.Conductor   T127_DUT2.Conductor   Internal SSH      127.0.0.1:932     Connected\n T127_DUT1.Conductor   T127_DUT2.Conductor   LeaderElect       127.0.0.1:2225    Connected\n T127_DUT1.Conductor   T127_DUT2.Conductor   Quorum            127.0.0.1:2224    Connected\n T127_DUT1.Conductor   T127_DUT2.Conductor   ZED               127.0.0.1:4392    Connected\n T127_DUT1.Conductor   T127_DUT2.Conductor   Zookeeper         127.0.0.1:4371    Connected\n T127_DUT1.Conductor   T127_DUT2.Conductor   influx-rpc        127.0.0.3:8088    Connected\n T127_DUT1.Conductor   T127_DUT2.Conductor   ssc               127.0.0.3:12222   Connected\n T127_DUT1.Conductor   T127_DUT2.Conductor   step-repository   127.0.0.3:15555   Connected\n T127_DUT1.Conductor   T127_DUT2.Conductor   tank              127.0.0.3:11011   Connected\n")),Object(o.b)("p",null,"Now that connectivity has been fully established between HA peer nodes, it is useful to configure some external management interfaces. This example will create an ",Object(o.b)("inlineCode",{parentName:"p"},"external")," Ethernet interface using ",Object(o.b)("inlineCode",{parentName:"p"},"DHCPv4"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"device-interface          mgmt\n    name               mgmt\n    type               ethernet\n    pci-address        0000:00:03.0\n    forwarding         false\n\n    network-interface  ext-mgmt-intf\n        name               ext-mgmt-intf\n        type               external\n        default-route      true\n\n        management-vector\n            name      ext-mgmt-vector\n            priority  100\n        exit\n        dhcp               v4\n    exit\nexit\n")),Object(o.b)("p",null,"Notice that some additional fields were configured. The ",Object(o.b)("inlineCode",{parentName:"p"},"default-route")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),".  This instructs Linux to set this external interface as the default route for all traffic. Secondly, a ",Object(o.b)("inlineCode",{parentName:"p"},"management-vector")," was configured.  This is required when setting the ",Object(o.b)("inlineCode",{parentName:"p"},"default-route")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),". The user is allowed to define multiple interfaces as the ",Object(o.b)("inlineCode",{parentName:"p"},"default-route"),", so the ",Object(o.b)("inlineCode",{parentName:"p"},"management-vector")," is used to define the priority of all interfaces which are set as the default route."),Object(o.b)("div",{className:"admonition admonition-note"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you configure the interface that is currently being used to connect to 128T as an ",Object(o.b)("inlineCode",{parentName:"p"},"external")," interface, you will notice your connection hang for a few moments while 128T takes over the interface after the config is committed. Once the commit is complete you will notice the interface's ifcfg script has been updated:"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"[root@t127-dut1 ~]# cat /etc/sysconfig/network-scripts/ifcfg-eth0\nBOOTPROTO=dhcp\nDEFROUTE=yes\nDEVICE=eth0\nMETRIC=100\nMTU=1500\nNM_CONTROLLED=no\nONBOOT=yes\nTYPE=Ethernet\nUSERCTL=no\n")),Object(o.b)("p",null,"The goal of this functionality is to eliminate the need for administrators to have to drop to the Linux shell to manually configure interfaces. A configuration field name ",Object(o.b)("inlineCode",{parentName:"p"},"ifcfg-option")," was added to the ",Object(o.b)("inlineCode",{parentName:"p"},"network-interface")," to allow super users to add any config field directly to an ifcfg script that 128T currently does not support. 128T does validate that the user is not trying to configure any options that 128T already configures to avoid creating conflicts with 128T settings. An example is firewalld zones.  Perhaps this external interface needs to be configured as a trusted interface."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"network-interface  ext-mgmt-intf\n    name               ext-mgmt-intf\n    global-id          5\n    type               external\n    default-route      true\n\n    management-vector\n        name      ext-mgmt-vector\n        priority  100\n    exit\n    dhcp               v4\n\n    ifcfg-option       ZONE\n        name   ZONE\n        value  trusted\n    exit\nexit\n")),Object(o.b)("p",null,"Upon committing this configuration you will see the ifcfg script get updated with the new value."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"[root@t127-dut1 ~]# cat /etc/sysconfig/network-scripts/ifcfg-eth0\nBOOTPROTO=dhcp\nDEFROUTE=yes\nDEVICE=eth0\nMETRIC=100\nMTU=1500\nNM_CONTROLLED=no\nONBOOT=yes\nTYPE=Ethernet\nUSERCTL=no\nZONE=trusted\n")))}l.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,m=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return n?r.a.createElement(m,c({ref:t},s,{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);