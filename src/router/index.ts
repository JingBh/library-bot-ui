import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import VueMeta from 'vue-meta'

import HomePage from '@/views/Home.vue'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: () => import(/* webpackChunkName: "book" */ '@/views/Book.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
