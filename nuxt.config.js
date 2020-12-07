export default {
    modules: ['@nuxtjs/axios', "@nuxtjs/proxy"],
    router: {
        // 路由高亮样式
        linkActiveClass: 'active',
        // middleware: ['authenticated', 'notAuthenticated'],
        extendRoutes(routes, resolve) {
            // 清除基于pages目录生成的默认路由表
            routes.splice(0)
            routes.push(...[{
                path: '/',
                component: resolve(__dirname, 'pages/layout/index.vue'),
                children: [{
                    path: '/',
                    name: 'home',
                    component: resolve(__dirname, 'pages/home/index.vue')
                }, {
                    path: '/login',
                    name: "login",
                    component: resolve(__dirname, 'pages/login/index.vue')
                }, {
                    path: '/register',
                    name: "register",
                    component: resolve(__dirname, 'pages/login/index.vue')
                }, {
                    path: '/profile/:username',
                    name: 'profile',
                    component: resolve(__dirname, 'pages/profile/index.vue')
                }, {
                    path: '/settings',
                    name: 'settings',
                    component: resolve(__dirname, 'pages/settings/index.vue')
                }, {
                    path: '/editor',
                    name: 'editor',
                    component: resolve(__dirname, 'pages/editor/index.vue')
                }, {
                    path: '/article/:slug',
                    name: 'article',
                    component: resolve(__dirname, 'pages/article/index.vue')
                }]
            }])
        }
    },
    server: {
        // 可以让其他ip访问,
        // 监听所有网卡地址，本地所有局域网都能访问；生产所有外网地址都能访问
        // localhost只能本机访问，如果想对外访问
        host: '0.0.0.0',
        port: '3030'
    },
    plugins: [
        '~/plugins/request.js',
    ]
}