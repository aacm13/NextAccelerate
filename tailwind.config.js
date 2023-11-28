module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ["Poppins", "san-serif"],
        bold: ["PoppinsBold", "san-serif"],
        medium: ["PoppinsMedium", "san-serif"],
      },
      colors: {
        accelerate: {
          blue: "#1e32ff",
          cyan: {
            DEFAULT: "#1edcff",
            hover: "#009ab6",
          },
          indigo: "#14197a",
          magenta: "#733df2",
          magentaLight: "#8F63F4",
          black: "#303030",
        },
      },
      boxShadow: {
        halo4xl: "0px -50px 350px 350px rgba(255, 255, 255, 0.2);",
        halo3xl: "0px -70px 250px 250px rgba(255, 255, 255, 0.2);",
        halo2xl: "0px 0px 200px 200px rgba(255, 255, 255, 0.2);",
        haloxl: "0px 0px 150px 150px rgba(255, 255, 255, 0.2);",
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0,  0px)" },
          "50%": { transform: "translate(0, 15px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
        floatReverse: {
          "0%": { transform: "translate(0,  15px)" },
          "50%": { transform: "translate(0, -0px)" },
          "100%": { transform: "translate(0, 15px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        floatReverse: "floatReverse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
