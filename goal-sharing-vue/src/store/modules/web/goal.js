import goalApi from '../../../api/goalApi'
import router from '../../../router'

const state = {
  list: null
}

const mutations = {
  setGoalList (state, list) {
    state.list = list
  }
}

const actions = {
  async setGoalList ({ commit }, prms) {
    const response = await goalApi.getGoalList(prms)

    commit('setGoalList', response.data)
  },
  async setGoal ({ commit }, prms) {
    const response = await goalApi.saveGoal(prms)

    if (response.status === 200) {
      alert('공유했습니다.')

      router.push('/')
    } else {
      alert('error')
    }
  },
  async setAttainment ({ commit }, prms) {
    const response = await goalApi.saveAttainment(prms)

    if (response.status === 200) {
      const response2 = await goalApi.getGoalList()

      commit('setGoalList', response2.data)
    }
  }
}

const getters = {
  getGoalList: state => {
    return state.list
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
