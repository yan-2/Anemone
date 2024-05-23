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
    },
    {
      name: 'center',
      path: '/center',
      component: () => import('~/pages/center.vue').then(r => r.default || r)
    },
    {
      name: 'contacts',
      path: '/contacts',
      component: () => import('~/pages/contacts.vue').then(r => r.default || r)
    },
    {
      name: 'faq',
      path: '/faq',
      component: () => import('~/pages/faq.vue').then(r => r.default || r)
    },
    {
      name: 'people',
      path: '/people',
      component: () => import('~/pages/people.vue').then(r => r.default || r)
    },
    {
      name: 'projects',
      path: '/projects',
      component: () => import('~/pages/projects.vue').then(r => r.default || r)
    },
    {
      name: 'services',
      path: '/services',
      component: () => import('~/pages/services.vue').then(r => r.default || r)
    }
  ],
}