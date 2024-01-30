/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors
      colors:{
        bg: '#140D27',
        border: '#FFFFFF2E',
        main:'#D434FE',
        submain:'#903AFF',
        graywhite:'#FFFFFFB',
        pinkpur: '#FE34B9',
        blues: '#903AFF'
      },
      screens:{
        xs:' 475px'
      },
      // animation
      animation: {
        typewriter: "typewriter 2s steps(36) forwards",
        caret: 'blink 1s infinite 2s',
        wiggle: 'wiggle 4s ease-in-out infinite ',
      },
      // key frames
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        },
        blink: {
          
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          // '100%': {
          //   opacity: '0',
          // },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(36deg)' },
        }
      },
    },
  },
  plugins: [],
}

