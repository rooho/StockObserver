import Vue from 'vue'
import ElementUI from 'element-ui';
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'

import App from './pages/App'

Vue.use(ElementUI);
// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App),
})
