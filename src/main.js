import Vue from 'vue'
import VueRouter from "vue-router";
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
