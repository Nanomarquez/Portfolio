/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mb': '300px',
        'sc' : '1500px',
      },
      colors: {
        fondo: '#327172'
      },
      shadow : {
        sombra : "0 0 160px #ffffff"
      }
    },
    keyframes :{
      animate : {
        "0%,18%,20%,50.1%,60%,65.1%,80%,90.1%,92%" : {
          color: "#00000050",
        },
        "18.1%,20.1%,30%,50%,60.1%,65%,80.1%,90%,92.1%,100%" : {
          color: "#ffff",
          shadow : "sombra",
        },
      },
      links : {
        "0" : {
          rotate: "180deg"
        },
        "50" : {
          rotate : "360deg"
        }
      }
    },
    animation: {
      "luces" : 'animate 5s linear infinite',
    },
    animationdos: {
      "lucesdos" : 'animatedos 5s linear infinite',
    }
  },
  plugins: [],
}
