/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'luxury-gold': '#D4AF37',
        'luxury-gold-light': '#F4E8B8',
        'luxury-gold-dark': '#B8941F',
        'luxury-black': '#0A0A0A',
        'luxury-gray': '#1A1A1A',
        'luxury-gray-light': '#2A2A2A',
        'luxury-white': '#FEFEFE',
        'luxury-cream': '#F8F6F0',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1' }],
        'hero-lg': ['5rem', { lineHeight: '1.1' }],
        'display': ['3rem', { lineHeight: '1.2' }],
        'display-lg': ['3.5rem', { lineHeight: '1.2' }],
      },
      letterSpacing: {
        'luxury': '-0.02em',
        'wide-luxury': '0.05em',
      },
      backdropBlur: {
        'luxury': '12px',
        'luxury-lg': '24px',
      },
      boxShadow: {
        'luxury': '0 20px 40px -20px rgba(0, 0, 0, 0.3)',
        'luxury-gold': '0 20px 40px -20px rgba(212, 175, 55, 0.3)',
        'luxury-inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(212, 175, 55, 0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};