module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#eff88f',
        'secondary': '#eff88f',
        'tertiary': '#00ADB5',
        'tertiary-500': '#029ea6',
        'light': '#EEEEEE',
        'saffron': '#FF5722',
        
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(90deg, rgba(243,129,129,1) 0%, rgba(255,255,224,1) 100%)",
     },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
