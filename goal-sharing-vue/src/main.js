import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/custom.css'

import List from './components/List'
import Login from './components/Login'

Vue.use(BootstrapVue, IconsPlugin)
Vue.use(VueRouter)

let firstInput = 'list'

const routes = [
  { path: '/list', component: List },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const app = new Vue({
  router,
  render: h => h(App),
  created: function () {
    if (router.currentRoute.path != '/'+firstInput) {
      router.push(firstInput)
    }
  }
}).$mount('#app')
