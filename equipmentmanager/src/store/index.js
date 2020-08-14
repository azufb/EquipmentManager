import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [{
      name: 'あ',
      count: 0
    }]
  },

  getters: {
    items(state) {
      return state.items
    },
    count(state) {
      return state.items.count
    }
  },
  mutations: {
    addItem(state, payload) {
      state.items.push(payload.item)
    },
    deleteItem(state, index) {
      let indexed = state.items.indexOf(index);
      state.items.splice(indexed, 1)
      console.log('click')
    },
    minus(state, payload) {
      /*state.items.count -= 1
      state.items.splice()
      console.log('click')*/
      state.items.count -= payload.dec
      console.log(state.items)
      console.log(state.items.name)
      console.log(state.items.count)
    },
    plus(state, payload) {
      /*state.items.count += 1
      state.items.splice()
      console.log('click')
      console.log(state.items)*/
      state.items.count += payload.inc
      console.log(state.items)
      console.log(state.items.name)
      console.log(state.items.count)
    }
  },
  actions: {
    minus(store, payload) {
      store.commit('minus', payload)
    },
    plus(store, payload) {
      store.commit('plus', payload)
    }
  }
})
