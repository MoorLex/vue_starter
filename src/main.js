import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  data() {
    return {
      year: '2018',
      company: 'TestCompany'
    }
  },
  components: { App },
  template: '<App/>'
});