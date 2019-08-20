import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import jquery from 'jquery'
Vue.use(Vant);
import { PullRefresh } from 'vant';
Vue.use(PullRefresh);

import router from './routers'
import store from './stores/store'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
