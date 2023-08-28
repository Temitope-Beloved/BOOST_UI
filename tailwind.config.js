/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      colors:{
      "color-primary": "#01051e",
      "color-primary-light": "#020726",
      "color-primary-dark":"#010417",
      "color-secondary":"#ff7d3b",
      "color-grey": "#333",
      "color-white": "#fff",
      "color-blob": "#AA427DF"
    }
    },
    container:{
      center:true,
      padding:{
        DEAFULT:'20px',
        md:"50px"
      }
    }
   
  },
  plugins: [],
}

