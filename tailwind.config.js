/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: false,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '3xl': {'min': '1850px'},
      '1600': {'min': '1600px'},
      '2xl': {'max': '1536px'},
      'xl': {'max': '1280px'},
      'lg': {'max': '1024px'},
      'md+': {'max': '875px'},
      'md': {'max': '768px'},
      'sm': {'max': '640px'},
      '2sm': {'max': '430px'},
      'h2xl': {'raw': '(max-height: 1000px)'},
      'hxl': {'raw': '(min-width: 1024px) and (max-height: 850px)'},
      'hxl650': {'raw': '(min-width: 1024px) and (max-height: 650px)'},
      'hxl550': {'raw': '(max-width: 1024px) and (max-height: 550px)'},
      'hxlOnly': {'raw': '(max-height: 850px)'},
    },
    extend: {
      animation: {
        fromTTT:'fromTTT 1s ease-out forwards',
        transLTR:'transLTR 5s forwards',
        transRTL:'transRTL 2s forwards',
        transLTRBis:'transLTRBis 2s forwards',
        transTTB:'transTTB 2s forwards',
        zoom:'zoom 5s linear infinite',
        infiniteMove:'infiniteMove 2s infinite ease-in-out',
        vibrate: 'vibrate 1.5s linear infinite',
        typing: '8s steps(100, end) infinite typingErase, 1.5s 1.5s step-end infinite typeWriter',
      },
      keyframes: {
        vibrate: {
          "0%" : { transform: "rotate(0deg)" },
          "5%" :{ transform: "rotate(-2deg)" },
          "10%" :{ transform: "rotate(2deg)" },
          "15%" :{ transform: "rotate(0deg)" },
          "20%" :{ transform: "rotate(2deg)" },
          "25%" :{ transform: "rotate(-2deg)" },
          "30%" :{ transform: "rotate(0deg)" },
          "100%" :{ transform: "rotate(0deg)" }
        },
        transLTR: {
          '0%':{transform: 'translateX(0%)'},
          '100%':{transform: 'translateX(100%)'}
        },
        transLTRBis: {
          '0%':{transform: 'translateX(-100%)', opacity: 0},
          '100%':{transform: 'translateX(0%)', opacity: 1}
        },
        transTTB: {
          '0%':{transform: 'translateY(-100%)', opacity: 0},
          '100%':{transform: 'translateY(0%)', opacity: 1}
        },
        transRTL:{
          '0%':{transform: 'translateX(100%)'},
          '100%':{transform: 'translateX(0%)'}
        },
        infiniteMove:{
          '0%':{transform: 'translateY(0%)'},
          '50%':{transform: 'translateY(-8%)'},
          '100%':{transform: 'translateY(0%)'},
        },
        defil:{
          '0%':{transform: 'translateX(-100%)'},
          '100%':{transform: 'translateX(0%)'}
        },
        defil2:{
          '0%':{transform: 'translateY(-100%)'},
          '100%':{transform: 'translateY(0%)'}
        },
        zoom:{
          '0%':{transform: 'scale(1)'},
          '50%':{transform: 'scale(1.07)'},
          '100%':{transform: 'scale(1)'}
        },
        fromTTT: {
          '0%':{ transform: 'translateY(0%)', opacity:1 },
          '25%':{ opacity:0 },
          '50%':{ transform: 'translateY(100%)' },
          '75%':{ opacity:0 },
          '100%':{ transform: 'translateY(0%)', opacity:1 },
        },
        typeWriter: {
          '0%':{ borderColor: "transparent" },
          '50%':{ borderColor: "white" },
          '100%':{ borderColor: "transparent" },
        },
        typingErase: {
          '0%':{ width: '100%' },
          '20%':{ width: '0%' },
          '40%':{ width: '0%' },
          '70%':{ width: '100%' },
          '100%':{ width: '100%' },
        },
      },
      spacing: {
      },
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
        'magra': ['Magra', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary": "#000",
        "secondary": "#DD1A21",
        "blue": "#5899E2",
        "dark_blue": "#1B7394",
        "background": "#FFF",
        "backgroundFeature": "rgba(224,50,44,0.40)",
        "formBG": "#E3595E",
        "specialCard": "#141414",
        "gray": "#D9D9D9",
        "backgroundServices":"rgba(221,27,33,0.53)",
        "newbg": "#F1F1F1",
        "bg-white":"#FFFEFB",
        "brown":"#272423",
        "bg-button":"#C9D6DF",
        "typo":"#1E2022",
        "new-gray":"rgb(255,254,251)",
        "new-black":"rgb(27,24,23)",
        "bg-gray":"rgba(237,237,237,1)",
      },
      
      fontSize: {
        h1: ['44px', '58px'],
      },
      height: {
        'pcHeight':'calc(100vh - 128px)',
        'pcHeightMobile':'calc(100vh - 96px)',
        'withOutHeader':'calc(100vh - 80px)',
        'reference':'calc(100vh - 204px)',
      },
      minHeight: {
        'withOutHeader':'calc(100vh - 80px)',
      },
      maxHeight: {
        'withOutHeader':'calc(100vh - 80px)',
        'reference':'calc(100vh - 200px)',
      },
      width: {
      },
      inset: {
      },
      backgroundImage: {
        blackGradient:'radial-gradient(circle, rgba(97,97,97,1) 0%, rgba(0,0,0,1) 100%)',
        backgroundRedLinear: "linear-gradient(90deg, rgba(221, 26, 33, 0.3) 0%, #F1F1F1 29.48%)",
        tekalpLinear:"linear-gradient(90deg, #FFFFFF 0%, #CECECE 48.5%, #999999 100%)",
        blueLinear:"linear-gradient(90deg, #252323 0%, #5897DF 100%)",
        blueTitle:"linear-gradient(90deg, #5899E2 0%, #242221 100%)",
        blueLinearBlog:"linear-gradient(180deg, rgba(27, 115, 148, 0) 55.5%, #D4EAF7 100%)",
      },
      boxShadow: {
        'base': '0px 8px 8px 0px rgba(0, 0, 0, 0.25)',
        'button': '0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
      },
    },
    },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

