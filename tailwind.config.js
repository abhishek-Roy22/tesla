/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Home: "url('../../assets/ms-main-hero-desktop.jpg')",
        ModelY: "url('../../assets/model-y_R1@2.jpg')",
        ModelX: "url('../../assets/MX-Hero-Desktop.jpg')",
        Solar: "url('../../assets/solar-panel-desktop.jpg')",
        Storm: "url('../../assets/sr-storm-desktop.png')",
      },
    },
  },
  plugins: [],
};
