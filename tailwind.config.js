/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      0.5: "0.5rem",
      0.75: "0.75rem",
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
      20: "1.25rem",
      16: "1rem",
      100: "100%",
    },

    screens: {
      md: "768px",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderWidth: {
        1: "1px",
        2: "2px",
      },
      borderColor: {
        1: "#000",
      },
      fontSize: {
        "20px": "1.25rem",
        "16px": "1rem",
        "14px": "0.875rem",
        "24px": "1.5rem",
        "18px": "1.125rem",
      },
      colors: {
        navModalHeader: "#9CA3AF",
        navModalText: "#374151",
        white: "#fff",
        red: "#DC2626",
        lightBlue: "#03C9D7",
        mainBg: "#FAFBFB",
        mdHidden: "#00000080",
      },
      boxShadow: {
        m1: "box-shadow: 0px 7px 30px 0px rgba(114, 122, 131, 0.11)",
      },
    },
  },
  plugins: [],
};
