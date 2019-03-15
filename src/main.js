import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)


import VueRouter from 'vue-router'
import Routes from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
  routes:Routes,
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
