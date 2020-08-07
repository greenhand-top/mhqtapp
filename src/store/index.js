import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  dyn:false
  },
  mutations: {
	  yows(state){
		state.dyn = true     
	  }
  },
  actions: {
  },
  modules: {
  }
})
