import Vue from 'vue'
import Router from 'vue-router'
import Home from './templates/Home/main'

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});
