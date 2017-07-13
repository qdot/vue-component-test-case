import Vue from 'vue';
import Component from 'vue-class-component'
import TestComponent from './components/TestComponent/TestComponent.vue';

@Component({
  components: {
    TestComponent
  }
})
export default class App extends Vue {
}
