import Vue from 'vue'
import 'bulma-fluent/bulma.sass'
import iView from 'iview';

import App from './pages/App'

// 加入 iView 组件
Vue.use(iView);

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App),
})
