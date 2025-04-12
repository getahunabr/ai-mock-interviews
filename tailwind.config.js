/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-200': '#1F2937',
        'light-100': '#F3F4F6',
        'primary-200': '#3B82F6',
        'success-100': '#10B981',
        'destructive-100': '#EF4444',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
