import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import BlackAndWhite from '../components/game/BlackAndWhite.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { name: 'main', path: '/', component: BlackAndWhite },
    { name: 'blackAndWhite', path: '/game/blackAndWhite', component: Main }
  ]
})
