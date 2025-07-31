// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
