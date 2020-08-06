import Vue from 'vue'
import VueRouter from 'vue-router'
import hoeh from '../views/hoeh.vue'
import wqaview from '../components/dtwd/wqaview.vue'
import amdc from  '../views/amdc.vue'
import tdkce from '../views/tdkce.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'tdkce',
    component: tdkce
  },
  {
    path: '/hoeh',
    name: 'hoeh',
    component: hoeh
  },
  {
    path: '/amdc',
    name: 'amdc',
    component: amdc
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
