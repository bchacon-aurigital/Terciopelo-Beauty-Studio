/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brownBtn: "#E49539",
        purpleBtn: "#B880B580",
      },
      backgroundImage: {
        brownGradient: "linear-gradient(274.24deg, #B880B5 0%, #E49539 61.9%)",
      },
      fontFamily: {
        levaus: ["Levaus", "sans-serif"],
        afacad: ["Afacud", "sans-serif"],
      },
    },
  },
  plugins: [],
};
