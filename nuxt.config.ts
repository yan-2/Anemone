// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: { global: true },
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxt/eslint',
  ],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
    // Options
  },
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
