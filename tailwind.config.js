/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkGreen: "#155343",
      turqoise: "#149EB0",
      green: "#2B9A40",
      lightGreen: "#BAE154",
      paleGreen: "#D0E0B5",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      spacing: {
        15: "3.75rem",
      },
    },
  },
  plugins: [],
};
