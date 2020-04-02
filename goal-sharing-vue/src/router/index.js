import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main/Main.vue'
import New from '../components/main/New.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { name: 'main', path: '/', component: Main }, // 메인
    { name: 'new', path: '/new', component: New } // new
  ],
  mode: 'history'
})
