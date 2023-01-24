import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/Login'
import Home from '../components/home/Home'
import Text from "../components/home/Text";
import Martix from "../components/home/Martix";
import Audit from "../components/home/Audit";
import Other from "../components/home/Other";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path:'/', redirect:'/home'},
    {path: '/login', component: Login},

    {path:'/home', component:Home,
      children: [
        {path: '/other',component: Other},
        {path: '/text', component: Text, name: 'Text',
          children: [
            {path: '/martix', component: Martix, name: 'Martix'},
            {path: '/audit', component: Audit, name: 'Audit'}

          ]
        }
      ]
    }]
})


// //挂载路由导航守卫
// router.beforeEach((to,from,next)=>{
//   //to将要访问的的路径
//
//   //
//
// })
