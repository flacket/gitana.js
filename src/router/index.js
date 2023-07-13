// Composables
import { createRouter, createWebHistory } from 'vue-router'
import {getAuth} from "firebase/auth"

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/HomePage.vue'),
      },
      {
        path: "acerca",
        name: "acerca",
        component: () => import('@/views/AcercaPage.vue'),
        meta: {
          requiresAuth: true,
        }
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      alert("No tienes acceso");
      next("/");
    }
  } else {
    next();
  }
});

export default router
