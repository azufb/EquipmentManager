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
      state.items.forEach(item => 
        item.count -= payload.dec
      )
      console.log(state.items[0])
      console.log(state.items[0].name)
      console.log(state.items[0].count)
    },
    plus(state, payload) {
      state.items.forEach(item => 
        item.count += payload.inc
      )
      console.log(state.items[0])
      console.log(state.items[0].name)
      console.log(state.items[0].count)
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
