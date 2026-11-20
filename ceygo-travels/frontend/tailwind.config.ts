import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBFCEA",
        paper: "#FFFEF8",
        sand: "#E7E3C6",
        ink: "#141414",
        mute: "#5A5848",
        saffron: "#F69F00",
        "saffron-deep": "#D88700",
        palm: "#16B908",
        "palm-ink": "#0E6C06",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 24px 50px -32px rgba(20,20,20,0.45)",
        lift: "0 30px 70px -36px rgba(20,20,20,0.55)",
      },
      maxWidth: {
        page: "1200px",
        wide: "1380px",
      },
      keyframes: {
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "none" },
        },
        timer: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        ken: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.08)" },
        },
      },
      animation: {
        ticker: "ticker 42s linear infinite",
        rise: "rise .8s cubic-bezier(.16,1,.3,1) both",
        timer: "timer 6.5s linear forwards",
        ken: "ken 14s ease-out alternate infinite",
      },
    },
  },
  plugins: [],
};

export default config;
