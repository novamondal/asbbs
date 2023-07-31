/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'text':'#ffffff',
        'primary': '#393960',
        'secondary': '#1d1d30',
        'accent': '#7676a2', 
        'background': '#27272a'
      },
      keyframes: {
        'fadeInUp': {
          '0%' : { opacity: '0', transform: 'translateY(10%)' },
          '100%' : { opacity: '1', transform: 'translateY(0)' }
        },
      },
      animation: {
        'fadeInUp-50': 'fadeInUp 50ms ease-in-out',
        'fadeInUp-100': 'fadeInUp 100ms ease-in-out',
        'fadeInUp-300': 'fadeInUp 300ms ease-in-out',
        'fadeInUp-500': 'fadeInUp 500ms ease-in-out',
        'fadeInUp-700': 'fadeInUp 700ms ease-in-out',
        'fadeInUp-1000': 'fadeInUp 1000ms ease-in-out',
      },
    },
  },
  plugins: [],
}

