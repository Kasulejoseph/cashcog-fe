import Vue from "vue";
import Vuex from "vuex";
import {get, patch }from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    expenses: [],
    employee: [],
    searchParams: ""
  },
  mutations: {
    SET_EXPENSES(state, expense) {
      state.expenses = expense;
    },
    SET_SEARCH_PARAMS(state, param) {
      state.searchParams = param;
    }
  },
  actions: {
    GET_EXPENSES: ({ commit }, query) => {
      const queryParam = query == undefined ? "" : query;
      get(`${process.env.VUE_APP_BASE_URL}${queryParam}`)
        .then(response => {
          commit("SET_EXPENSES", response.data);
        })
        .catch(() => {
          // console.log('error', error);
        });
    },
    UPDATE_EXPENSE: ({ commit }, updateObj) => {
      patch(`${process.env.VUE_APP_BASE_URL}${updateObj.id}`, {
          status: updateObj.status
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    GET_EXPENSES(state) {
      return state.expenses;
    }
  },
  modules: {}
});
