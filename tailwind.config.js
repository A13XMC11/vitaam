/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1a3a2a',
        'forest-mid': '#2d5a3f',
        'forest-light': '#3d7a54',
        sage: '#8ab89a',
        gold: '#c9963f',
        'gold-light': '#e8b96a',
        cream: '#faf6ef',
        'cream-dark': '#f0e9db',
        linen: '#e8ddd0',
        bark: '#3d2b1f',
        charcoal: '#1c2320',
        mist: '#f5f8f5',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
