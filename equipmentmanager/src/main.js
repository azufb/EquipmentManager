import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAmb1Av_kllpAmpWpx1b9RkPTLE4r1wwik",
  authDomain: "equipmentmanager-5144f.firebaseapp.com",
  databaseURL: "https://equipmentmanager-5144f.firebaseio.com",
  projectId: "equipmentmanager-5144f",
  storageBucket: "equipmentmanager-5144f.appspot.com",
  messagingSenderId: "640241875327",
  appId: "1:640241875327:web:fe3154fd94263ff9cdc24a"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
