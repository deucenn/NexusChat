/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // For `app` directory in Next.js 13+
    "./apps/**/*.{js,ts,jsx,tsx}" // If using a Turborepo monorepo
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


