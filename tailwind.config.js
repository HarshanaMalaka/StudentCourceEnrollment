/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",  // The index.html file where Tailwind classes will be used
    "./src/**/*.{js,jsx,ts,tsx}",  // Look for Tailwind classes in all JavaScript, JSX, TypeScript, and TSX files inside the src folder
  ],
  theme: {
    extend: {},  // You can extend the default theme here, like adding custom colors or fonts
  },
  plugins: [],  // Add Tailwind plugins here if needed (e.g., for forms, typography)
};

