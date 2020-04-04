import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/Home')

Vue.use(Router)

const routes = [
  {
    path: '*',
    component: Home
  }
]

export default new Router({
  linkActiveClass: 'active',
  hashbang: false,
  mode: 'history',
  routes
})
