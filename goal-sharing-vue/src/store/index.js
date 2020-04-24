import Vue from 'vue'
import Vuex from 'vuex'
import router from './modules/common/router'
import goal from './modules/web/goal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    router,
    goal
  }
})
