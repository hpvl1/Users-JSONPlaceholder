import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Users', component: () => import('../views/Users.vue') },
    { path: '/users/:id', name: 'User', component: () => import('../views/User.vue'), props: true },
    {
      path: '/create-user',
      name: 'CreateUser',
      component: () => import('../views/CreateUser.vue'),
    },
  ],
});

export default router;
