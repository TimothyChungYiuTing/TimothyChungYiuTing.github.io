// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "text-slide-left": {
          "0%": {
            opacity: 0,
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        "text-slide-bottom": {
          "0%": {
            opacity: 0,
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shadowPulse: {
          "0%": { filter: "drop-shadow(0px 0px 10px #a229f2)" },
          "50%": { filter: "drop-shadow(0px 0px 20px #a229f2)" },
          "100%": { filter: "drop-shadow(0px 0px 10px #a229f2)" },
        },
        hoverPulse: {
          "0%": { filter: "drop-shadow(0px 0px 10px #a229f2)" },
          "100%": { filter: "drop-shadow(0px 0px 10px #a229f2)" },
        },
        iconPulse: {
          "0%": { filter: "drop-shadow(0px 0px 10px #3959db)" },
          "50%": { filter: "drop-shadow(0px 0px 20px #3959db)" },
          "100%": { filter: "drop-shadow(0px 0px 10px #3959db)" },
        },
      },
      animation: {
        "text-slide-left": "text-slide-left 1s ease-out",
        "text-slide-bottom": "text-slide-bottom 2.5s ease 0s 1 normal forwards",
        gradient: "gradient 60s ease infinite",
        shadowPulse: "shadowPulse 2s ease-in-out infinite",
        hoverPulse: "hoverPulse 5s ease 10s 1 normal forwards;",
        iconPulse: "iconPulse 2s ease-in-out infinite",
        "fade-in": "fade-in 1s ease-out",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [require("tailgrids/plugin")],
};
