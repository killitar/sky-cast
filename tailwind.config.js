/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        softgray: '#202023',
        softblack: '#131315',
      },
    },
  },
  plugins: [],
};
