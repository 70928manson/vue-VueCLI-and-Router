(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41d0e50d"],{"1dde":function(t,e,n){var a=n("d039"),c=n("b622"),r=n("2d00"),o=c("species");t.exports=function(t){return r>=51||!a((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"6be2":function(t,e,n){"use strict";var a=function(t){return{all:t=t||new Map,on:function(e,n){var a=t.get(e);a?a.push(n):t.set(e,[n])},off:function(e,n){var a=t.get(e);a&&(n?a.splice(a.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var a=t.get(e);a&&a.slice().map((function(t){t(n)})),(a=t.get("*"))&&a.slice().map((function(t){t(e,n)}))}}},c=a();e["a"]=c},"6c7d":function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c={class:"navbar navbar-expand-lg navbar-light bg-light"},r={class:"container-fluid"},o=Object(a["g"])("xxx餐飲店"),i=Object(a["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["h"])("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarSupportedContent"},b={class:"navbar-nav me-auto mb-2 mb-lg-0"},s={class:"nav-item"},l=Object(a["g"])("首頁"),d={class:"nav-item"},f=Object(a["g"])("產品列表"),O={class:"nav-item"},j=Object(a["g"])("前台購物車"),h={class:"nav-item"},v=Object(a["g"])("後台訂單"),g={type:"button",class:"btn btn-primary"},p=Object(a["g"])(" 結帳 "),m={class:"badge rounded-pill bg-danger"},x={class:"home"},w=Object(a["h"])("h1",null,"這裡是前台頁面",-1),K={id:"nav"},_=Object(a["g"])("首頁"),k=Object(a["g"])(" | "),C=Object(a["g"])("前台產品列表"),y=Object(a["g"])(" | "),D=Object(a["g"])("前台購物車"),S=Object(a["g"])(" | "),A=Object(a["g"])("後台購物車列表");function T(t,e,n,T,E,J){var M=Object(a["A"])("router-link"),B=Object(a["A"])("router-view");return Object(a["t"])(),Object(a["e"])(a["a"],null,[Object(a["h"])("nav",c,[Object(a["h"])("div",r,[Object(a["h"])(M,{class:"navbar-brand",to:"/"},{default:Object(a["K"])((function(){return[o]})),_:1}),i,Object(a["h"])("div",u,[Object(a["h"])("ul",b,[Object(a["h"])("li",s,[Object(a["h"])(M,{class:"nav-link",to:"/"},{default:Object(a["K"])((function(){return[l]})),_:1})]),Object(a["h"])("li",d,[Object(a["h"])(M,{class:"nav-link",to:"/products"},{default:Object(a["K"])((function(){return[f]})),_:1})]),Object(a["h"])("li",O,[Object(a["h"])(M,{class:"nav-link",to:"/cart"},{default:Object(a["K"])((function(){return[j]})),_:1})]),Object(a["h"])("li",h,[Object(a["h"])(M,{class:"nav-link",to:"/admin/products"},{default:Object(a["K"])((function(){return[v]})),_:1})])])]),Object(a["h"])("button",g,[p,Object(a["h"])("span",m,Object(a["D"])(E.cartData.carts.length),1)])])]),Object(a["h"])("div",x,[w,Object(a["h"])("div",K,[Object(a["h"])(M,{to:"/"},{default:Object(a["K"])((function(){return[_]})),_:1}),k,Object(a["h"])(M,{to:"/products"},{default:Object(a["K"])((function(){return[C]})),_:1}),y,Object(a["h"])(M,{to:"/cart"},{default:Object(a["K"])((function(){return[D]})),_:1}),S,Object(a["h"])(M,{to:"/admin/products"},{default:Object(a["K"])((function(){return[A]})),_:1})]),Object(a["h"])(B)])],64)}n("99af");var E=n("6be2"),J={name:"Home",data:function(){return{cartData:{carts:[]}}},methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("manson972","/cart");this.$http.get(e).then((function(e){console.log("cart: ",e),t.cartData=e.data.data}))}},mounted:function(){var t=this;this.getCart(),E["a"].on("get-cart",(function(){t.getCart()}))}},M=n("d959"),B=n.n(M);const H=B()(J,[["render",T]]);e["default"]=H},8418:function(t,e,n){"use strict";var a=n("c04e"),c=n("9bf2"),r=n("5c6c");t.exports=function(t,e,n){var o=a(e);o in t?c.f(t,o,r(0,n)):t[o]=n}},"99af":function(t,e,n){"use strict";var a=n("23e7"),c=n("d039"),r=n("e8b5"),o=n("861d"),i=n("7b0b"),u=n("50c4"),b=n("8418"),s=n("65f0"),l=n("1dde"),d=n("b622"),f=n("2d00"),O=d("isConcatSpreadable"),j=9007199254740991,h="Maximum allowed index exceeded",v=f>=51||!c((function(){var t=[];return t[O]=!1,t.concat()[0]!==t})),g=l("concat"),p=function(t){if(!o(t))return!1;var e=t[O];return void 0!==e?!!e:r(t)},m=!v||!g;a({target:"Array",proto:!0,forced:m},{concat:function(t){var e,n,a,c,r,o=i(this),l=s(o,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?o:arguments[e],p(r)){if(c=u(r.length),d+c>j)throw TypeError(h);for(n=0;n<c;n++,d++)n in r&&b(l,d,r[n])}else{if(d>=j)throw TypeError(h);b(l,d++,r)}return l.length=d,l}})}}]);
//# sourceMappingURL=chunk-41d0e50d.00920a3b.js.map