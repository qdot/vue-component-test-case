import Vue from 'vue';
import App from './App.vue';
const Icon = require('vue-awesome/components/Icon');

Vue.component('icon', Icon);

new Vue({
  el: '#app',
  render: h => h(App)
});
