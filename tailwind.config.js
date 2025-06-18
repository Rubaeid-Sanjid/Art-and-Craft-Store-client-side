// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-100': '#ffffff', // Your custom color for base-100
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#ffffff",  // Custom background color for bg-base-100
          "base-200": "#f4f4f4",  // Optional: Custom background for bg-base-200
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}