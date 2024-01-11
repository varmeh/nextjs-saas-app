import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{ light: { ...require('daisyui/src/theming/themes')['winter'], 'primary-content': 'white' } }, 'sunset'],
    darkTheme: 'sunset' // using daisyUI sunset as dark theme
  }
}
export default config
