/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './src/**/*.{js,ts,jsx,tsx}' // Hi Sirwolf, if you use other extension like .erb, include here
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1100px",
    },
    extend: {
      height: {
        navbar: "4.5rem",
        page: "calc(100vh - 4.5rem)",
        sidebarH: "calc(100vh - 4.5rem - 3rem)",
      },
      width: {
        sidebar: "246px",
        page: "calc(100vw - 246px)",
      },
      fontFamily: {
        primary: ['Days One', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xxs: ['10px', '15px'],
        xs: ['12px', '18px'],
        sm: ['14px', '21px'],
        base: ['16px', '24px'],
        md: ['18px', '27px'],
        mb_lg: ['21px', '31.5px'],
        lg: ['24px', '36px'],
      },
      colors: {
        accent: {
          DEFAULT: "#398167",
          hover: "#3981661a",
          dark: "#1C5F46",
        },
        primary: {
          DEFAULT: "#181E1D",
          sub: "#666666",
        },
        secondary: {
          DEFAULT: "#BABABA",
          label: "#000000",
        },
        danger: "#FF8356",
        background: "#F8F7F6",
        lightBackground: "#EDF4F1",
        iconBackgroundAlt: "#F9F9F9",
      },
      boxShadow: {
        'inner-stroke': 'inset 0px 0px 0px 1px #F0F0F0',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('has-w-9', '&:has(.w-9)');
    },
  ],
};
