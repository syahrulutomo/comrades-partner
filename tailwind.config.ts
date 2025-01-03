import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/domains/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          10: '#e20074',
          20: '#c00062',
          30: '#9d0050',
          40: '#7c003f',
          50: '#5a002e',
        },
        secondary: {
          10: '#80eee1',
          20: '#33e4ce',
          30: '#00ddc2',
          40: '#02b19c',
          50: '#016f61',
        },
        info: {
          main: '#0077C2',
          surface: '#F4F5FF',
          border: '#C3C8FF',
          hover: '#6E75FF',
          pressed: '#333A96',
          focus: '#333A9633',
        },
        danger: {
          main: '#CB3A31',
          surface: '#FFF4F2',
          border: '#EEB4B0',
          hover: '#BD251C',
          pressed: '#731912',
          focus: '#73191233',
        },
        warning: {
          main: '#CD7B2E',
          surface: '#FFF9F2',
          border: '#EECEB0',
          hover: '#BF6919',
          pressed: '#734011',
          focus: '#73401133',
        },
        success: {
          main: '#43936C',
          surface: '#EDFCF2',
          border: '#B8DBCA',
          hover: '#367A59',
          pressed: '#20573D',
          focus: '#20573D33',
        },
      }
    },
  },
  plugins: [],
}
export default config
