import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Đồng bộ với lib/core/constants/app_colors.dart của Anam
        zen: {
          bg: '#0F141C',
          void: '#0A0E14',
          surface: '#181F2C',
          light: '#222B3D',
          glass: 'rgba(24, 31, 44, 0.7)',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.12)',
          sage: '#2A9D8F',
          emerald: '#48B6A7',
          teal: '#3AAFA9',
          mint: '#74C69D',
          dark: '#0F141C',
          amber: '#F4A261',
          ochre: '#F4A261',
          warm: '#E58062',
          ember: '#E76F51',
          gold: '#FFD166',
          cream: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#64748B',
        },
        // Màu định danh 5 Mạch (ZenTheme.getCircuitColor)
        mach: {
          1: '#2A9D8F',
          2: '#E58062',
          3: '#FFD166',
          4: '#E76F51',
          5: '#48B6A7',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Lora', 'Merriweather', 'Georgia', 'serif'],
      },
      animation: {
        'aura-breathe': 'auraBreathe 10s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 14s ease-in-out infinite',
      },
      keyframes: {
        auraBreathe: {
          '0%, 100%': { transform: 'scale(0.96)', opacity: '0.6', filter: 'blur(90px)' },
          '50%': { transform: 'scale(1.22)', opacity: '0.95', filter: 'blur(120px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      typography: {
        zen: {
          css: {
            '--tw-prose-body': '#CBD5E1',
            '--tw-prose-headings': '#F8FAFC',
            '--tw-prose-lead': '#94A3B8',
            '--tw-prose-links': '#48B6A7',
            '--tw-prose-bold': '#FFFFFF',
            '--tw-prose-counters': '#64748B',
            '--tw-prose-bullets': '#2A9D8F',
            '--tw-prose-hr': 'rgba(255, 255, 255, 0.08)',
            '--tw-prose-quotes': '#E2E8F0',
            '--tw-prose-quote-borders': '#2A9D8F',
            '--tw-prose-captions': '#94A3B8',
            '--tw-prose-code': '#E2E8F0',
            '--tw-prose-pre-code': '#E2E8F0',
            '--tw-prose-pre-bg': '#0D131D',
            '--tw-prose-th-borders': 'rgba(255, 255, 255, 0.1)',
            '--tw-prose-td-borders': 'rgba(255, 255, 255, 0.06)',
          },
        },
      },
    },
  },
  plugins: [typography],
};
