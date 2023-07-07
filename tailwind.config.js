/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'textPrime': '#000000',
      'textSec': '#f3f3f3',
      'white': '#ffffff',
      'primary': '#8FB3FF',
      'secondary': '#CCDBFF',
      'accent': '#FF8F94',
    },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    // extend: {
    //   spacing: {
    //     '8xl': '96rem',
    //     '9xl': '128rem',
    //   },
    //   borderRadius: {
    //     '4xl': '2rem',
    //   }
    // }
  },
  plugins: [],
}
