// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: { global: true },
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@bootstrap-vue-next/nuxt',
    // '@nuxtjs/stylelint-module',
    '@nuxt/eslint',
  ],
  css: [
    '~/assets/css/boostrap_reset.scss',
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
    head: {
      titleTemplate: 'Anemone',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
     link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  }
})
