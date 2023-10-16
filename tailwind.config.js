/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {colors: {
      'dark-green': '#4e6c50',
      'green-grey': '#A2A378',
      'brown': '#5C180D',
      'beige': '#EFEAD4',
      'red' : '#DF0000',
      'trans' : '#000',
    }},
  },  
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#EFEAD4", 
            foreground: "#5C180D", 
            secondary: {
              DEFAULT: "#EFEAD4",
              foreground: "#000000",
            },
            success: {
              DEFAULT: "#EFEAD4",
              foreground: "#000000",
            },
            danger: {
              DEFAULT: "#5C180D",
              foreground: "#000000",
            },
            focus: "#BEF264",
            background: "#EFEAD4",

          },
        },
      },
    }),
  ],
}

