/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'gt-ultralight': ['GT-Walsheim-UltraLight', 'sans-serif'],
        'gt-thin': ['GT-Walsheim-Thin', 'sans-serif'],
        'gt-light': ['GT-Walsheim-Light', 'sans-serif'],
        'gt-regular': ['GT-Walsheim-Regular', 'sans-serif'],
        'gt-medium': ['GT-Walsheim-Medium', 'sans-serif'],
        'gt-semibold': ['GT-Walsheim-SemiBold', 'sans-serif'],
        'gt-bold': ['GT-Walsheim-Bold', 'sans-serif'],
        'gt-ultrabold': ['GT-Walsheim-UltraBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
