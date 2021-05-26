const colors =

    module.exports = {
        presets: [
            require('./tailwind_preset.js')
        ],
        purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        darkMode: false, // or 'media' or 'class'
        theme: {},
        variants: {
            extend: {},
        },
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
        ],
    }