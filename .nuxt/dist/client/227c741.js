(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{181:function(t,e,r){"use strict";r.d(e,"h",(function(){return c})),r.d(e,"i",(function(){return o})),r.d(e,"d",(function(){return l})),r.d(e,"g",(function(){return f})),r.d(e,"f",(function(){return v})),r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return m})),r.d(e,"e",(function(){return _})),r.d(e,"c",(function(){return h}));var n=r(60),c=function(data){return Object(n.b)({method:"POST",url:"/api/users/login",data:data})},o=function(data){return Object(n.b)({method:"POST",url:"/api/users",data:data})},l=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},v=function(data){return Object(n.b)({method:"GET",url:"/api/tags"})},d=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},_=function(t){return Object(n.b)({method:"GET",url:"/api/profiles/".concat(t)})},h=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})}},182:function(t,e,r){var n=r(6),c=r(27),o=r(10),l=r(183),f="["+l+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(_):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},_=m.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(d,"")),t};t.exports=m},183:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},184:function(t,e,r){"use strict";var n=r(4),c=r(18),o=r(26),l=r(117),f=r(62),v=r(10),d=r(50).f,m=r(63).f,_=r(9).f,h=r(182).trim,O=n.Number,C=O,y=O.prototype,j="Number"==o(r(75)(y)),x="trim"in String.prototype,k=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=x?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!O(" 0o1")||!O("0b1")||O("+0x1")){O=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof O&&(j?v((function(){y.valueOf.call(r)})):"Number"!=o(r))?l(new C(k(e)),r,O):k(e)};for(var E,N=r(7)?d(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;N.length>I;I++)c(C,E=N[I])&&!c(O,E)&&_(O,E,m(C,E));O.prototype=y,y.constructor=O,r(12)(n,"Number",O)}},185:function(t,e,r){var n=r(6),c=r(186);n(n.S+n.F*(Number.parseInt!=c),"Number",{parseInt:c})},186:function(t,e,r){var n=r(4).parseInt,c=r(182).trim,o=r(183),l=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=c(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},189:function(t,e,r){"use strict";r.r(e);r(61),r(24),r(49),r(25),r(11),r(38);var n=r(21),c=(r(184),r(185),r(37),r(3)),o=r(34),l=r(181),f=r(47);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"homeIndex",watchQuery:["page","tag","tab"],computed:d(d({},Object(f.b)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)},filterTags:function(){return this.tags.filter((function(t){return t}))}}),asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,o,f,v,d,m,_,h,O,C,y,j,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,c=Number.parseInt(r.page||1),o=25,f=r.tab||"global_feed",v=r.tag,d="global_feed"===f?l.d:l.g,e.next=8,Promise.all([d({limit:o,offset:(c-1)*o,tag:v}),Object(l.f)()]);case 8:return m=e.sent,_=Object(n.a)(m,2),h=_[0],O=_[1],C=h.data,y=C.articles,j=C.articlesCount,x=O.data.tags,e.abrupt("return",{articles:y,articlesCount:j,tags:x,limit:o,page:c,tab:f,tag:v});case 15:case"end":return e.stop()}}),e)})))()},data:function(){return{favoriteDisabled:!1}},methods:{onFavorite:function(article){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(l.b)(article.slug);case 4:article.favorited=!1,article.favoritesCount+=-1,t.next=12;break;case 8:return t.next=10,Object(l.a)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()}}},_=r(23),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"your_feed"}}}},[t._v("Your Feed")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{to:{name:"home",query:{tab:"global_feed"}},exact:""}},[t._v("Global Feed")])],1),t._v(" "),t.tag?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{to:{name:"home",query:{tag:t.tag,tab:"tag"}},exact:""}},[t._v("#"+t._s(t.tag)+" ")])],1):t._e()])]),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"home",query:{page:e,tag:t.$route.query.tag,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)]),t._v(" "),t._l(t.articles,(function(e){return r("div",{key:e.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:e.author.username}}}},[r("img",{attrs:{src:e.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[t._v(t._s(e.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(e.createdAt))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:e.favorited},on:{click:function(r){return t.onFavorite(e)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(e.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:e.slug}}}},[r("h1",[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)}))],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.filterTags,(function(e){return r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tab:"tag",tag:e}}}},[t._v(t._s(e))])})),1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"logo-font"},[this._v("conduit")]),this._v(" "),e("p",[this._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports}}]);