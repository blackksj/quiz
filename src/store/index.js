import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rest_url: "http://www.emds.co.kr/rest",
    idx: 0,
    cate: {},
    question: [],
    
  },
  mutations: {
    setIdx(state, idx)  {
      state.idx = idx;
    }
  },
  actions: {
    getQuestion(context) {
      let REST_URL = context.state.rest_url;
      REST_URL += '/question.php?idx='+context.state.idx;

      return fetch(REST_URL)
          .then(response => response.json())
          .then(response => {
              if(response.question) {
                context.state.question = response.question
                  return response.question
              } else {
                  return response
              }
          });
    }
  },
  modules: {
  }
})
