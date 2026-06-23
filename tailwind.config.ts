import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gluco-beige": "#F4EAD8",
        "gluco-blue": "#317CA2",
        "gluco-teal": "#4A9B7F",
        "gluco-orange": "#FF8A50",
        "gluco-yellow": "#FFD700",
        "gluco-pink": "#FF6B9D",
        "gluco-purple": "#9B59B6",
        "gluco-green": "#2ECC71",
      },
      fontFamily: {
        fredoka: ["'Fredoka'", "'Nunito'", "sans-serif"],
        playful: ["'Bubblegum Sans'", "cursive"],
        sans: ["'Fredoka'", "'Nunito'", "sans-serif"],
      },
      backgroundImage: {
        "gradient-gluco": "linear-gradient(135deg, #F4EAD8 0%, #FFE8B6 100%)",
        "gradient-fun": "linear-gradient(135deg, #FF8A50 0%, #FF6B9D 50%, #9B59B6 100%)",
      },
      fontSize: {
        xs: ["0.875rem", "1.25rem"],
        sm: ["1rem", "1.5rem"],
        base: ["1.125rem", "1.75rem"],
        lg: ["1.25rem", "1.875rem"],
        xl: ["1.5rem", "2rem"],
        "2xl": ["1.875rem", "2.25rem"],
        "3xl": ["2.25rem", "2.875rem"],
        "4xl": ["3rem", "3.75rem"],
        "5xl": ["3.75rem", "4.625rem"],
        "6xl": ["4.5rem", "5.25rem"],
      },
    },
  },
  plugins: [],
};
export default config;
