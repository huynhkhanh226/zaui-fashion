/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#3459A7",
        background: "#FFFFFF",
        foreground: "#0D0D0D",
        input: "#F7F7F8",
        inactive: "#A9ADB2",
        tabIndicator: "#212121",
        subtle: "#F7F7F8",
        subtitle: "#6F7071",
      },
      fontSize: {
        "3xs": ["11px", "16px"],
        "2xs": ["12px", "16px"],
        xs: ["13px", "18px"],
        sm: ["14px", "18px"],
        base: ["15px", "20px"],
        lg: ["16px", "22px"],
      },
    },
  },
};
