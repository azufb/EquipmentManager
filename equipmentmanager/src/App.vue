<template>
  <div id='app'>
    <h1>備品管理</h1>
    <form v-on:submit.prevent="onclick">
      <label for='name'>品目名</label>
      <input type='text' id='name' v-model='name' required />
      <input type='submit' value='登録' />
    </form>
    <ul v-for='(item, index) in items' :key='index'>
      <li>
        {{ item.name }}
        <input type='button' value='delete' @click='deleteItem(index)' />
        <input type='button' value='plus' @click='item.count += 1' />
          {{ item.count }}
        <input type='button' value='minus' @click='item.count -= 1' />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    items() {
      return this.$store.getters.items
    }
  },
  data() {
    return {
      name: '',
      count: 0
    }
  },
  methods: {
    onclick() {
      this.$store.commit('addItem', {
        item: {
          name: this.name,
          count: 0
        }
      })
    },
    deleteItem() {
      this.$store.commit('deleteItem')
    },
    /*minus(x = 1) {
      this.$store.dispatch('minus', {
        dec: x
      })
    },
    plus(y = 1) {
      this.$store.dispatch('plus', { 
        inc: y
      })
    }*/
  }
} 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul li {
  list-style: none;
}
</style>
