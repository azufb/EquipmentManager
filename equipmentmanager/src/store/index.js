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
      console.log(index);
      console.log(name)
      console.log(state.items)

      /*全部消えたやつ
      let filtered = state.items.filter(item =>item.index === index);
      return state.items.splice(filtered);*/
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
