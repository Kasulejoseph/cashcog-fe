import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    expenses: []
  },
  mutations: {
    SET_EXPENSES(state, expense) {
        state.expenses = expense
    }

  },
  actions: {
    GET_EXPENSES: ({commit}) => {
      axios.get('https://cashcog.herokuapp.com/')
      .then((response) => {
        // console.log(response);
        commit('SET_EXPENSES', response.data)
        
      })
      .catch(() => {
        // console.log('error', error);
        
      })

    }
  },
  getters: {
    GET_EXPENSES(state){
      return state.expenses
    }
  },
  modules: {
  }
})
