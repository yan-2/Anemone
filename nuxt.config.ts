// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: {global: true},
    devtools: {enabled: true},
    postcss : {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
    },
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
        '~/assets/css/main.css'
    ],
    eslint: {
        // checker: true, // <---
        config: {
            stylistic: true, // <---
        },

    }
})
