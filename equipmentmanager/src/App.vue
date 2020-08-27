<template>
  <v-app id='App'>
    <v-app-bar
    app 
    color='#B2EBF2'
    >
      <div class="d-flex align-center">
        <h1>Equipment Manager</h1>
      </div>
    </v-app-bar>

    <v-main>
      <form v-on:submit.prevent='onclick'>
        <label for='name'>品目名：</label>
        <v-text-field label='品目名を入力してください。' single-line solo 
        id='name' v-model='name' required />
        <v-btn type='submit'>登録</v-btn>
      </form>
      <div v-for='(item, index) in items' :key='index'>
        <p>
          {{ item.name }}
          <v-btn color='primary' v-on:click='deleteItem(item.name)'>DELETE</v-btn>
          <v-btn color='primary' v-on:click='plus(item.name)'>PLUS</v-btn>
          {{ item.count }}
          <v-btn color='primary' v-on:click='minus(item.name)'>MINUS</v-btn>
        </p>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    items() {
      return this.$store.getters.items
    },
    count() {
      return this.$store.getters.items.count
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
      })
      this.name = ''
    },
    deleteItem(name) {
      this.$store.commit('deleteItem', name)
    },
    plus(name) {
      this.$store.commit('plus', name)
    },
    minus(name) {
      this.$store.commit('minus', name)
    }
  }
};
</script>