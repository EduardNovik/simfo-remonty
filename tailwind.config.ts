import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/theme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    // single component styles
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    "./node_modules/@nextui-org/theme/dist/components/switch.js",

    // or you can use a glob pattern (multiple component styles)
    "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
  ],
  prefix: "",
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate"), nextui()],
} satisfies Config;

export default config;
