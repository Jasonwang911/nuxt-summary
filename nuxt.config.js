const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt总结',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#41b883' },

  /*
  ** Global CSS
  */
  // css: [
  //   'styles/theme/index.css'
  // ],
  /*
  *  router params
  */
  router: {
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    // add router
    // extendRoutes (routes, resolve) {
    //   routes.push({
    //     name: 'custom',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/404.vue')
    //   })
    // }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/element-ui',
    '~/plugins/filters.js',
    {
      src: "~/plugins/axios",
      ssr: false
    },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  // proxy: {
  //   '/api': {
  //     target: 'xxx', // 代理地址
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': ''
  //     },
  //   },
  // },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true,
    prefix: '/api',
    credentials: true,
  },

  /*
  ** Build configuration
  */
  build: {
    "presets": [["es2015", { "modules": false }]],
    babel:{        //element-ui配置按需引入规则
      "plugins":[
          [
              "component",
              {
                  "libraryName":"element-ui",
                  "styleLibraryName":"~styles/theme"
              }
          ]
      ]
    },
    /*
    *   生产环境 style 转为 link
    */
    // extractCSS: { allChunks: true },
    extractCSS: true,
    /*
    *   生产环境压缩 css
    */
    cssSourceMap: false,
    extend(config, { isDev, isClient }) {
      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader');
      vueLoader.options.loaders.sass = 'vue-style-loader!css-loader!sass-loader';
    },
    /*
    *   在页面中注入一些变量和mixin, Nuxt.js使用https://github.com/yenshih/style-resources-loader来实现此行为; 注意不能使用 alise
    */
    styleResources: {
      scss:'./styles/index.scss',
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
