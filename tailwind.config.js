/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    variants: {
      height: ['responsive', 'hover', 'focus']
  },
    extend: {
        fontFamily: {
          lato: ["Lato", "sans-serif"],
          playfair: ["Playfair Display", "serif"],
          montserrat: ["Montserrat", "serif"],
          lilita: ["Lilita One", "sans-serif"]
      },
        transitionProperty: {
          'height': 'height'
        },
        rotate: {
          '20': '20deg',
        },
        
        keyframes: {
          jump: {
            '25%, 75%': {
              transform: 'translateY(1.2%)',
              opacity: '100'
            },
            '50%, 100%': {
              transform: 'none',
              opacity: '100'
            }
          }
        },

        animation: {
          'jump-smooth': 'jump 2s linear infinite',
        }
    },
  },
  plugins: [],
}

