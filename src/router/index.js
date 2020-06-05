import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import DashBoard from '../components/DashBoard'
import Heroes from '../components/Heroes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloWorld
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
      component: Heroes
    }
  ]
})