import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component:HomeView,
    meta:{
      title: 'HOME'
    }
  },
  {
    path: '/DataSet',
    name: 'DataSet',
    component:() =>import('../views/Service/Service.vue'),
    meta:{
      title: 'DataSet'
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
    path:'/Report',
    name:'Report',
    component:()=>import('../views/Report/Report.vue'),
    meta:{
      title: 'Report'
    }
  },
  {
    path:'/ReportDetail',
    name:'ReportDetail',
    component:()=>import('../views/Report/ReportDetail.vue'),
    meta:{
      title: 'ReportDetail',
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // base: '/emogis/',
  base: '/',
  routes
})

export default router
