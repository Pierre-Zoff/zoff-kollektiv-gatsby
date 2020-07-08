module.exports = {
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
    options: {
      whitelistPatterns: [/text.*$/],
    },
  },
  theme: {
    fontFamily: {
      sans: ["Mark OT", "Helvetica", "Arial", "sans-serif"],
      body: ["Mark OT", "Helvetica", "Arial", "sans-serif"],
    },
    lineHeight: {
      none: 1,
      tight: 1.15,
      snug: 1.25,
      normal: 1.5,
    },
    spacing: {
      "1": "12px",
      "2": "24px",
      "3": "48px",
      "4": "96px",
      "5": "112px"
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      tiny: "16px",
      base: "18px",
      lg: "20px",
      xl: "22px",
      "2xl": "24px",
      "3xl": "26px",
      "4xl": "28px",
      "5xl": "30px",
      "6xl": "32px",
      "7xl": "44px",
      "8xl": "48px",
      "9xl": "52px",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      red: "#ED4646",
      blue: "#1F82DD",
      green: "#70CA51",
      gray: "#353535",
      lightGray: "#F1F1F1"
    },
    container: {
      center: true,
    },
  },
  variants: {
    margin: ["last"],
  },
  options: { important: true },
  plugins: [require("tailwindcss-hyphens")],
};
