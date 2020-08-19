import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },

  getters: {
    items(state) {
      return state.items;
    },
    count(state) {
      return state.items.count;
    }
  },
  mutations: {
    addItem(state, payload) {
      state.items.push(payload.item);
    },
    deleteItem(state, name) {
      let index = state.items.findIndex(item => item.name === name);
      state.items.splice(index, 1);
    },
    minus(state, name) {
      let indexed = state.items.findIndex(item => item.name === name);
      state.items[indexed].count --;
    },
    plus(state, name) {
      let indexed = state.items.findIndex(item => item.name === name);
      state.items[indexed].count ++;
    }
  },
  actions: {
  },
  plugins: [createPersistedState({storage: window.sessionStorage})]

})
