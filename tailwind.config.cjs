/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "font-family": "Cormorant Garamond",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
