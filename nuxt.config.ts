// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: { global: true },
  devtools: { enabled: true },
  ssr: true,
  modules: [
    // '@nuxtjs/stylelint-module',
    '@nuxt/eslint',
  ],
  css: [
    '~/assets/css/reset.css',
  ],
  eslint: {
    // checker: true, // <---
    config: {
      stylistic: true, // <---
    },
  },
})
