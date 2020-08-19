<template>
  <div id='app'>
    <h1>Equipment Manager</h1>
    <p>家庭内の備品を名称・購入先(ブランド名)・個数と共に管理できます。</p>
    <form v-on:submit.prevent="onclick">
      <label for='name'>品目名</label>
      <input type='text' id='name' v-model='name' required />
      <label for='brand'>ブランド名</label>
      <input type='text' id='brand' v-model='brand' />
      <input type='submit' value='登録' />
    </form>
    <ul v-for='(item, index) in items' :key='index'>
      <li>
        {{ item.name }}
        <span class='brand'></span>
        {{ item.brand }}
        <input type='button' value='削除' @click='deleteItem(item.name)' />
        <input type='button' value='＋' @click='plus(item.name)' />
          {{ item.count }}
        <input type='button' value='ー' @click='minus(item.name)' />
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
      name: '',
      brand: ''
    }
  },
  methods: {
    onclick() {
      this.$store.commit('addItem', {
        item: {
          name: this.name,
          brand: this.brand,
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


body {
  margin: 0px;
  background-color: #d6d6d6;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #d6d6d6;
}

h1 {
  margin: 0px;
  font-size: 40px;
}

form {
  margin-top: 0px;
}

label {
  font-weight: bold;
}

input {
  font-weight: bold;
}

ul {
  height: 50px;
  margin-top: 0px;
}

ul li {
  list-style: none;
  height: 50px;
  font-size: 20pt;
  word-wrap: break-word;
}

.brand {
  border-left: 1px dashed black;
}

footer {
  margin-top: auto;
}

p {
  margin-bottom: 0px;
  font-size: 12px;
  background-color: white;
  background-color: #d6d6d6;
}

</style>
