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
    }
  },
  mutations: {
    addItem(state, payload) {
      state.items.push(payload.item);
    },
    deleteItem(state, item) {
      let itms = state.items.slice();
      let index = itms.indexOf(item);
      itms.splice(index, 1);
      console.log(index);
      /*let index = state.items.indexOf(name);
      state.items.splice(index, 1);
      console.log(index);
      console.log(state.items)*/

      /* 全部消えたやつ
      let filtered = state.items.filter(item =>item.index === index);
      return state.items.splice(filtered);*/
    },
    /*minus(state, payload) {
      state.items.forEach((item) => {
        item.count -= payload.dec
      })
      console.log(state.items)
      console.log(state.items[0].name)
      console.log(state.items[0].count)
    },
    plus(state, payload) {
      state.items.forEach(item => 
        item.count += payload.inc
      )
      console.log(state.items)
      console.log(state.items[0].name)
      console.log(state.items[0].count)
    }*/
  },
  actions: {
    /*minus(store, payload) {
      store.commit('minus', payload)
    },
    plus(store, payload) {
      store.commit('plus', payload)
    }*/
  },
  plugins: [createPersistedState()]

})
