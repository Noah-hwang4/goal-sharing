import Vue from 'vue'
import VueCookie from 'vue-cookie'
import App from './components/App'
import app from './assets/js/app.js'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import axios from 'axios'

Vue.use(VueCookie)

Vue.create = ((options) => {
  return new Vue(options)
})({
  el: '#app',
  components: { App },
  template: '<App/>',
  mixins: [ app ],
  vuetify,
  store,
  router,
  created () {
    const indexPath = store.getters['router/getIndexPath']

    if (router.currentRoute.path !== indexPath) {
      store.dispatch('router/setRouterPath', {
        path: indexPath
      })
    }

    axios.interceptors.request.use((config) => {
      store.dispatch('router/setIsLoading', {
        isLoading: true
      })

      return config
    }, (error) => {
      store.dispatch('router/setIsLoading', {
        isLoading: false
      })

      return Promise.reject(error)
    })

    axios.interceptors.response.use((response) => {
      store.dispatch('router/setIsLoading', {
        isLoading: false
      })

      return response
    }, (error) => {
      store.dispatch('router/setIsLoading', {
        isLoading: false
      })

      return Promise.reject(error)
    })
  }
})
