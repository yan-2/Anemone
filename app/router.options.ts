import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/home.vue').then(r => r.default || r)
    },
    {
      name: 'chatbot',
      path: '/chatbot',
      component: () => import('~/pages/chatbot.vue').then(r => r.default || r)
    }
  ],
}