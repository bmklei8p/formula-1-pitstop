/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        twitterCircularAnimation : {
         "0%": {
            transform: "rotate(0deg) translateY(0px) translateX(-50px) rotate(0deg)"
          },
          "100%": {
            transform: "rotate(0deg) translateY(-100px) rotate(-360deg)"
          }
        },
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'twitter-circular-animation': 'twitterCircularAnimation 2s linear',
      },
      colors: {
        background: "hsl(var(--background))",
        contentBackground: "hsl(var(--contentBackground))",
        borderColor: "hsl(var(--borderColor))",
        altGray: "hsl(var(--altGray))",
        altGrayDarker: "hsl(var(--altGrayDarker))",
      },
      fontFamily: {
        sans: ['var(--font-titillium-web)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



// {
//   "0%": {
//      transform: "translateY(0) translateX(0)"
//    },
//    "25%" :{
//      transform: "translateY(100px) translateX(0)"
//    },
//    "50%": {
//      transform: "translateY(100px) translateX(-100px)"
//    },
//    "75%": {
//      transform: "translateY(0) translateX(-100px)"
//    },
//    "100%": {
//      transform: "translateY(0) translateX(1000)"
//    }
//  }