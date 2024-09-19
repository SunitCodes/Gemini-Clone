/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-bg' : '#f0f4f9',
        'custom-btn' : '#e6eaf1',
        'custom-hover' : '#e2e6eb',
        'custom-divbg' : '#f0f4f9',
        'custom-text1' : '#c4c7c5',
        'custom-tryadv' : '#dde3ea'
      }
    },
  },
  plugins: [],
}