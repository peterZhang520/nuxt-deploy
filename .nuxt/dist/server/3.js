exports.ids = [3];
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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=72823e08&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">"+_vm._ssrEscape("\n          "+_vm._s(_vm.isLogin?'Sign in':'Sign up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":{
                name:'register'
            }}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":{
                name:'login'
            }}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(item,index){return ("<li>"+_vm._ssrEscape("\n              "+_vm._s(field)+" "+_vm._s(item)+"\n            ")+"</li>")})))}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input type=\"email\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin?'Sign in':'Sign up')+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=72823e08&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// EXTERNAL MODULE: ./apis/index.js + 2 modules
var apis = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
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
// 请求模块

 // 客户端cookie

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'notAuthenticated',
  name: 'loginIndex',
  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },

  data() {
    return {
      user: {
        // username: '',
        email: '',
        password: ''
      },
      errors: {}
    };
  },

  methods: {
    async onSubmit() {
      try {
        const {
          data
        } = this.isLogin ? await Object(apis["h" /* login */])({
          user: this.user
        }) : await Object(apis["i" /* register */])({
          user: this.user
        }); // TODO：保存登录信息

        this.$store.commit('setUser', data.user); // 用户持久化

        Cookie.set('user', data.user);
        this.$router.push('/');
      } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
          this.errors = errors;
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2b1258b2"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map