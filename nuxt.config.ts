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

    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

    colorMode: {
        classSuffix: '',       // uses .dark class
        preference: 'system',  // default to system mode
        fallback: 'light',     // fallback if no preference saved
        storageKey: 'nuxt-color-mode',
    },

    app: {
        head: {
            meta: [
                {
                name: 'vieport',
                content: 'width=device-width, initial-scale=1.0',
                }
            ],
            link: [
                { 
                    rel: 'stylesheet', 
                    href: 'https://fonts.googleapis.com/css2?family=Exo+2:wght@100..900&family=Quicksand:wght@300..700&display=swap'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
                }
            ]
        }
    }
})