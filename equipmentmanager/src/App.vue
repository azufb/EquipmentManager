<template>
  <div id='app'>
    <h1>Equipment Manager</h1>
    <form v-on:submit.prevent="onclick">
      <label for='name'>品目名</label>
      <input type='text' id='name' v-model='name' required />
      <input type='submit' value='登録' />
    </form>
    <ul v-for='(item, index) in items' :key='index'>
      <li>
        {{ item.name }}
        <input type='button' value='delete' @click='deleteItem(item.name)' />
        <input type='button' value='plus' @click='plus(item.name)' />
          {{ item.count }}
        <input type='button' value='minus' @click='minus(item.name)' />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    items() {
      return this.$store.getters.items;
    },
    count() {
      return this.$store.getters.items.count;
    }
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onclick() {
      this.$store.commit('addItem', {
        item: {
          name: this.name,
          count: 0
        }
      });
    },
    deleteItem(name) {
      this.$store.commit('deleteItem', name);
    },
    minus(name) {
      this.$store.commit('minus', name);
    },
    plus(name) {
      this.$store.commit('plus', name);
    }
  }
} 
</script>

<style>
/*
* {
  background-color: #d6d6d6;
}

body {
  margin: 0px;
  background-color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

h1 {
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 15px;
  background-color: white;
}

form {
  margin-top: 0px;
  background-color: white;
}

label {
  background-color: white;
  font-weight: bold;
}

input {
  background-color: white;
  font-weight: bold;
}

ul li {
  list-style: none;
}

footer {
  margin-top: auto;
}

p {
  margin: 0px;
  font-size: 12px;
  background-color: white;
}
*/
</style>
