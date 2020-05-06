import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import BlackAndWhite from '../components/game/BlackAndWhite.vue'
import New from '../components/goal/New.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { name: 'main', path: '/', component: Main },
    { name: 'blackAndWhite', path: '/game/blackAndWhite', component: BlackAndWhite },
    { name: 'new', path: '/goal/new', component: New }
  ]
})
