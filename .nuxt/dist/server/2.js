exports.ids = [2];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ login; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ register; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ getArticles; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ getUserArticles; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ getTags; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ addFavorite; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ deleteFavorite; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ getProfile; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ getArticle; });

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./apis/user.js
 // 登录

const login = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
}; // 注册

const register = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/users',
    data
  });
};
// CONCATENATED MODULE: ./apis/article.js
 // 公共文章列表

const getArticles = params => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/articles',
    // 注意：传入的字段名是params,不是data
    params
  });
}; // 用户文章列表

const getUserArticles = params => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/articles/feed',
    // 注意：传入的字段名是params,不是data
    params
  });
}; // 文章标签列表

const getTags = data => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/tags'
  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(request["b" /* request */])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 作者主页详情

const getProfile = username => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
}; // 文章详情

const getArticle = slug => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
};
// CONCATENATED MODULE: ./apis/index.js



/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=3e4c91b4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                active:_vm.tab === 'your_feed',
                },attrs:{"exact":"","to":{
                  name:'home',
                  query:{
                      tab:'your_feed'
                  }
              }}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'global_feed'
                },attrs:{"to":{
                  name:'home',
                  query:{
                      tab:'global_feed'
                  }
              },"exact":""}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'tag'
                },attrs:{"to":{
                  name:'home',
                  query:{
                      tag:_vm.tag,
                      tab:'tag'
                  }
              },"exact":""}},[_vm._v("#"+_vm._s(_vm.tag)+" ")])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
          active:item === _vm.page
      }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                       name:'home',
                       query:{
                          page:item,
                          tag:_vm.$route.query.tag,
                          tab:_vm.tab
                       }
                   }}},[_vm._v(_vm._s(item))])],1)}),0)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(item){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
                name:'profile',
                params:{
                    username:item.author.username
                }
            }}},[_c('img',{attrs:{"src":item.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                name:'profile',
                params:{
                    username:item.author.username
                }
            }}},[_vm._v(_vm._s(item.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(item.createdAt))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
                        active:item.favorited
                    }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(item.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
                name:'article',
                params:{
                    slug:item.slug
                }
            }}},[_c('h1',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",_vm._l((_vm.filterTags),function(tag){return _c('nuxt-link',{key:tag,staticClass:"tag-pill tag-default",attrs:{"to":{
                           name:'home',
                           query:{
                               tab:'tag',
                               tag:tag
                           }
                       }}},[_vm._v(_vm._s(tag))])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=3e4c91b4&

// EXTERNAL MODULE: ./apis/index.js + 2 modules
var apis = __webpack_require__(26);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'homeIndex',
  // 监听路由变化,触发服务端渲染
  watchQuery: ['page', 'tag', 'tab'],
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },

    filterTags() {
      return this.tags.filter(v => v);
    }

  },

  async asyncData({
    query
  }) {
    // 注意：只要这里面报错，页面就渲染不出来，也打印不出问题
    const page = Number.parseInt(query.page || 1);
    const limit = 25;
    const tab = query.tab || 'global_feed';
    const tag = query.tag;
    const loadArticles = tab === 'global_feed' ? apis["d" /* getArticles */] : apis["g" /* getUserArticles */]; // 接口并行请求

    const [articleRes, tagRes] = await Promise.all([loadArticles({
      // 条数
      limit,
      // 偏移量
      offset: (page - 1) * limit,
      tag
    }), Object(apis["f" /* getTags */])()]);
    const {
      articles,
      articlesCount
    } = articleRes.data;
    const {
      tags
    } = tagRes.data;
    return {
      articles,
      articlesCount,
      tags,
      limit,
      page,
      tab,
      tag
    };
  },

  data() {
    return {
      favoriteDisabled: false
    };
  },

  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true;

      if (article.favorited) {
        // 取消点赞
        await Object(apis["b" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 添加点赞
        await Object(apis["a" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "44c21952"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map