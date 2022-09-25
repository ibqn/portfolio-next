module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.js",
};
