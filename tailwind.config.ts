import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#101B32",
          50: "#F2F5FA",
          100: "#E3E9F3",
          200: "#C7D2E6",
          300: "#9FB0D0",
          400: "#6E82AC",
          500: "#46588A",
          600: "#2E3F6B",
          700: "#1E2D52",
          800: "#162240",
          900: "#101B32",
          950: "#0A1223",
        },
        electric: {
          DEFAULT: "#1976D2",
          50: "#EEF6FE",
          100: "#D9ECFD",
          200: "#B6D9FA",
          300: "#85BFF5",
          400: "#4C9BEC",
          500: "#1976D2",
          600: "#115FB1",
          700: "#0F4C8E",
          800: "#123F73",
          900: "#14375F",
        },
        warm: "#F8FAFC",
        graphite: {
          DEFAULT: "#242B36",
          100: "#E8EBEF",
          200: "#CDD3DB",
          300: "#9BA4B1",
          400: "#6B7686",
          500: "#48515F",
          600: "#333B48",
          700: "#242B36",
          800: "#1A2029",
        },
        kraft: "#C49A6C",
        volt: {
          DEFAULT: "#FF9D32",
          100: "#FFF1DF",
          200: "#FFE0BC",
          300: "#FFC77F",
          400: "#FFB252",
          500: "#FF9D32",
          600: "#F08210",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,27,50,0.04), 0 8px 24px rgba(16,27,50,0.06)",
        pop: "0 12px 40px rgba(16,27,50,0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
