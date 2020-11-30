import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: home */ '@/pages/homes/index.vue')
    },
    {
      path: '/vueClassComponent',
      name: 'vueClassComponent',
      component: () => import(/* webpackChunkName: vueClassComponent */ '@/pages/vueClassComponent')
    },
    {
      path: '/vuePropDeco',
      name: 'vuePropDeco',
      component: () => import(/* webpackChunkName: vuePropDeco */ '@/pages/vuePropertyDecorator')
    },
    {
      path: '/slot',
      name: 'slot',
      component: resolve => require(['@/pages/slot/index.vue'], resolve)
    },
    {
      path: '/render',
      name: 'render',
      component: () => import(/* webpackChunkName: render */ '@/pages/render')
    },
    {
      path: '/vuextest',
      name: 'vuextest',
      component: () => import(/* webpackChunkName: vuextest */ '@/pages/vuextest')
    },
  ]
})
