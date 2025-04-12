/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        destructive: {
          100: "#FECACA", // light red
          200: "#F87171", // hover/active red
          500: "#EF4444", // main red (optional)
        },
        success: {
          100: "#D1FAE5", // light green
          200: "#A7F3D0", // hover/active green
          500: "#10B981", // main green (optional)
        },
        primary: {
          100: "#D6E4FF", // light variant
          500: "#1E40AF", // main color
          700: "#1E3A8A", // dark variant
        },
        "dark-200": "#1F2937",
        "light-100": "#F3F4F6",
        "primary-200": "#3B82F6",
        "success-100": "#10B981",
        "destructive-100": "#EF4444",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
