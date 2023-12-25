/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        cardShadow: '0px 4px 9px 0px rgba(0, 0, 0, 0.05)',
        buttonShadow: '0px 4px 9px 0px rgba(0, 0, 0, 0.05)',
        logRegBtnShadow: '0px 4px 61px 0px rgba(77, 71, 195, 0.40)',
        btnShadow: '2px 6px 6px rgba(0, 0, 0, 0.5)',
      },
      backgroundColor: {
        btnBgColor: '#B588FF',
        inputBgColor: '#F0EFFF',
        footerBgColor: '#161C28',
      },
    },
  },
  plugins: [],
};
