import type { Config } from 'tailwindcss'

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        50: '#f9f7fc',
        100: '#f2eff8',
        200: '#e5def0',
        300: '#d0c3e4',
        400: '#b59fd3',
        500: '#9578bd',
        600: '#78599f',
        700: '#644883',
        800: '#533c6c',
        900: '#47355a',
        950: '#291a38'
      }
    },
    extend: {},
  },
  plugins: [],
}
export default config