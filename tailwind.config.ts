import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        primary: {
          primary: "#5E2CA5", // Roxo escuro
          secondary: "#FFD500", // Amarelo
          accent: "#FF7A00", // Laranja
          neutral: "#FFFFFF", // Branco
          "base-100": "#F5F5F5", // Cinza claro
          info: "#1976D2", // Azul
          success: "#4CAF50", // Verde
          warning: "#FFC107", // Amarelo escuro
          error: "#FF5252", // Vermelho
          body: {
            "background-color": "#F5F5F5", // Cinza claro
          },
        },
      },
    ],
  },
};
export default config;
