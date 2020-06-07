import Vue from 'vue'
import Router from 'vue-router'

import DashBoard from '../components/DashBoard'
import Heroes from '../components/Heroes'
import HeroesDetail from '../components/HeroDetail'

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
      path: '/heroes/:id',
      component: HeroesDetail
    }
  ]
})