import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faBook, faHeart } from '@fortawesome/free-solid-svg-icons'

router.beforeEach((to, from, next) => {


  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.matched.some(route => route.meta.requiresAuth)) {
    // 需要登录才能访问的页面
    if (isLoggedIn()) {
      // 用户已登录
      next();
    } else {
      // 用户未登录，重定向到登录页面并保存目标URL
      next({ path: '/login', query: { redirect: to.fullPath } });
    }
  } else {
    // 不需要登录的页面
    next();
  }

})

function isLoggedIn() {
  if (null === localStorage.getItem('userInfo')) return store.state.userInfo.isLogin;
  return localStorage.getItem('userInfo').isLogin||store.state.userInfo.isLogin;
}

// library.add(faBook, faHeart)
createApp(App).use(store).use(router).mount('#app')
