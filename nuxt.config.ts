// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/icon'],
  $production: {
    routeRules:{
      '/**': {static: true}
    }
  },
  $development:{
  },
  devtools: { enabled: true }
})