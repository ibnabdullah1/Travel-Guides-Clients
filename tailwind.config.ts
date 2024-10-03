import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
        questrial: "Questrial",
        roboto: "Roboto",
      },
      colors: {
        primary: "#69B64C",
        secondary: "#333333",
      },
    },
  },
  plugins: [],
};
export default config;
