import Vue from 'vue';
import App from './App.vue';
var Icon = require('vue-awesome/components/Icon');
Vue.component('icon', Icon);
new Vue({
    el: '#app',
    render: function (h) { return h(App); }
});
//# sourceMappingURL=main.js.map