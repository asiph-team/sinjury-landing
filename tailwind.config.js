module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './widgets/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--main-bg-color)",
        "secondary-color": "var(--secondary-bg-color)",
        "white-sinjury-color" :"var(--white-bg-color)"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
