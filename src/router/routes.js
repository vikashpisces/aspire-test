const routes = [
  {
    path: '/',
    component: () => import('@/views/LandingPage.vue'),
    redirect: 'home',
    children: [{
      path: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: 'card',
      component: () => import('@/views/Card.vue'),
    }]
  },
  {
    path: '/login',
    component : () => import('@/views/Login.vue')
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('@/views/PageNotFound.vue')
  }
]

export default routes
