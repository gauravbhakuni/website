/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      smm: "0px",
      sm: "393px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      primary: "var(--font-cedarvilleCursive)",
      cursive: "var(--font-cedarvilleCursive)",
      secondary: "var(--font-indieFlower)",
    },
    extend: {
      rotate: {
        '2': '2deg',
      },
      colors: {
        primary: 'white',
        accent: {
          DEFAULT: "#CCCCCC",
          hover: "#AAAAAA",
        },
        secondary: {
          DEFAULT: "#2C5F2D",
          hover: "#daa520",
        }
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}