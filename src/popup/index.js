import Vue from 'vue'
import ElementUI from 'element-ui';

import App from './pages/App'

Vue.use(ElementUI);
// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App),
})
