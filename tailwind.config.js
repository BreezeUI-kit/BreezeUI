// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#14B8A6',
        secondary: '#2563EB',
        'neutral-50': '#F9FAFB',
        'neutral-200': '#E5E7EB',
        'neutral-700': '#374151',
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B'
      }
    }
  },
  plugins: []
}