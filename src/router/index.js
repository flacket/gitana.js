// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

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

const getCurrentUser = () => {
  return new Promise(( resolve, reject ) =>{
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach( async (to, _, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
});

export default router
