<template>
  <div id='app'>
    <h1>備品管理</h1>
    <form v-on:submit.prevent="onclick">
      <label for='name'>品目名</label>
      <input type='text' id='name' v-model='name' required />
      <input type='submit' value='登録' />
    </form>
    <div class="list">
    <ul v-for='(item, index) in items' :key='index'>
      <li>{{ item.name }}</li>
      <input class="delete" type='button' value='delete' @click='deleteItem(item)' />
      <input class="plus" type='button' value='+' @click='item.count += 1' />
        <span class="count">{{ item.count }}</span>
      <input class="minus" type='button' value='-' @click='item.count -= 1' />
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    items() {
      return this.$store.getters.items;
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
      });
    },
    deleteItem() {
      this.$store.commit('deleteItem');
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

.list {
  width: 100%;
}

.list ul {
  width: 50%;
  margin: 0 auto;
  display: flex;
}

ul li {
  list-style: none;
  font-size: 30px;
  width: 300px;
  border: 1px solid black;
  background-color: white;
}

.delete {
  background-color: black;
  color: white;
}

.plus {
  margin-left: 10px;
  background-color: black;
  color: white;
}

.minus {
  background-color: black;
  color: white;
}

.count {
  font-size: 30px;
}

footer {
  margin-top: auto;
}

p {
  margin: 0px;
  font-size: 12px;
  background-color: white;
}

</style>
