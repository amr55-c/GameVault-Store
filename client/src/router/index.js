import { createRouter, createWebHistory } from 'vue-router';
import CheckoutView from '../views/CheckoutView.vue';
import LoginView from '../views/LoginView.vue';   

const routes = [
  { path: '/', component: CheckoutView },   
  { path: '/login', component: LoginView },   
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
  const token = localStorage.getItem('userToken'); 
  if (to.meta.requiresAuth && !token) {
    next('/login');
  } else {
    next();
  }
});

export default router;