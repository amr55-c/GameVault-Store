import { createRouter, createWebHistory } from 'vue-router';
import CheckoutView from '../views/CheckoutView.vue'; 

const routes = [
  { 
    path: '/', 
    component: CheckoutView 
  },
  { 
    path: '/checkout', 
    component: CheckoutView, 
    meta: { requiresAuth: true } 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('userToken'); // Session Persistence
  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    next('/');
  } else {
    next();
  }
});

export default router;