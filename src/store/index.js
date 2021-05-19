import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idx: 0,
    cate: {},
    question: {}
  },
  mutations: {
    setIdx(state, idx)  {
      state.idx = idx;
    }
  },
  actions: {

  },
  modules: {
  }
})
