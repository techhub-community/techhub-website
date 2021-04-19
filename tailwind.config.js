module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      elephant_900: "#121b20",
      elephant_50: "#f4f5f6"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
