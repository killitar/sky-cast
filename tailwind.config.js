/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        softgray: '#202023',
        whitegray: '#52525b',
        softblack: '#131315',
        cream: '#f0e7db',
      },
    },
  },
  plugins: [],
};
