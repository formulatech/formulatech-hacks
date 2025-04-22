/** @type {import('tailwindcss').Config} */
export default {
    content: [ "./apps/www/src/**/*.{html,js,astro,jsx,ts,tsx}" ],
    theme: {
        extend: {
            colors: {
                background: '#FFFCF3',
                focus: '#D2273D',

                primary: {
                    1: '#FFFCF3',
                    2: '#D2273D'
                },

                accent: {
                    1: '#00AEB9',
                    2: '#383838',
                    3: '#000017'
                },
            },
            
            fontFamily: {
                primary: ['"Primary Font"', 'sans-serif'],
                secondary: ['"Secondary Font"', 'sans-serif'],
            },

            fontWeight: {
                regular: '400',
                medium: '500',
                bold: '700',
            },
        },
    },        
    plugins: [],
}
