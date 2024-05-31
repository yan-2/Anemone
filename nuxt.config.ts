// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: { global: true },
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxt/eslint',
  ],
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/foundations.less',
    '~/assets/css/fonts.less',
  ],
  eslint: {
    // checker: true, // <---
    config: {
      stylistic: true, // <---
    },
  },
  app: {
     link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  }
})
