import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme : {
    primary: '#009688',
    secondary: '#607d8b',
    accent: '#4caf50',
    error: '#ff5722',
    warning: '#ffc107',
    info: '#2196f3',
    success: '#8bc34a'
    }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
