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
        },
        letterSpacing: {
            'narrow': '-0.12px',
            'narrower': '-0.16px',
            'even_narrower': '-1.4px',
            'narrowest': '-1.44px'
        },
        lineHeight: {
            'loose': '115%',
            'looser': '70px',
            'even_looser': '150%',
        },
    },
    plugins: [],
}