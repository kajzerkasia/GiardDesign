/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
        colors: {
            'beige': '#DCC1AB',
            'green': '#1B5B31',
            'grey': '#F5F0EC',
            'white': '#FFFFFF',
            'black': '#111111',
        },
        fontFamily: {
            'body': ['"Montserrat"'],
            'p': ['"Inter"'],
        }

    },
    plugins: [],
}