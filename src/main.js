import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import withme from "./plugins/withme-kit"

Vue.config.productionTip = false

Vue.use(withme)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
