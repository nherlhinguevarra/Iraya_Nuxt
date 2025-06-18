// tailwind.config.js
module.exports = {
    darkMode: 'dark', // or 'media' for system-based without class toggle
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                exo2: ['"Exo 2"', 'sans-serif'],
            },
            colors: {
                orange: {
                500: '#F47625',
                },
                bg: {
                500: '#2D918C',
                },
                lightgray: {
                200: '#666666'
                }
            },
        },
    },
    plugins: [],
}
