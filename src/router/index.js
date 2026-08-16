import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/views/main/Main.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
    },
    {
      path: '/main',
      redirect: '/',
    },
  ],
})

export default router
