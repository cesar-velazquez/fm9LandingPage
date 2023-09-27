/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        DarkBlueIntroandEmail : '#1c2431',
        DarkBlueMainBackGround : '	#181f2a',
        DarkBlueFooter : '	#0b1523',
        DarkBlueTestimonials : '#202a3c',
        ColorError : '#ff4242', 
        White: '#ffffff'
      },
      fontFamily:{
        "Raleway" : ['Raleway', 'sans-serif'],
        "Open": ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

