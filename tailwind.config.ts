import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Flat dark surfaces (no gradients). Values from the design system's dark palette.
        base: '#181818',
        surface: '#1F1F1F',
        raised: '#272727',
        line: '#313131',
        'line-strong': '#3D3D3D',
        ink: {
          DEFAULT: '#F5F5F5',
          2: '#A3A3A3',
          3: '#8A8A8A',
        },
        accent: {
          DEFAULT: '#F7CD6E',
          hover: '#FBDC94',
          ink: '#181818',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        rise: 'rise 500ms cubic-bezier(0.22, 1, 0.36, 1) both',
        fade: 'fade 300ms cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
