import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    expenses: [],
    employee: []
  },
  mutations: {
    SET_EXPENSES(state, expense) {
        state.expenses = expense
    },
    SET_EMPLOYEE(state, employee) {
      state.employee = employee
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
    },
    GET_EMPLOYEE: ({commit}, id) => {
      axios.get(`https://cashcog.herokuapp.com/users/${id}`)
      .then((response) => {
        // console.log(response.data.employee);
        commit('SET_EMPLOYEE', response.data.employee)
      })
      .catch(() => {
        
      })
    }
  },
  getters: {
    GET_EXPENSES(state){
      return state.expenses
    },
    GET_EMPLOYEE(state){
      return state.employee
    }
  },
  modules: {
  }
})
