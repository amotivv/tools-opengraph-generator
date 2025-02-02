/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#4D7EFF',
        secondary: '#111111',
        'off-white': '#F8F8F8',
        'light-gray': '#E5E5E5',
        'dark-gray': '#333333',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'IBM Plex Mono Fallback', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        'display': ['64px', '72px'],
        'heading': ['48px', '56px'],
        'base': ['16px', '24px'],
        'small': ['14px', '20px'],
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
      },
    },
  },
  plugins: [],
}