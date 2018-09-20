import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/Index'
import LoginPage from '@/pages/Login'
import RegisterPage from '@/pages/Register'
import HistoryPage from '@/pages/History'
import CulturerPage from '@/pages/Culture'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/history',
      name: 'HistoryPage',
      component: HistoryPage
    },
    {
      path: '/culture',
      name: 'CulturerPage',
      component: CulturerPage
    }
  ]
})
