import Vue from 'vue'

// Import app
import App from './App.vue'
import router from './router'

// Import plugins
import vuetify from './plugins/vuetify'
import './plugins/axios'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
