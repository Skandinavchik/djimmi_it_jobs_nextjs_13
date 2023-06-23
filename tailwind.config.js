/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '1rem',
            },
            colors: {
                transparent: 'transparent',
                mainGreen: '#67c7a0',
                altGreen: '#5fb894',
                mainGrey: '#d8d8d8',
                light: '#FAFAFA',
                dark: '#282f37',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
        },
    },
    plugins: [],
}
