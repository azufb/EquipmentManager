import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
Vue.use(Vuetify)

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
      let indexed = state.items.findIndex(item => item.name === name);
      state.items.splice(indexed, 1);
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
