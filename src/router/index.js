import Vue from 'vue'
import VueRouter from 'vue-router'
import hoeh from '../views/hoeh.vue'
import wqaview from '../components/dtwd/wqaview.vue'
import amdc from  '../views/amdc.vue'
import tdkce from '../views/tdkce.vue'
import wot from '../views/wot.vue'
import jhft from '../components/toptf/jhft.vue'
import kat from "../components/toptf/kat.vue"
import rtl from '../components/toptf/rtl.vue'
import amtfcl from "../components/toptf/amtfcl.vue"
import wguk from '../components/toptf/wguk.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
	redirect:"/hoeh"
	
  },
 {
    path: '/hoeh',
    component: hoeh
  },

  {
    path: '/amdc',
    component: amdc
  },
  {
    path: '/tdkce',
    component: tdkce
  },
  {
    path: '/wot',
    component: wot
  },
  {
    path: '/jhft',
  	component: jhft	
  },
  {
    path: '/kat',
  	component: kat	
  },
  {
    path: '/rtl',
  	component: rtl	
  },
  {
    path: '/amtfcl',
  	component: amtfcl	
  },
  {
    path: '/wguk',
  	component: wguk	
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
