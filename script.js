// ================================
// TYPEWRITER EFFECT
// ================================

function typeWriter(text, element, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typewriter on page load
window.addEventListener('load', () => {
    const typewriterElement = document.getElementById('typewriter');
    const message = "To the most amazing person in my life... Happy Birthday! 💚";
    
    setTimeout(() => {
        typeWriter(message, typewriterElement, 80);
    }, 1000);
});

// ================================
// FLOATING HEARTS ANIMATION
// ================================

function createFloatingHearts() {
    const heartsContainer = document.getElementById('heartsContainer');
    const hearts = ['💚', '💕', '💖', '💗', '💝', '💓'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }
    
    // Create hearts periodically
    setInterval(createHeart, 1000);
    
    // Create initial batch
    for (let i = 0; i < 5; i++) {
        setTimeout(createHeart, i * 500);
    }
}

// ================================
// CONFETTI ANIMATION
// ================================

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#F7DDE2', '#A8D5BA', '#D2B48C', '#DFF3E3', '#F5EEDC'];
    
    function createConfettiPiece() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
    
    // Create confetti pieces
    setInterval(createConfettiPiece, 300);
    
    // Initial batch
    for (let i = 0; i < 30; i++) {
        setTimeout(createConfettiPiece, i * 100);
    }
}

// ================================
// SCROLL ANIMATIONS
// ================================

function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// ================================
// SMOOTH SCROLLING
// ================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ================================
// SURPRISE BUTTON
// ================================

function initSurpriseButton() {
    const surpriseButton = document.getElementById('surpriseButton');
    const surpriseMessage = document.getElementById('surpriseMessage');
    
    if (surpriseButton && surpriseMessage) {
        surpriseButton.addEventListener('click', () => {
            surpriseMessage.classList.remove('hidden');
            surpriseMessage.style.animation = 'fadeInScale 0.6s ease-out';
            surpriseButton.style.display = 'none';
            
            // Create extra hearts on reveal
            createHeartBurst();
        });
    }
}

function createHeartBurst() {
    const heartsContainer = document.getElementById('heartsContainer');
    const hearts = ['💚', '💕', '💖', '💗'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = '4s';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            
            heartsContainer.appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }, i * 100);
    }
}

// ================================
// COUNTDOWN TIMER
// ================================

function initCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    // Set Pui's birthday: December 18, 2025, midnight
    const birthdayDate = new Date(2025, 11, 18, 0, 0, 0); // Month is 0-indexed (11 = December)
    
    let celebrationTriggered = false;
    
    function updateCountdown() {
        const now = new Date();
        const diff = birthdayDate - now;
        
        if (diff > 0) {
            // Countdown TO birthday
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            daysEl.textContent = String(days).padStart(2, '0');
            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');
        } else {
            // Birthday has arrived!
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            
            // Trigger celebration only once
            if (!celebrationTriggered) {
                celebrationTriggered = true;
                triggerBirthdayCelebration();
            }
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ================================
// BIRTHDAY CELEBRATION TRIGGER
// ================================

function triggerBirthdayCelebration() {
    const celebration = document.getElementById('birthdayCelebration');
    
    if (celebration) {
        // Show the celebration overlay
        celebration.classList.remove('hidden');
        
        // Create extra confetti and hearts
        createMassiveConfetti();
        createMassiveHeartBurst();
        
        // Auto-hide after 10 seconds (optional)
        setTimeout(() => {
            celebration.style.opacity = '0';
            celebration.style.transition = 'opacity 2s ease-out';
            setTimeout(() => {
                celebration.classList.add('hidden');
                celebration.style.opacity = '1';
            }, 2000);
        }, 10000);
    }
}

function createMassiveConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#F7DDE2', '#A8D5BA', '#D2B48C', '#DFF3E3', '#F5EEDC', '#FFD700', '#FF69B4'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 1 + 's';
            confetti.style.width = (Math.random() * 15 + 5) + 'px';
            confetti.style.height = (Math.random() * 15 + 5) + 'px';
            
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 8000);
        }, i * 50);
    }
}

function createMassiveHeartBurst() {
    const heartsContainer = document.getElementById('heartsContainer');
    const hearts = ['💚', '💕', '💖', '💗', '💝', '💓', '❤️', '🧡', '💛'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 5 + 3) + 's';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            
            heartsContainer.appendChild(heart);
            
            setTimeout(() => heart.remove(), 8000);
        }, i * 100);
    }
}


// ================================
// GALLERY HOVER EFFECTS
// ================================

function initGalleryEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// ================================
// TIMELINE CARD ANIMATIONS
// ================================

function initTimelineAnimations() {
    const timelineCards = document.querySelectorAll('.timeline-card');
    
    timelineCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
}

// ================================
// INITIALIZE ALL FUNCTIONS
// ================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    createFloatingHearts();
    createConfetti();
    initScrollAnimations();
    initSmoothScroll();
    initSurpriseButton();
    initCountdown();
    initGalleryEffects();
    initTimelineAnimations();
    
    console.log('🎉 Happy Birthday Pui! 💚');
});

// ================================
// ADDITIONAL PARTICLE EFFECTS
// ================================

// Add sparkle effect on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkleFloat 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
}

// Add sparkle animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-50px) scale(0.5);
        }
    }
`;
document.head.appendChild(style);
