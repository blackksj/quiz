import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: 'http://www.emds.co.kr/',
    rest_url: 'http://www.emds.co.kr/rest/',
    idx: 0,
    cate: {},
    arrQuestion: [],
    point: 20,
    answer: {
      cate_idx: 0,
      name: '',
      hospital_name: '',
      department: '',
      hpno: '',
      charge_name: '',
      pharm_name: '',
      addr_gu: '',
      present: '',
      score: 0,
      reply: []
    },
    reply: [],
    lastedSelectedItem: []
  },
  mutations: {
    setIdx(state, idx)  {
      state.idx = idx;
    },
    setPoint(state, point) {
      state.point = point
    }
  },
  actions: {
    getCate(context) {
      let REST_URL = context.state.rest_url;
      REST_URL += '/cate_select.php?idx='+context.state.idx;

      return fetch(REST_URL)
            .then(response => response.json())
            .then(response => {
                if(response.data) {
                  context.state.cate = response.data
                    return response.data
                } else {
                    return response.data
                }
            });
    },
    getQuestion(context) {
      let REST_URL = context.state.rest_url;
      REST_URL += '/question.php?idx='+context.state.idx;

      return fetch(REST_URL)
            .then(response => response.json())
            .then(response => {
                if(response.question) {
                  context.state.arrQuestion = response.question

                    return response.question
                } else {
                    return response
                }
            });
    },
    postAnswer(context, payload) {
      let REST_URL = context.state.rest_url;
      REST_URL += '/answer_insert.php';

      return fetch(REST_URL, {
        method: 'POST',
        body: payload
      })
      .then(response => response.json())
      .then(response => {
          return response;
      })
      .catch(() => {
          return [];
      });
    }
  },
  modules: {
  }
})
