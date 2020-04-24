import goalApi from '../../../api/goalApi'

const state = {
  list: null
}

const mutations = {
  setGoalList (state, list) {
    state.list = list
  }
}

const actions = {
  setGoalList ({ commit, state }, prms) {
    commit('setGoalList', goalApi.getGoalList(prms))
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
