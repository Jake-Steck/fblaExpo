/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./ src/**/ *.{ html, js }",
    "./components/**/ *.{ html, js }",
    "./screens/**/ *.{ html, js }",],
  theme: {
    extend: {},
  },
  plugins: [],
}
