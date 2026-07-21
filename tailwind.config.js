/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          HOVER: "rgb(var(--accent-hover) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
      },
      fontFamily: {
        Chakra: ["Chakra Petch", "sans-serif"],
        arabic: ["Cairo", "Chakra Petch", "sans-serif"],
        varela: ["Varela Round", "sans-serif"],
        roboto: ['Roboto', 'sans-serif'],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },

      fontSize: {
        "icons": "24px",
      }
    },
  },
  plugins: [],
};
