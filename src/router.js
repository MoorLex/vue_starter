import Vue from 'vue'
import Router from 'vue-router'

const _import = file => () => import(`./templates/${file}`);

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: _import('Home')
    }
  ]
});
