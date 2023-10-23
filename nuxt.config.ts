// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    server: {
        fs: {
            allow: [".."]
        }
    }
  },
  modules: [
    '@nuxtjs/i18n',
  ],  
  i18n: {
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr.json'
      },
    ],
    defaultLocale: 'fr',
    vueI18n: './i18n.config.ts'
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
