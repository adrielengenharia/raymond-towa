import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Raymond Towa Brand Palette
        gold: {
          DEFAULT: "#B59410",
          light: "#D4AF37",
          muted: "#B59410",
          pale: "#F5ECC7",
          50: "#FDFBF0",
          100: "#F9F3D0",
          200: "#F0E08A",
          300: "#D4AF37",
          400: "#C4A020",
          500: "#B59410",
          600: "#9A7D0A",
          700: "#7D6508",
          800: "#5E4C06",
          900: "#3D3104",
        },
        graphite: {
          DEFAULT: "#111827",
          soft: "#1F2937",
          medium: "#374151",
          muted: "#4B5563",
          light: "#6B7280",
          pale: "#9CA3AF",
        },
        cream: {
          DEFAULT: "#F9FAFB",
          warm: "#F5F5F0",
          off: "#FAFAF8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "scroll-left": "scrollLeft 40s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(181,148,16,0.3), 0 0 40px rgba(181,148,16,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(181,148,16,0.5), 0 0 80px rgba(181,148,16,0.2)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #B59410 0%, #D4AF37 50%, #B59410 100%)",
        "subtle-grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "gold-sm": "0 2px 8px rgba(181,148,16,0.15)",
        "gold-md": "0 4px 24px rgba(181,148,16,0.2)",
        "gold-lg": "0 8px 48px rgba(181,148,16,0.25)",
        "gold-glow": "0 0 30px rgba(181,148,16,0.4)",
        "card": "0 1px 3px rgba(17,24,39,0.04), 0 8px 32px rgba(17,24,39,0.06)",
        "card-hover": "0 4px 16px rgba(17,24,39,0.08), 0 24px 64px rgba(17,24,39,0.1)",
        "luxury": "0 20px 60px rgba(17,24,39,0.12), 0 4px 16px rgba(17,24,39,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
