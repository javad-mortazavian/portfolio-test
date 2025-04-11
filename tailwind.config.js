<<<<<<< HEAD
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': `url(/herobg.png)`,
      },
    },
  },
  plugins: [],
};
=======
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensure your HTML file is included
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS and JSX files in the src directory
  ],
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  theme: {
    extend: {
      fontWeight: {
        'extra-light': 200,
        'medium': 500,
      },
    },
  },
  plugins: [
    require('flowbite/plugin'), // Include the Flowbite plugin
  ],
}
>>>>>>> 40de23ac0b49f1ecbb54e2e3be7923326bd6da61
