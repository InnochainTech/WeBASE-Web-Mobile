(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4af7ca44"],{5963:function(e,t,a){"use strict";a("a43d")},"99af":function(e,t,a){"use strict";var n=a("23e7"),i=a("d039"),r=a("e8b5"),c=a("861d"),o=a("7b0b"),s=a("50c4"),d=a("8418"),l=a("65f0"),b=a("1dde"),u=a("b622"),f=a("2d00"),O=u("isConcatSpreadable"),j=9007199254740991,v="Maximum allowed index exceeded",m=f>=51||!i((function(){var e=[];return e[O]=!1,e.concat()[0]!==e})),p=b("concat"),h=function(e){if(!c(e))return!1;var t=e[O];return void 0!==t?!!t:r(e)},k=!m||!p;n({target:"Array",proto:!0,forced:k},{concat:function(e){var t,a,n,i,r,c=o(this),b=l(c,0),u=0;for(t=-1,n=arguments.length;t<n;t++)if(r=-1===t?c:arguments[t],h(r)){if(i=s(r.length),u+i>j)throw TypeError(v);for(a=0;a<i;a++,u++)a in r&&d(b,u,r[a])}else{if(u>=j)throw TypeError(v);d(b,u++,r)}return b.length=u,b}})},"9ddc":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),i=Object(n["O"])("data-v-4f4ed920");Object(n["A"])("data-v-4f4ed920");var r={class:"overview-item-base"},c={class:"item"},o=Object(n["i"])("div",{class:"key"},"交易哈希",-1),s={class:"item"},d=Object(n["i"])("div",{class:"key"},"发送方",-1),l={style:{"word-break":"break-all"}},b={class:"item"},u=Object(n["i"])("div",{class:"key"},"接收方",-1),f={style:{"word-break":"break-all"}},O={class:"item"},j=Object(n["i"])("div",{class:"key"},"块高",-1),v={style:{"word-break":"break-all"}},m={style:{overflow:"hidden","text-overflow":"ellipsis"},class:"item-time"},p=Object(n["i"])("span",{style:{}},"更多 >",-1);Object(n["y"])();var h=i((function(e,t,a,h,k,g){var y=Object(n["E"])("router-link"),w=Object(n["E"])("van-list");return Object(n["x"])(),Object(n["f"])("div",null,[Object(n["i"])(w,{loading:e.loading,"onUpdate:loading":t[1]||(t[1]=function(t){return e.loading=t}),finished:e.finished,"finished-text":"没有更多了",onLoad:h.onLoad,offset:20,"immediate-check":!1},{default:i((function(){return[Object(n["i"])("div",r,[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(e.transactionList,(function(e){return Object(n["x"])(),Object(n["f"])("div",{class:"block-item",key:e.transHash},[Object(n["i"])("div",c,[o,Object(n["i"])(y,{to:{path:"transaction",query:{transHash:e.transHash,blockTimestamp:e.blockTimestamp}},style:{"word-break":"break-all"}},{default:i((function(){return[Object(n["h"])(Object(n["H"])(e.transHash),1)]})),_:2},1032,["to"])]),Object(n["i"])("div",s,[d,Object(n["i"])("div",l,Object(n["H"])(e.transFrom),1)]),Object(n["i"])("div",b,[u,Object(n["i"])("div",f,Object(n["H"])(e.transTo),1)]),Object(n["i"])("div",O,[j,Object(n["i"])("div",v,Object(n["H"])(e.blockNumber),1)]),Object(n["i"])("div",{class:"item-more",onClick:function(t){return g.toTxDetail(e)}},[Object(n["i"])("div",m,[Object(n["i"])("span",null,Object(n["H"])(e.blockTimestamp),1),p])],8,["onClick"])])})),128))])]})),_:1},8,["loading","finished","onLoad"])])})),k=a("5530"),g=a("1da1"),y=(a("96cf"),a("99af"),a("3191")),w=a("d399"),x={name:"TxInfo",setup:function(){var e=Object(n["C"])(+sessionStorage.getItem("groupId")),t=Object(n["B"])({loading:!1,finished:!1,transactionList:[],reqData:{groupId:e.value,pageNumber:1,pageSize:7},reqQuery:{}}),a=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(y["g"])(t.reqData,t.reqQuery);case 2:a=e.sent,n=a.data,t.loading=!1,0===n.code?(t.transactionList=t.transactionList.concat(n.data),t.transactionList.length>=n.totalCount&&(t.finished=!0)):w["a"].fail(n.message);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){t.reqData.pageNumber+=1,a()};return Object(n["u"])((function(){a()})),Object(k["a"])(Object(k["a"])({},Object(n["I"])(t)),{},{onLoad:i})},methods:{toTxDetail:function(e){this.$router.push({path:"transaction",query:{transHash:e.transHash,blockTimestamp:e.blockTimestamp}})}}};a("5963");x.render=h,x.__scopeId="data-v-4f4ed920";t["default"]=x},a43d:function(e,t,a){}}]);