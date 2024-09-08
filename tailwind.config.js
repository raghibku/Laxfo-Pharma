/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "green-bg":"#15322D",
        'nav-bg': '#F2EBE0',  // Custom utility class for background color
      },
      colors: {
        primaryText: '#2B354F', // Define your custom color
      },
      maxWidth: {
        'custom': '1200px',  // Custom max width value
      },
      fontFamily: {
        galliard: ['Galliard', 'serif'],
      },
    },

  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4CAF50",        // Example primary color
          "secondary": "#9C27B0",      // Example secondary color
          "accent": "#FF5722",         // Example accent color
          "neutral": "#333333",        // Example neutral color
          "nav-bg":"#F2EBE0",
          "green-bg":"#15322D",
          "base-100": "#FFFFF6",       // Background color
          "info": "#2094F3",           // Info color
          "success": "#8BC34A",        // Success color
          "warning": "#FFC107",        // Warning color
          "error": "#F44336",          // Error color
        },
      },
      // Optionally, include other built-in themes if desired
      'dark',
      'cupcake',
    ],
  },
}

