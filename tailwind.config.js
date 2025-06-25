/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    screens: {
      '2xl': { 'min': '1921px' },
      // => @media (min-width: 1536px) { ... }

      'xl': { 'min': '1440px', 'max': '1920px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      'lg': { 'min': '1024px', 'max': '1449px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'md': { 'min': '768px', 'max': '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'sm': { 'min': '640px', 'max': '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'xs': { 'min': '300px', 'max': '639px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

    },
    container: {
      center: true,
      xs: '320px',
    },
    extend: {
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      },
      fontFamily: {
        'sans': ['var(--font-primary)', 'sans-serif'],
        'secondary': ['var(--font-sfprodisplay)', 'sans-serif'],
      },
      backgroundPosition: {
        bottom: 'bottom',
        'bottom-4': 'center bottom 1rem',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
        'top-4': 'center top 1rem',
        positioncustom: 'position-custom',
        'custom1': '100% 100%',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'website-design-company': "url('/assets/images/banner/custom-web.webp')",
        'second-section-2': "url('/assets/images/excep-service-bg.jpg')",
        'CTA': "url('/assets/images/newimg/cta-bg.jpg')",
        'process-bg': "url('/assets/images/newimg/process-bg.jpg')",
        'process-bg22': "url('/assets/images/newimg/editing-before.png')",
        'bg-cta2': "url('/assets/images/newimg/amazing-bg.jpg')",
        'footer-bg': "url('/assets/images/newimg/footer-bg.jpg')",
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
