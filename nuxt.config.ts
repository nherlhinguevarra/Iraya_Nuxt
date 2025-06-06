// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  pages: true,
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      wpApiBase: 'https://https://demoiraya.bicoluni-busina.com//wp-json' // <-- Replace with your site
    }
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],

  app: {
    head: {
      link: [
        { rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Exo+2:wght@100..900&family=Quicksand:wght@300..700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css'
        }
      ]
    }
  }
})