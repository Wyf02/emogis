import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component:HomeView,
  //   meta:{
  //     title: 'HOME'
  //   }
  // },
  {
    path: '/',
    name: 'home',
    component:() =>import('../views/Service/Service.vue'),
    meta:{
      title: 'HOME'
    }
  },
  // {
  //   path:'/About',
  //   name:'About',
  //   component:()=>import('../views/About.vue'),
  //   meta:{
  //     title: 'About'
  //   }
  // },
  {
    path:'/service',
    name:'servive',
    component:() =>import('../views/Service/Service.vue'),
    meta:{
      title: 'Service&Area'
    }
  },
 
  // {
  //   path:'/Report',
  //   name:'Report',
  //   component:()=>import('../views/Report/Report.vue'),
  //   meta:{
  //     title: 'Report'
  //   }
  // },
  {
    path:'/ReportDetail',
    name:'ReportDetail',
    component:()=>import('../views/Report/ReportDetail.vue'),
    meta:{
      title: 'ReportDetail',
    }
  },
  // {
  //   path:'/login',
  //   name:'login',
  //   component:()=>import('../views/Login.vue'),
  //   meta:{
  //     title: 'login',
  //   }
  // },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // base: '/Collection/',
  routes
})

export default router
