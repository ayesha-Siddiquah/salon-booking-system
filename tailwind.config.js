
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        greatvibes: ['Great Vibes', 'cursive'], // Add the custom font
      },
      colors: {
        customPurple: '#5A3376', // Purple colour text for hero page(On Home page) 
      },
      


      // spacing: {
      //   '15': '3.75rem', // Add mt-15, you can adjust the value as needed
      // },
    },
  },
  plugins: [],
};


















// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",  // Include the main HTML file
//     "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in the src folder
// ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

