// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://anemone-ten.vercel.app',
  },
  components: { global: true },
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/eslint', "@nuxtjs/sitemap" ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/foundations.less',
    '~/assets/css/fonts.less',
    '~/assets/css/main.css'
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