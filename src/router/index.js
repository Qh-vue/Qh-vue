import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/layout'
import User from '@/page/user'
import Main from '@/page/main'


Vue.use(Router) 

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:[
      {
        path: '/',
        name: 'Main',
        component: Main
      },{
        path: '/user',
        name: 'User',
        component: User
      }
      ]
    }
  ]
})
