const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  experimental: {
    darkModeVariant: true,
    applyComplexClasses: true,
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or "media" or "class"
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf3f8',
          100: '#fbe8f1',
          200: '#f6c4db',
          300: '#f0a1c6',
          400: '#e45b9b',
          500: '#d91470',
          600: '#c31265',
          700: '#a30f54',
          800: '#820c43',
          900: '#6a0a37',
        },
        primary: {
          50: '#fef7f7',
          100: '#fdefee',
          200: '#fbd6d5',
          300: '#f8bdbc',
          400: '#f38c8a',
          500: '#ee5a58',
          600: '#d6514f',
          700: '#b34442',
          800: '#8f3635',
          900: '#752c2b',
        },
        secondary: {
          50: '#f3f3fc',
          100: '#e7e7f9',
          200: '#c2c4f0',
          300: '#9da0e6',
          400: '#5458d4',
          500: '#0B11C1',
          600: '#0a0fae',
          700: '#080d91',
          800: '#070a74',
          900: '#05085f',
        },
        black: {
          50: '#f3f3f4',
          100: '#e6e8e9',
          200: '#c1c5c9',
          300: '#9ba2a8',
          400: '#515d67',
          500: '#061726',
          600: '#051522',
          700: '#05111d',
          800: '#040e17',
          900: '#030b13',
        },
        green: {
          50: '#f2fcfa',
          100: '#e6faf5',
          200: '#bff2e6',
          300: '#99ebd6',
          400: '#4ddbb8',
          500: '#00cc99',
          600: '#00b88a',
          700: '#009973',
          800: '#007a5c',
          900: '#00644b',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
              code: { color: theme('colors.blue.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code:before': {
              content: 'none',
            },
            'code:after': {
              content: 'none',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.400'),
              },
              code: { color: theme('colors.blue.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
    nightwind: {
      transitionDuration: '200ms',
    },
  },
  variants: {
    typography: ['dark'],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('nightwind'),
  ],
};
