/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing : {
        'sm' : '1rem',
        'md' : '2.43rem',
      }
    },
  },
  plugins: [
    function({ addComponents }) {
      const text = {
          '.labelText': {
              fontSize: '1rem',
              color: '#2A4144',
              lineHeight: '150%',
              marginBottom: '0.5rem'
          },

          '.inputSize' : {
              width: '100%',
              height: '3.18rem',
              borderRadius: '0.5rem',
              border: '1px solid #86A2A5',
              padding: '0.75rem 1.5rem'
          }
      }

      addComponents(text)
    }
    ],
}

