/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1026px",
      xxl: "1220px"
    },
    extend: {
      boxShadow: {
        '3xl': '0px 15px 50px 0px rgba(0, 0, 0, 0.05)',
        '3xlh': '0px 15px 50px 0px rgba(0, 0, 0, 0.10)',
        'pulse-shadow': '10px solid rgba(0, 161, 222, 0.09)',
        
      },
      colors: {
        primary: "#FF7132",
        dark: "#263238",
        grey: "#525F64",
        "lghit-grey": "#97A6AE",
        title: "#082E3D",
        white: "#fff",
        blue: '#00A1DE',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"]
      },
    },
  },
  plugins: [],
};