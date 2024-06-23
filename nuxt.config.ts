// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://anemone-ten.vercel.app',
  },
  components: { global: true },
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/eslint', '@nuxtjs/sitemap'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/tailwind.less',
  ],
  eslint: {
    // checker: true, // <---
    config: {
      stylistic: true, // <---
    },
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
})
