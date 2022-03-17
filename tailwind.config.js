// Material UI
// https://material.io/resources/color/#!/?view.left=1&view.right=0&primary.color=FFDC00&secondary.color=616161
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'yellow-light': '#ffff53',
        'yellow': '#ffdc00',
        'yellow-dark': '#c7ab00',
        'grey-dark': '#373737',
        'grey': '#616161',
        'grey-light': '#8e8e8e',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  },
  plugins: [],
}