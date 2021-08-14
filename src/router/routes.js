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
    },{
      path: 'payment',
      component: () => import('@/views/Payment.vue'),
    }]
  },
  {
    path: '/login',
    component : () => import('@/views/Login.vue')
  }

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/Error404.vue')
  // }
]

export default routes
