import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'   // In the future, we might want to use the store

import Buefy from 'buefy'
require('@/assets/custom.scss')
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
