import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#191919",
        secondary: "#00008B",
        tertiary: "#000000",
        vargray: "#353539",
        cardBackground: 'rgb(18, 18, 23)',
        or:'#D4AF37'

      },
       animation: {
        rotate: "rotate 10s linear infinite",
        border: 'border 4s ease infinite',
        wall:'animation 5s linear infinite'
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        animation: {
         " 0%": {
              transform:" translateY(-100%)"
          },
          "100%": {
              transform: "translateY(100%)"
          }
      },
      },
     
  
        
    
    },
  },
  plugins: [],
} satisfies Config;
