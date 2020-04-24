import router from '../../../router'

const state = {
  // origins: '',
  origins: 'http://localhost:8088',
  indexPath: '/',
  routerPrms: {},
  isLoading: false,
  loadingLable: 'Loading...'
}

const mutations = {
  setRouterPrms: (state, prms) => {
    state.routerPrms = prms
  },
  setIsLoading: (state, isLoading) => {
    state.isLoading = isLoading
  }
}

const actions = {
  setRouterPath: ({ commit }, { path, prms }) => {
    if (router.currentRoute.path !== path) {
      if (prms) {
        commit('setRouterPrms', prms)
      }

      router.push(path)
    }
  },
  setIsLoading: ({ commit }, isLoading) => {
    commit('setIsLoading', isLoading)
  }
}

const getters = {
  getOrigins: state => {
    return state.origins
  },
  getIndexPath: state => {
    return state.indexPath
  },
  getRouterPrms: state => {
    return state.routerPrms
  },
  getIsLoading: state => {
    return state.isLoading
  },
  getLoadingLable: state => {
    return state.loadingLable
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
