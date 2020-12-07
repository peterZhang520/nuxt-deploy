exports.ids = [1];
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=1c480f83&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"article-page\"><div class=\"banner\"><div class=\"container\"><h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> <div class=\"article-meta\"><a href><img src=\"http://i.imgur.com/Qr71crq.jpg\"></a> <div class=\"info\"><a href class=\"author\">"+_vm._ssrEscape(_vm._s(_vm.article.author.username))+"</a> <span class=\"date\">January 20th</span></div> <button class=\"btn btn-sm btn-outline-secondary\"><i class=\"ion-plus-round\"></i>\n             \n            Follow Eric Simons <span class=\"counter\">(10)</span></button>\n            \n          <button class=\"btn btn-sm btn-outline-primary\"><i class=\"ion-heart\"></i>\n             \n            Favorite Post <span class=\"counter\">(29)</span></button></div></div></div> <div class=\"container page\"><div class=\"row article-content\">"+(_vm._s(_vm.article.description))+"</div> <hr> <div class=\"article-actions\"><div class=\"article-meta\"><a href=\"profile.html\"><img"+(_vm._ssrAttr("src",_vm.article.author.image))+"></a> <div class=\"info\"><a href class=\"author\">"+_vm._ssrEscape(_vm._s(_vm.article.author.username))+"</a> <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm.article.updatedAt))+"</span></div> <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{
              active:_vm.article.author.following
          }))+"><i class=\"ion-plus-round\"></i>\n             \n            Follow Eric Simons <span class=\"counter\">(10)</span></button>\n           \n          <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
              active:_vm.article.favorited
          }))+"><i class=\"ion-heart\"></i>\n             \n            Favorite Post <span class=\"counter\">({{article.favoritesCount})</span></button></div></div> <div class=\"row\"><div class=\"col-xs-12 col-md-8 offset-md-2\"><form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\"></textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">\n                Post Comment\n              </button></div></form> <div class=\"card\"><div class=\"card-block\"><p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p></div> <div class=\"card-footer\"><a href class=\"comment-author\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"></a>\n               \n              <a href class=\"comment-author\">Jacob Schmidt</a> <span class=\"date-posted\">Dec 29th</span></div></div> <div class=\"card\"><div class=\"card-block\"><p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p></div> <div class=\"card-footer\"><a href class=\"comment-author\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"></a>\n               \n              <a href class=\"comment-author\">Jacob Schmidt</a> <span class=\"date-posted\">Dec 29th</span> <span class=\"mod-options\"><i class=\"ion-edit\"></i> <i class=\"ion-trash-a\"></i></span></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=1c480f83&

// EXTERNAL MODULE: ./apis/index.js + 2 modules
var apis = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'articleIndex',

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(apis["c" /* getArticle */])(params.slug);
    return {
      article: data.article
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1f78d182"
  
)

/* harmony default export */ var article = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map