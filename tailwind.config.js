/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'brand': '#5E0061',
        'white-faded': 'rgba(255, 255, 255, 0.5);'
      },
      boxShadow: {
        'outer-bold': 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;'
      },
      keyframes:{
        expand: {'0%': {height: '0px'},'100%':{height: 'fit-content'}}
      },
      animation:{
        'expand': 'expand .2s ease-in-out'
      }
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
