import { defineConfig } from 'vite-plugin-windicss'
import defaultTheme from 'windicss/defaultTheme'

const config = defineConfig({
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '"Helvetica Neue"', 'Arial', '"Hiragino Kaku Gothic ProN"', '"Hiragino Sans"', 'Meiryo', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-default': '#FC76A1',
        'primary-yellow': '#DBBE56',
        'primary-orange': '#E39264',
        'primary-red': '#D25A61',
        'primary-purple': '#AE68E6',
        'primary-blue': '#4BACD5',
        'primary-teal': '#70C4BF',
        'primary-gray': '#7B7B8E',
        'primary-brown': '#9E7F72',
        'primary-darkBrown': '#5B4D47',
        'primary-background': '#181820',
        'secondary-background': '#1E1E29',
        'hero-background': '#1D1D26',
        'navigation': '#1D1D27',
        'primary-card': '#21212B',
        'secondary-card': '#343343',
        'hover-card': '#272732',
        'gray-text': '#C3C3D9',
        'gray-button': '#30303D',
        'gradient1-button': '#BB3FDD',
        'gradient2-button': '#FB6DA9',
        'gradient3-button': '#FF9F7C',
      },
      borderWidth: {
        1: '1px',
        3: '3px',
      },
      fontSize: {
        xxs: '.625rem',
      },
      boxShadow: {
        button: 'inset 0 -4px 0px 0 rgba(0, 0, 0, 0.25)',
      },
      height: {
        '90vh': '90vh',
        '80vh': '80vh',
      },
    },
  },
  extract: {
    // accepts globs and file paths relative to project root
    include: [
      'index.html',
      'src/**/*.{vue,html,css,scss}',
    ],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
      'src/assets/**/*',
    ],
  },
})

export default config
