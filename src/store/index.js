import { createStore } from 'vuex'

const store =  createStore({
  state(){
    return{
      Language:0,
      Accont:"",
      Password:"",
      userInfo:{ 
        isLogin: false,
        Accont:"",
        Password:"",
      }
    }
    
  },
  getters: {
 
  },
  mutations: {
    SetLanguage(state,val){
      state.Language=val
    },
    SetAccount(state,val1,val2){
      state.Accont=val1;
      state.Password=val2;
    },
    SetLogin(state,val){
      state.userInfo.isLogin=val
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store;

