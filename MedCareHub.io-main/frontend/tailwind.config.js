/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#03e488"
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))'
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'fade-in-delay': 'fadeInUp 0.6s ease-out 0.2s forwards',
        'fade-in-delay-2': 'fadeInUp 0.6s ease-out 0.4s forwards',
        'fade-in-delay-3': 'fadeInUp 0.6s ease-out 0.6s forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-up': 'slideInUp 0.6s ease-out forwards',
        'bounce-in': 'bounceIn 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'float-delay': 'float 3s ease-in-out 1.5s infinite',
        'slide-window': 'slideWindow 2s ease-in-out infinite',
        'slide-window-reverse': 'slideWindowReverse 2s ease-in-out infinite',
        'moving-object': 'movingObject 4s linear infinite',
        'moving-object-reverse': 'movingObjectReverse 4s linear infinite',
        'text-slide': 'textSlide 3s ease-in-out infinite',
        'text-typing': 'textTyping 3s steps(40, end) infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'rotate-fast': 'rotateFast 8s linear infinite',
        'scale-bounce': 'scaleBounce 2s ease-in-out infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'wave-delay-1': 'wave 2s ease-in-out 0.1s infinite',
        'wave-delay-2': 'wave 2s ease-in-out 0.2s infinite',
        'wave-delay-3': 'wave 2s ease-in-out 0.3s infinite',
        'wave-delay-4': 'wave 2s ease-in-out 0.4s infinite',
        'slide-up-down': 'slideUpDown 3s ease-in-out infinite',
        'slide-left-right': 'slideLeftRight 4s ease-in-out infinite',
        'morph': 'morph 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-rotate': 'bounceRotate 3s ease-in-out infinite',
        'slide-scale': 'slideScale 4s ease-in-out infinite',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        slideInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        bounceIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)'
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)'
          },
          '70%': {
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        slideWindow: {
          '0%, 100%': {
            transform: 'translateX(-100%)'
          },
          '50%': {
            transform: 'translateX(100%)'
          }
        },
        slideWindowReverse: {
          '0%, 100%': {
            transform: 'translateX(100%)'
          },
          '50%': {
            transform: 'translateX(-100%)'
          }
        },
        movingObject: {
          '0%': {
            transform: 'translateX(-100px) rotate(0deg)'
          },
          '50%': {
            transform: 'translateX(100px) rotate(180deg)'
          },
          '100%': {
            transform: 'translateX(-100px) rotate(360deg)'
          }
        },
        movingObjectReverse: {
          '0%': {
            transform: 'translateX(100px) rotate(0deg)'
          },
          '50%': {
            transform: 'translateX(-100px) rotate(-180deg)'
          },
          '100%': {
            transform: 'translateX(100px) rotate(-360deg)'
          }
        },
        textSlide: {
          '0%, 100%': {
            transform: 'translateX(0)'
          },
          '25%': {
            transform: 'translateX(-10px)'
          },
          '75%': {
            transform: 'translateX(10px)'
          }
        },
        textTyping: {
          '0%': {
            width: '0'
          },
          '50%': {
            width: '100%'
          },
          '100%': {
            width: '0'
          }
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(3, 228, 136, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(3, 228, 136, 0.6)'
          }
        },
        pulseSlow: {
          '0%, 100%': {
            opacity: '0.5'
          },
          '50%': {
            opacity: '1'
          }
        },
        rotateSlow: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        rotateFast: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        scaleBounce: {
          '0%, 100%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.1)'
          }
        },
        wave: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-15px)'
          }
        },
        slideUpDown: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-20px)'
          }
        },
        slideLeftRight: {
          '0%, 100%': {
            transform: 'translateX(0)'
          },
          '50%': {
            transform: 'translateX(20px)'
          }
        },
        morph: {
          '0%, 100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'
          }
        },
        glowPulse: {
          '0%, 100%': {
            filter: 'brightness(1) drop-shadow(0 0 5px rgba(3, 228, 136, 0.3))'
          },
          '50%': {
            filter: 'brightness(1.2) drop-shadow(0 0 20px rgba(3, 228, 136, 0.6))'
          }
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0'
          },
          '100%': {
            backgroundPosition: '200% 0'
          }
        },
        bounceRotate: {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)'
          },
          '25%': {
            transform: 'translateY(-10px) rotate(90deg)'
          },
          '50%': {
            transform: 'translateY(0) rotate(180deg)'
          },
          '75%': {
            transform: 'translateY(-10px) rotate(270deg)'
          }
        },
        slideScale: {
          '0%, 100%': {
            transform: 'translateX(0) scale(1)'
          },
          '25%': {
            transform: 'translateX(20px) scale(1.1)'
          },
          '50%': {
            transform: 'translateX(0) scale(0.9)'
          },
          '75%': {
            transform: 'translateX(-20px) scale(1.1)'
          }
        },
        countUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}