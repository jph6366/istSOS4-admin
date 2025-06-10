import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/layers/**/pages/**/*.vue',
    './src/layers/**/components/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config