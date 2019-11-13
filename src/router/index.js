import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: '',
    redirect: '/home',

  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home/home.vue')
  },
  {
    path: '/classify',
    name: 'classify',
    component: () => import('../views/Classify/classify.vue')
  }, {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart/cart.vue')
  }, {
    path: '/my',
    name: 'my',
    component: () => import('../views/My/my.vue')
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
