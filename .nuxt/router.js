import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _52ffc881 = () => interopDefault(import('..\\pages\\layout\\index.vue' /* webpackChunkName: "" */))
const _6fb2e7ec = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "" */))
const _76a32cc0 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "" */))
const _2d3aeec0 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "" */))
const _d9d1b4b0 = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "" */))
const _2f8dab44 = () => interopDefault(import('..\\pages\\editor\\index.vue' /* webpackChunkName: "" */))
const _5a30ed5a = () => interopDefault(import('..\\pages\\article\\index.vue' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _52ffc881,
    children: [{
      path: "/",
      component: _6fb2e7ec,
      name: "home"
    }, {
      path: "/login",
      component: _76a32cc0,
      name: "login"
    }, {
      path: "/register",
      component: _76a32cc0,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _2d3aeec0,
      name: "profile"
    }, {
      path: "/settings",
      component: _d9d1b4b0,
      name: "settings"
    }, {
      path: "/editor",
      component: _2f8dab44,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _5a30ed5a,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  const router = new Router(routerOptions)
  const resolve = router.resolve.bind(router)

  // encodeURI(decodeURI()) ~> support both encoded and non-encoded urls
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = encodeURI(decodeURI(to))
    }
    return resolve(to, current, append)
  }

  return router
}
