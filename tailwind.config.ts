import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EC",
        paper: "#FFFCF7",
        ink: "#312F2B",
        muted: "#777168",
        sage: {
          50: "#F0F5F1",
          100: "#DDE9E0",
          500: "#66836E",
          600: "#55715E",
          700: "#435B4B",
        },
        peach: {
          50: "#FFF5EE",
          100: "#FBE6D8",
          400: "#DDA67F",
        },
      },
      boxShadow: {
        soft: "0 14px 40px rgba(67, 58, 47, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
