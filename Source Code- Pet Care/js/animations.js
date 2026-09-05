/* PAWSOME Animations Controller - Ultimate Interactive Elements */

class PAWSOMEAnimations {
  constructor() {
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.particles = [];
    this.init();
  }

  init() {
    if (this.isReducedMotion) return;
    
    this.setupScrollAnimations();
    this.setupParticleSystem();
    this.setupInteractiveElements();
    this.setupTextAnimations();
    this.setupHoverEffects();
    this.setupLoadingAnimation();
  }

  /* ===== SCROLL ANIMATIONS ===== */
  setupScrollAnimations() {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          
          // Handle stagger animations
          if (entry.target.classList.contains('stagger-children')) {
            this.animateStaggerChildren(entry.target);
          }
          
          // Unobserve after animation to improve performance
          scrollObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatableElements = document.querySelectorAll('.animate-on-scroll');
    animatableElements.forEach(el => scrollObserver.observe(el));
  }

  animateStaggerChildren(container) {
    const children = container.children;
    Array.from(children).forEach((child, index) => {
      setTimeout(() => {
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      }, index * 150); // 150ms delay between each child
    });
  }

  /* ===== PARTICLE SYSTEM ===== */
  setupParticleSystem() {
    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.id = 'particle-system';
    document.body.appendChild(particleContainer);

    // Create floating particles
    this.createFloatingParticles(particleContainer);
    
    // Mouse trail particles
    this.setupMouseTrailParticles();
  }

  createFloatingParticles(container) {
    const particleCount = window.innerWidth > 768 ? 15 : 8;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random positioning and size
      const size = Math.random() * 6 + 2;
      const left = Math.random() * 100;
      const animationDelay = Math.random() * 8;
      const animationDuration = Math.random() * 4 + 6;
      
      particle.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        animation-delay: ${animationDelay}s;
        animation-duration: ${animationDuration}s;
      `;
      
      container.appendChild(particle);
    }
  }

  setupMouseTrailParticles() {
    let mouseTrailTimeout;
    
    document.addEventListener('mousemove', (e) => {
      if (window.innerWidth <= 768) return; // Skip on mobile
      
      clearTimeout(mouseTrailTimeout);
      mouseTrailTimeout = setTimeout(() => {
        this.createMouseTrailParticle(e.clientX, e.clientY);
      }, 50);
    });
  }

  createMouseTrailParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 4px;
      height: 4px;
      background: #f09902;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      animation: mouseTrailFade 1s ease-out forwards;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 1000);
  }

  /* ===== INTERACTIVE ELEMENTS ===== */
  setupInteractiveElements() {
    // Button ripple effects
    this.setupButtonRipples();
    
    // Interactive cards
    this.setupInteractiveCards();
    
    // Form field animations
    this.setupFormAnimations();
    
    // Paw print click effects
    this.setupPawPrintEffects();
  }

  setupButtonRipples() {
    const buttons = document.querySelectorAll('.btn-ripple, .analyze-button, button');
    
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('div');
        ripple.style.cssText = `
          position: absolute;
          left: ${x}px;
          top: ${y}px;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: rippleEffect 0.6s ease-out;
          pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  setupInteractiveCards() {
    const cards = document.querySelectorAll('.interactive-card, .result-card, .bg-white');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) {
          card.style.transform = 'translateY(-10px) scale(1.02)';
          card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        }
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
      });
    });
  }

  setupFormAnimations() {
    const formFields = document.querySelectorAll('input, textarea');
    
    formFields.forEach(field => {
      field.addEventListener('focus', () => {
        field.parentElement.classList.add('form-field-focused');
        field.style.transform = 'translateY(-2px)';
      });
      
      field.addEventListener('blur', () => {
        field.parentElement.classList.remove('form-field-focused');
        field.style.transform = '';
      });
    });
  }

  setupPawPrintEffects() {
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        this.createPawPrint(e.clientX, e.clientY);
      }
    });
  }

  createPawPrint(x, y) {
    const pawPrint = document.createElement('div');
    pawPrint.innerHTML = '🐾';
    pawPrint.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      font-size: 20px;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%) scale(0) rotate(0deg);
      animation: pawPrintAppear 1s ease-out forwards;
    `;
    
    document.body.appendChild(pawPrint);
    
    setTimeout(() => {
      pawPrint.remove();
    }, 1000);
  }

  /* ===== TEXT ANIMATIONS ===== */
  setupTextAnimations() {
    // Typewriter effect for specific elements
    this.setupTypewriterEffect();
    
    // Gradient text animations
    this.setupGradientText();
    
    // Text reveal animations
    this.setupTextReveal();
  }

  setupTypewriterEffect() {
    const typewriterElements = document.querySelectorAll('.typewriter-effect');
    
    typewriterElements.forEach(element => {
      const text = element.textContent;
      element.textContent = '';
      element.style.borderRight = '2px solid #f09902';
      
      let index = 0;
      const typeSpeed = 100;
      
      const typeWriter = () => {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(typeWriter, typeSpeed);
        } else {
          // Blinking cursor
          setInterval(() => {
            element.style.borderRightColor = 
              element.style.borderRightColor === 'transparent' ? '#f09902' : 'transparent';
          }, 750);
        }
      };
      
      // Start typing when element is visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(typeWriter, 500);
            observer.unobserve(entry.target);
          }
        });
      });
      
      observer.observe(element);
    });
  }

  setupGradientText() {
    const gradientTexts = document.querySelectorAll('.gradient-text-animated');
    
    gradientTexts.forEach(text => {
      text.style.background = 'linear-gradient(45deg, #f09902, #993d15, #ff6b35, #f09902)';
      text.style.backgroundSize = '300% 300%';
      text.style.webkitBackgroundClip = 'text';
      text.style.backgroundClip = 'text';
      text.style.webkitTextFillColor = 'transparent';
      text.style.animation = 'gradientShift 3s ease-in-out infinite';
    });
  }

  setupTextReveal() {
    const revealTexts = document.querySelectorAll('.text-reveal');
    
    revealTexts.forEach(text => {
      const words = text.textContent.split(' ');
      text.innerHTML = words.map(word => `<span class="word-reveal">${word}</span>`).join(' ');
      
      const wordSpans = text.querySelectorAll('.word-reveal');
      wordSpans.forEach(span => {
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.transition = 'all 0.3s ease';
      });
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            wordSpans.forEach((span, index) => {
              setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      });
      
      observer.observe(text);
    });
  }

  /* ===== LOADING ANIMATION ===== */
  setupLoadingAnimation() {
    const loader = document.getElementById('app-loader');
    if (!loader) return;

    // Set 1 second loading time as requested
    const loadingDuration = 1000;
    
    // Animate progress bar
    const progressBar = loader.querySelector('.loader-bar-fill');
    const progressPercent = loader.querySelector('.loader-percent');
    
    if (progressBar && progressPercent) {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;
        progressPercent.textContent = `${progress}%`;
        
        if (progress >= 100) {
          clearInterval(interval);
          
          // Hide loader after animation
          setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
              loader.style.display = 'none';
              document.body.classList.add('loaded');
              
              // Trigger page animations
              this.triggerPageLoad();
            }, 300);
          }, 200);
        }
      }, loadingDuration / 10);
    }
  }

  triggerPageLoad() {
    // Add loaded class to trigger CSS animations
    document.documentElement.classList.add('page-loaded');
    
    // Trigger stagger animations for initial content
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 200);
    });
  }

  /* ===== HOVER EFFECTS ===== */
  setupHoverEffects() {
    // Enhanced hover effects for various elements
    const hoverElements = document.querySelectorAll('.hover-enhanced');
    
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) {
          this.addHoverGlow(element);
        }
      });
      
      element.addEventListener('mouseleave', () => {
        this.removeHoverGlow(element);
      });
    });
    
    // Logo hover animation
    const logo = document.querySelector('.nav-logo');
    if (logo) {
      logo.addEventListener('mouseenter', () => {
        logo.style.animation = 'petBounce 0.6s ease';
      });
      
      logo.addEventListener('animationend', () => {
        logo.style.animation = '';
      });
    }
  }

  addHoverGlow(element) {
    element.style.transition = 'all 0.3s ease';
    element.style.boxShadow = '0 0 20px rgba(240, 153, 2, 0.3)';
    element.style.transform = 'translateY(-5px) scale(1.02)';
  }

  removeHoverGlow(element) {
    element.style.boxShadow = '';
    element.style.transform = '';
  }

  /* ===== PERFORMANCE OPTIMIZATION ===== */
  destroy() {
    // Clean up event listeners and intervals
    const particleContainer = document.getElementById('particle-system');
    if (particleContainer) {
      particleContainer.remove();
    }
  }
}

// CSS for dynamic animations
const dynamicStyles = `
<style>
@keyframes rippleEffect {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
}

@keyframes mouseTrailFade {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
}

@keyframes pawPrintAppear {
  0% {
    transform: translate(-50%, -50%) scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2) rotate(5deg);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.8) rotate(10deg);
    opacity: 0;
  }
}

.hero-content > * {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.5s ease;
}

.page-loaded .fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

.form-field-focused {
  position: relative;
}

.form-field-focused::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #f09902, #993d15);
  animation: slideInWidth 0.3s ease;
}

@keyframes slideInWidth {
  from { width: 0; }
  to { width: 100%; }
}
</style>
`;

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Insert dynamic styles
  document.head.insertAdjacentHTML('beforeend', dynamicStyles);
  
  // Initialize animation system
  window.pawsomeAnimations = new PAWSOMEAnimations();
});

// Handle page unload
window.addEventListener('beforeunload', () => {
  if (window.pawsomeAnimations) {
    window.pawsomeAnimations.destroy();
  }
});
