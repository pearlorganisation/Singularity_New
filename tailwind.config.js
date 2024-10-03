/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'pm': ['Permanent Marker', 'cursive'],
      
    },
    extend: {
      fontSize: {
        clampH: "clamp(2.8rem, 5vw, 8rem)",
        clampS2: "clamp(20px, 4vw, 30px)",
        clampS: "clamp(12px, 3.5vw, 18px)",


      },
    },
  },
  plugins: [],
}

