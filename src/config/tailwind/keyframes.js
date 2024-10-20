const keyframes = {
    // Keyframes pour une animation de fade-in (apparition progressive)
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    
    // Keyframes pour une animation de slide-in (apparition glissante vers la droite)
    slideInRight: {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(0)' },
    },
    
    // Keyframes pour une animation de rotation
    rotate360: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  
    // Keyframes pour un effet de rebond
    bounce: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-20px)' },
    },
  
    // Keyframes pour une animation de pulsation
    pulse: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' },
    },
  };

  module.exports = keyframes;