import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  getters: {
    itemsCount(state) {
      return state.items.length
    }
  },
  mutations: {
    addItem(state, payload) {
      state.items.push(payload.item)
    },
    deleteItem(state, item) {
      let indexed = state.items.indexOf(item);
      state.items.splice(indexed, 1)
    },
    minus(state) {
      state.items.count--
    },
    plus(state) {
      state.items.count++
    }
  },
  actions: {
  }
})
