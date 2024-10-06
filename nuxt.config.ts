// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/simple-grid.min.css', '~/assets/css/main.css' , '~/assets/css/typography.css'],
  modules: ['@nuxt/image'],
})