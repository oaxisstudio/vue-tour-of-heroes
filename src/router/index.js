import Vue from 'vue'
import Router from 'vue-router'

import DashBoard from '../components/DashBoard'
import Heroes from '../components/Heroes'
import HeroDetail from '../components/HeroDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: DashBoard
    },
    {
      path: '/dashboard',
      component: DashBoard
    },
    {
      path: '/heroes',
      component: Heroes
    },
    {
      path: '/detail/:id',
      name: 'HeroDetail',
      component: HeroDetail
    }
  ]
})