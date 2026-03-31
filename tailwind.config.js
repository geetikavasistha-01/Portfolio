/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-container": "#282a2a",
        "tertiary-container": "#909191",
        "on-primary-fixed-variant": "#8e140c",
        "on-error": "#690005",
        "inverse-surface": "#e5e2e1",
        "on-secondary": "#372f22",
        "tertiary-fixed": "#e2e2e2",
        "inverse-primary": "#b02e22",
        "on-secondary-fixed": "#221a0e",
        "inverse-on-surface": "#303030",
        "on-tertiary": "#2f3131",
        "surface-container-high": "#2a2a2a",
        "primary-fixed": "#ffdad5",
        "surface-tint": "#ffb4a8",
        "surface-bright": "#393939",
        "secondary-fixed": "#efe0cc",
        "surface": "#131313",
        "secondary": "#d3c5b1",
        "on-primary-fixed": "#410000",
        "surface-dim": "#131313",
        "on-background": "#e5e2e1",
        "on-surface": "#e5e2e1",
        "primary-fixed-dim": "#ffb4a8",
        "on-secondary-container": "#c4b6a4",
        "on-primary-container": "#5c0001",
        "primary": "#ffb4a8",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-highest": "#353535",
        "outline": "#a88a85",
        "surface-container": "#202020",
        "on-primary": "#690001",
        "on-error-container": "#ffdad6",
        "background": "#131313",
        "error": "#ffb4ab",
        "secondary-container": "#514839",
        "on-secondary-fixed-variant": "#4f4537",
        "tertiary-fixed-dim": "#c6c6c7",
        "on-tertiary-fixed": "#1a1c1c",
        "tertiary": "#c6c6c7",
        "surface-container-low": "#1b1c1c",
        "surface-variant": "#353535",
        "primary-container": "#f4604d",
        "on-surface-variant": "#e1bfb9",
        "error-container": "#93000a",
        "on-tertiary-fixed-variant": "#454747",
        "outline-variant": "#59413d",
        "secondary-fixed-dim": "#d3c5b1"
      },
      fontFamily: {
        "headline": ["Newsreader", "Playfair Display", "serif"],
        "body": ["Space Grotesk", "Lora", "sans-serif"],
        "label": ["Space Grotesk", "IBM Plex Mono", "monospace"],
        "hand": ["Gochi Hand", "Caveat", "cursive"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem", 
        "lg": "0.25rem", 
        "xl": "0.5rem", 
        "full": "0.75rem"
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
