/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mplus: ["'M Plus Rounded 1c'", 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
