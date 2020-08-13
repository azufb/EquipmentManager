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
      <input type='button' value='delete' v-on:click='deleteItem' />
      <input type="button" value="plus" v-on:click="plus" />
        <span>{{ item.count }}</span>
      <input type="button" value="minus" v-on:click="minus" />
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    items() {
      return this.$store.state.items
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
    minus() {
      this.$store.commit('minus')
    },
    plus() {
      this.$store.commit('plus')
    }
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
