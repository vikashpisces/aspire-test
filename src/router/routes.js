const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    redirect: 'card',
    children: [{
      path: 'card',
      component: () => import('@/views/Card.vue'),
    }]
  },

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/Error404.vue')
  // }
]

export default routes
