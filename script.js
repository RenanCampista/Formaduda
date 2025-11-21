// Smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {

    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all video cards
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        observer.observe(card);
    });

    // Add click effect to cards
    videoCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('iframe')) {
                this.querySelector('iframe').focus();
            }
        });
    });

    // Create floating hearts animation
    createFloatingHearts();
});

function createFloatingHearts() {
    const hero = document.querySelector('.hero');
    const hearts = ['💜', '💛', '🎓', '⭐', '🌟'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.fontSize = (Math.random() * 1 + 1.5) + 'rem';
        
        hero.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 3000);
}

// Add CSS for floating hearts dynamically
const style = document.createElement('style');
style.textContent = `
    .floating-heart {
        position: absolute;
        bottom: 0;
        animation: floatUp 7s ease-in forwards;
        pointer-events: none;
        opacity: 0;
        z-index: 1;
    }

    @keyframes floatUp {
        0% {
            bottom: 0;
            opacity: 0;
            transform: translateX(0) rotate(0deg);
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            bottom: 100%;
            opacity: 0;
            transform: translateX(${Math.random() > 0.5 ? '' : '-'}50px) rotate(${Math.random() * 360}deg);
        }
    }
`;
document.head.appendChild(style);
