/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#59f78b",
        
"secondary": "#06d8b2",
        
"accent": "#d868b8",
        
"neutral": "#1b1c22",
        
"base-100": "#304155",
        
"info": "#3386eb",
        
"success": "#28d2c1",
        
"warning": "#9a540e",
        
"error": "#e72354",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}