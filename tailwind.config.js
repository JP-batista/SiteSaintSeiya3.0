/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Escaneia os arquivos do diretório app para classes do Tailwind
    './src/components/**/*.{js,ts,jsx,tsx}', // Se você tiver uma pasta de componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
