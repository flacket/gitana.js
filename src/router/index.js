// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/views/LoginPage.vue'),
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/HomePage.vue'),
      },
      {
        path: "pullrequest",
        name: "PullRequest",
        component: () => import('@/views/PullRequest.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "repositorio",
        name: "Repositorio",
        component: () => import('@/views/RepositorioPage.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "repodescarga",
        name: "RepoDescarga",
        component: () => import('@/views/RepoDescarga.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "acerca",
        name: "Acerca",
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

router.beforeEach( async (to, _, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (auth.currentUser) {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
});

export default router
