/** @type {import('tailwindcss').Config} */
import img from "./src/assets/footer/brown-texture 1.svg";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
        "2/1": "2/1",
      },
      objectPosition: {
        tos: "top 100px",
      },
      gridRow: {
        "span-1/3": "span 16 / span 16",
      },
    },
    fontFamily: {
      inter: ['"inter"'],
      Libre: ['"Libre Baskerville"'],
    },
    backgroundImage: {
      Healthy:
        "linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('./src/assets/background-cup.png')",
      ads: "linear-gradient(to right, #658C4A, #89BC68)",
      nah: "linear-gradient(to right, #FFFFFF, #FFFFFF)",
      Commitment:
        "linear-gradient(to right bottom, rgba(101, 140, 74, 0.9), rgba(101, 140, 74, 0.9)), url('./src/assets/bag bg.jpeg')",
      subscribePage: "url('./src/assets/subscribe-bg.svg')",
      footer: "url('./src/assets/footer/brown-texture 1.svg')",
    },
  },
  plugins: [],
};
