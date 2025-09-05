module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'quantum-black': '#0a0f1a',
        'tech-blue': '#1e3a8a',
        'aqua-glow': '#00c4cc',
        'violet-pulse': '#6a0dad',
        'silver-text': '#d9e6f2',
        'energy-aura': '#00aaff',
        'neon-cyan': '#00ffff',
        'neon-violet': '#8a2be2',
        'neon-lime': '#32cd32',
        'quantum-purple': '#6366f1',
        'quantum-green': '#10b981',
        'quantum-orange': '#f59e0b',
        'quantum-pink': '#ec4899',
      },
      animation: {
        'qubit-flow': 'qubit-flow 5s linear infinite',
        'superposition-merge': 'superposition-merge 3s ease-in-out infinite',
        'entangle-link': 'entangle-link 4s ease-in-out infinite',
        'encryption-wave': 'encryption-wave 2.5s ease-in-out infinite',
        'channel-pulse': 'channel-pulse 2s ease-in-out infinite',
        'quantum-glow': 'quantum-glow 3s ease-in-out infinite',
        'particle-float': 'particle-float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'data-flow': 'data-flow 3s linear infinite',
        'quantum-spin': 'quantum-spin 8s linear infinite',
        'wave-effect': 'wave-effect 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'bounce-slow': 'bounce 3s infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'rotate-in': 'rotate-in 0.6s ease-out',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
        'energy-wave': 'energy-wave 3s ease-in-out infinite',
        'quantum-tunnel': 'quantum-tunnel 6s ease-in-out infinite',
        'data-stream': 'data-stream 2s linear infinite',
        'security-scan': 'security-scan 3s ease-in-out infinite',
        'encryption-lock': 'encryption-lock 2.5s ease-in-out infinite',
        'transmission-beam': 'transmission-beam 4s linear infinite',
      },
      keyframes: {
        'qubit-flow': {
          '0%': { transform: 'translateX(-100%) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'translateX(0%) rotate(180deg)', opacity: '1' },
          '100%': { transform: 'translateX(100%) rotate(360deg)', opacity: '0' },
        },
        'superposition-merge': {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.8' },
          '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '1' },
        },
        'entangle-link': {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '50%': { transform: 'scaleX(1)', opacity: '1' },
          '100%': { transform: 'scaleX(0)', opacity: '0' },
        },
        'encryption-wave': {
          '0%, 100%': { transform: 'translateY(0px)', opacity: '0.5' },
          '50%': { transform: 'translateY(-10px)', opacity: '1' },
        },
        'channel-pulse': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 20px rgba(0, 196, 204, 0.3)' },
          '50%': { transform: 'scale(1.1)', boxShadow: '0 0 40px rgba(0, 196, 204, 0.6)' },
        },
        'quantum-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
          },
        },
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'data-flow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'quantum-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'wave-effect': {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(1.2)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'rotate-in': {
          '0%': { transform: 'rotate(-180deg)', opacity: '0' },
          '100%': { transform: 'rotate(0deg)', opacity: '1' },
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.5)',
          },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'hologram': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotateX(0deg)',
            filter: 'hue-rotate(0deg)',
          },
          '25%': { 
            transform: 'translateY(-5px) rotateX(5deg)',
            filter: 'hue-rotate(90deg)',
          },
          '50%': { 
            transform: 'translateY(-10px) rotateX(0deg)',
            filter: 'hue-rotate(180deg)',
          },
          '75%': { 
            transform: 'translateY(-5px) rotateX(-5deg)',
            filter: 'hue-rotate(270deg)',
          },
        },
        'energy-wave': {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '50%': { transform: 'scaleX(1)', opacity: '1' },
          '100%': { transform: 'scaleX(0)', opacity: '0' },
        },
        'quantum-tunnel': {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: '0.8' },
          '50%': { transform: 'scale(1.5) rotate(180deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(360deg)', opacity: '0.8' },
        },
        'data-stream': {
          '0%': { transform: 'translateX(-100%) scaleX(0)' },
          '50%': { transform: 'translateX(0%) scaleX(1)' },
          '100%': { transform: 'translateX(100%) scaleX(0)' },
        },
        'security-scan': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { transform: 'translateX(0%)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        'encryption-lock': {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.8' },
          '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '1' },
        },
        'transmission-beam': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      backgroundImage: {
        'quantum-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)',
        'neon-gradient': 'linear-gradient(45deg, #00ffff, #8a2be2, #32cd32)',
        'energy-gradient': 'linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981)',
        'hologram-gradient': 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(16, 185, 129, 0.1))',
        'matrix-pattern': 'radial-gradient(circle at 20% 20%, rgba(0, 255, 0, 0.1) 0%, transparent 50%)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        'quantum': '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)',
        'neon': '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(138, 43, 226, 0.3)',
        'energy': '0 0 15px rgba(16, 185, 129, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)',
        'hologram': '0 0 25px rgba(59, 130, 246, 0.6), 0 0 50px rgba(139, 92, 246, 0.4)',
        'glow': '0 0 30px rgba(255, 255, 255, 0.1)',
        'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.2)',
      },
      fontFamily: {
        'quantum': ['Orbitron', 'monospace'],
        'cyber': ['Rajdhani', 'sans-serif'],
        'matrix': ['Courier New', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}