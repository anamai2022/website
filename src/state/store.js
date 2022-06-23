import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
  state: {
    f_login:'',
    f_docrunning:'',
    f_hospital:'',
    f_hospitalCode:'',
  },
  mutations: {
    setLogin(state,f_login){
      state.f_login = f_login
    },
    setRunning(state,f_docrunning){
      state.f_docrunning = f_docrunning
    },
    setHospital(state,f_hospital){
      state.f_hospital = f_hospital
    },
  },
  getters:{
    f_login:state => state.f_login,
    f_running:state => state.f_running,
    f_province:state => state.f_province,
    f_zone:state => state.f_zone,
    f_hospital:state => state.f_hospital,
    f_hospitalCode:state => state.f_hospitalCode,
  },
  actions: {
  },
  modules: {
  }  
})

export default store

