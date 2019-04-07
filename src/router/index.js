import Vue from 'vue'
import Router from 'vue-router'

//导入对应路由组件
import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShopcarContainer from '../components/tabbar/ShopcarContainer'
import SearchContainer from '../components/tabbar/SearchContainer'
import NewList from '../components/home/newList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'HomeContainer',
      component: HomeContainer
    },
    {
      path:'/member',
      name:'MemberContainer',
      component:MemberContainer
    },
    {
      path:'/shopcar',
      name:'ShopcarContainer',
      component:ShopcarContainer
    },
    {
      path:'/search',
      name:'SearchContainer',
      component:SearchContainer
    },
    {
      path:'/home/newList',
      name:'NewList',
      component:NewList
    }
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的类，默认的的类叫做inkActiveClass
})
