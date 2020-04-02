import Vue from 'vue'
import App from './App'
import router from './router'
import app from './assets/js/app.js'

Vue.create = ((options) => {
  return new Vue(options)
})({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mixins: [app], // app.js methods
  routerParams: null,
  data: {
    'url': 'https://gl-sharing.com/'
  },
  methods: {
    // 메뉴 이동
    menuRouter: function (path, params) {
      // 다른 메뉴 간에만 이동
      if (router.currentRoute.path !== path) {
        this.routerParams = params
        router.push(path)
      }
    }
  }
})
