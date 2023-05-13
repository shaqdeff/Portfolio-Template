/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        flashWhite: '#f4f4f6',
        platinum: '#e6e6e9',
        platinumLight: '#f4f4f5',
        timberWolf: '#d4d4d8',
        taupe: '#9999a1',
        silver: '#d6d6d6',
        dim: '#66666e',
        battleGray: '#858585',
        french: '#b5b5ba',
        night: '#141414',
        jet: '#292929',
        jetLight: '#333333',
        jetGray: '#6d6d74',
        richBlack: '#2e2e2e',
        eerieBlack: '#1f1f1f',
        onyx: '#5b5b5b',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #1f1f1f',
        cardLight: '0px 19px 38px #eaeaec, 0px 15px 12px #eaeaec',
      },
      screens: {
        xs: '450px',
        sm: '640px',
        md: '768px',
        xmd: '900px',
        lg: '1025px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
      backgroundImage: {
        about:
          'linear-gradient(165deg, rgba(244,244,246,1) 100%, rgba(122,122,122,1) 100%)',
        experience:
          "linear-gradient(135deg, rgba(244,244,246,0.5) 60%, rgba(10,10,10,0.2) 100%),url('/src/assets/backgrounds/white-abstract.png')",
        experienceLight:
          'linear-gradient(137deg, rgba(244,244,246,0.5) 60%, rgba(10,10,10,0.9) 60%)',
        hero: 'linear-gradient(135deg, rgba(244,244,246,0.8) 60%, rgba(10,10,10,0.95) 60%)',
        'hero-mobile':
          'linear-gradient(137deg, rgba(244,244,246,0.8) 60%, rgba(10,10,10,1) 60%)',
        tech: "linear-gradient(165deg, rgba(20,20,20,0.8) 100%, rgba(109,109,116,0.8) 100%), url('/src/assets/backgrounds/nairobi.png')",
      },
      fontFamily: {
        arenq: ['Arenq'],
        beckman: ['Beckman'],
        mova: ['Mova'],
        overcameBold: ['Overcame Bold'],
        overcameOutline: ['Overcame Outline'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
