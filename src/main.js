// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyBNxzkLQ4EbcomN1w85c7cJXE1rBizXPQs',
  authDomain: 'tomoya-vuepwa.firebaseapp.com',
  databaseURL: 'https://tomoya-vuepwa.firebaseio.com',
  projectId: 'tomoya-vuepwa',
  storageBucket: 'tomoya-vuepwa.appspot.com',
  messagingSenderId: '466789008887'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
