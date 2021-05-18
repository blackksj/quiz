import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rest_url: "www.emds.co.kr/",
    cate_idx: 0,
    arr_question: [],
    arr_item: []
  },
  mutations: {
    setCateIdx(state, payload) {
      state.cate_idx = payload.cate_idx
    }
  },
  actions: {
    //차트 컨텍스트 메뉴 페이지복사 실행
    getQuestion(context, payload) {
      let REST_URL = context.state.rest_url;
      REST_URL += '/mobileChartEmrCopy.php?';
      REST_URL += 'hospital=https://'+context.state.setting.hospital.hospitalIp+':'+context.state.setting.hospital.hospitalPort+'/';
      REST_URL += '&'+payload;

      return fetch(REST_URL)
      .then(response => response.json())
      .then(response => {
          return response.data;
      })
      .catch(() => {
          return [];
      });
    },
    //차트 컨텍스트 메뉴 페이지삭제 실행
    postEmrDelete(context, payload) {
        if(!context.state.setting.hospital.hospitalIp || !context.state.setting.hospital.hospitalPort) return {};

        let REST_URL = context.state.ondocHospitalUrl;
      REST_URL += '/mobileChartEmrDelete.php?';
      REST_URL += 'hospital=https://'+context.state.setting.hospital.hospitalIp+':'+context.state.setting.hospital.hospitalPort+'/';

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
