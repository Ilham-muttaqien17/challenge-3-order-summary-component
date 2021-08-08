const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        redhat: "Red Hat Display"
      },
      colors: {
        blue: {
          "pale": {
            "100": "hsl(225, 100%, 94%)",
            "200": "hsl(225, 100%, 98%)"
          },
          "bright": "hsl(245, 75%, 52%)",
          "desaturated": "hsl(224, 23%, 55%)",
          "dark": "hsl(223, 47%, 23%)"
        }


      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({addUtilities}){
      const utilities = {
        ".bg-desktop": {
          "background-image": "url(/desktop.svg)",
          "background-repeat": "no-repeat",
        },
        ".bg-mobile": {
          "background-image": "url(/mobile.svg)",
          "background-repeat": "no-repeat",

        }
      };
      addUtilities(utilities);
    })
  ],
}
