// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // phosphor: {
  //   expose: true,
  // },
  site: {
    url: 'https://anemone-n2be.vercel.app',
  },
  components: { global: true },
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/eslint', '@nuxtjs/sitemap', 'vue3-carousel-nuxt', '@nuxt/image',"nuxt-phosphor-icons"],
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
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
})
