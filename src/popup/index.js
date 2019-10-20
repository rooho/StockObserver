import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import 'element-theme-default';
import App from './pages/App.vue';
import 'normalize.css'

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});