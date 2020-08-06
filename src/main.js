import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'vant'
import { Swipe, SwipeItem } from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
import axios from'axios'
Vue.prototype.axios = axios
import { Icon } from 'vant'
Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Icon)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
