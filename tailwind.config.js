module.exports = {
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
  content: ["./_site/**/*.{md,njk,sass}"],
};
