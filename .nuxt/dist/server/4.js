exports.ids = [4];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=15f299a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p>\n            Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games\n          </p> <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary action-btn",{
              active:_vm.profile.following
              }))+"><i class=\"ion-plus-round\"></i>\n             \n            Follow Eric Simons\n          </button></div></div></div></div> <div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><div class=\"articles-toggle\"><ul class=\"nav nav-pills outline-active\"><li class=\"nav-item\"><a href class=\"nav-link active\">My Articles</a></li> <li class=\"nav-item\"><a href class=\"nav-link\">Favorited Articles</a></li></ul></div> <div class=\"article-preview\"><div class=\"article-meta\"><a href><img src=\"http://i.imgur.com/Qr71crq.jpg\"></a> <div class=\"info\"><a href class=\"author\">Eric Simons</a> <span class=\"date\">January 20th</span></div> <button class=\"btn btn-outline-primary btn-sm pull-xs-right\"><i class=\"ion-heart\"></i> 29\n            </button></div> <a href class=\"preview-link\"><h1>How to build webapps that scale</h1> <p>This is the description for the post.</p> <span>Read more...</span></a></div> <div class=\"article-preview\"><div class=\"article-meta\"><a href><img src=\"http://i.imgur.com/N4VcUeJ.jpg\"></a> <div class=\"info\"><a href class=\"author\">Albert Pai</a> <span class=\"date\">January 20th</span></div> <button class=\"btn btn-outline-primary btn-sm pull-xs-right\"><i class=\"ion-heart\"></i> 32\n            </button></div> <a href class=\"preview-link\"><h1>The song you won't ever stop singing. No matter how hard you try.</h1> <p>This is the description for the post.</p> <span>Read more...</span> <ul class=\"tag-list\"><li class=\"tag-default tag-pill tag-outline\">Music</li> <li class=\"tag-default tag-pill tag-outline\">Song</li></ul></a></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=15f299a2&

// EXTERNAL MODULE: ./apis/index.js + 2 modules
var apis = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'profileIndex',

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(apis["e" /* getProfile */])(params.username);
    return {
      profile: data.profile
    };
  }

});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4b315f9c"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map