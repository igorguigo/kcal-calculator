/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        vuejs: {
          100: "#49e659",
          200: "#49e660"
        },

        purple: '#7E3AF2',
        gray: {
          100: '#6B7280',
          200: '#E5E7EB',
          300: '#F9FAFB',
        }
      },
    },
  },
  plugins: [],
}
