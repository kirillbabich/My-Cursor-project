// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual form handling)
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        });
    }
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Position notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        maxWidth: '400px',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease'
    });
    
    // Set notification color based on type
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #f44336, #da190b)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    }
    
    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        hideNotification(notification);
    });
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
}

function hideNotification(notification) {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Gallery Lightbox Effect
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('.gallery-img');
            const caption = this.querySelector('.gallery-overlay p').textContent;
            openLightbox(img.src, caption);
        });
    });
});

function openLightbox(imageSrc, caption) {
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="${imageSrc}" alt="${caption}" class="lightbox-img">
            <div class="lightbox-caption">${caption}</div>
        </div>
    `;
    
    // Style lightbox
    Object.assign(lightbox.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '10000',
        opacity: '0',
        transition: 'opacity 0.3s ease'
    });
    
    const content = lightbox.querySelector('.lightbox-content');
    Object.assign(content.style, {
        position: 'relative',
        maxWidth: '90%',
        maxHeight: '90%',
        textAlign: 'center'
    });
    
    const img = lightbox.querySelector('.lightbox-img');
    Object.assign(img.style, {
        maxWidth: '100%',
        maxHeight: '80vh',
        objectFit: 'contain',
        borderRadius: '10px'
    });
    
    const closeBtn = lightbox.querySelector('.lightbox-close');
    Object.assign(closeBtn.style, {
        position: 'absolute',
        top: '10px',
        right: '25px',
        color: 'white',
        fontSize: '35px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'color 0.3s ease'
    });
    
    const captionEl = lightbox.querySelector('.lightbox-caption');
    Object.assign(captionEl.style, {
        color: 'white',
        fontSize: '1.2rem',
        marginTop: '1rem',
        padding: '0 2rem'
    });
    
    // Add to DOM and show
    document.body.appendChild(lightbox);
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);
    
    // Close functionality
    function closeLightbox() {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(lightbox);
        }, 300);
    }
    
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

// Intersection Observer for Animations
if ('IntersectionObserver' in window) {
    const animateElements = document.querySelectorAll('.gallery-item, .blog-card, .stat, .contact-item');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Type Writer Effect for Hero Title
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        const highlightText = heroTitle.querySelector('.highlight');
        
        if (highlightText) {
            const beforeText = text.split(highlightText.textContent)[0];
            const highlightedText = highlightText.textContent;
            const afterText = text.split(highlightText.textContent)[1];
            
            heroTitle.innerHTML = beforeText;
            
            let i = 0;
            const typeWriter = () => {
                if (i < highlightedText.length) {
                    if (i === 0) {
                        heroTitle.innerHTML = beforeText + '<span class="highlight"></span>' + afterText;
                    }
                    const highlightSpan = heroTitle.querySelector('.highlight');
                    highlightSpan.textContent = highlightedText.slice(0, i + 1);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            setTimeout(typeWriter, 1000);
        }
    }
});

// Skill Tags Animation
document.addEventListener('DOMContentLoaded', function() {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        tag.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});

// Social Links Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-3px) scale(1)';
        });
    });
});

// Scroll Progress Indicator
document.addEventListener('DOMContentLoaded', function() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    Object.assign(progressBar.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '0%',
        height: '3px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        zIndex: '10001',
        transition: 'width 0.1s ease'
    });
    
    document.body.appendChild(progressBar);
    
    // Update progress on scroll
    window.addEventListener('scroll', function() {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
});

// Rotating Gallery
class RotatingGallery {
    constructor() {
        this.galleryTrack = document.getElementById('galleryTrack');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.indicatorsContainer = document.getElementById('galleryIndicators');
        
        // Gallery configuration
        this.images = [
            { src: 'images/gallery/photo1.jpg', alt: 'Death Valley', caption: 'Death Valley' },
            { src: 'images/gallery/photo2.jpg', alt: 'Shanghai Wharton trip', caption: 'Shanghai Wharton trip' },
            { src: 'images/gallery/photo3.jpg', alt: 'China Xiaomi HQ', caption: 'China Xiaomi HQ' },
            { src: 'images/gallery/photo4.jpg', alt: 'Great Wall', caption: 'Great Wall' },
            { src: 'images/gallery/photo5.jpg', alt: 'Italy trip', caption: 'Italy trip' },
            { src: 'images/gallery/photo6.jpg', alt: 'Skiing at Palisades', caption: 'Skiing at Palisades' },
            { src: 'images/gallery/photo7.jpg', alt: 'Family trip to Mexico', caption: 'Family trip to Mexico' },
            { src: 'images/gallery/photo8.jpg', alt: 'Great moments with Stu West', caption: 'Great moments with Stu West' },
            { src: 'images/gallery/photo9.jpg', alt: 'Grammarly team', caption: 'Grammarly team' }
        ];
        
        this.currentIndex = 0;
        this.isPlaying = true;
        this.rotationInterval = null;
        this.rotationSpeed = 2000; // 2 seconds
        this.visibleItems = this.getVisibleItems();
        
        this.init();
    }
    
    getVisibleItems() {
        const width = window.innerWidth;
        if (width <= 480) return 1;
        if (width <= 768) return 2;
        return 4;
    }
    
    init() {
        if (!this.galleryTrack) {
            console.log('Gallery track element not found');
            return;
        }
        
        console.log('Initializing rotating gallery with', this.images.length, 'images');
        this.createGalleryItems();
        this.createIndicators();
        this.setupEventListeners();
        this.startRotation();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            const newVisibleItems = this.getVisibleItems();
            if (newVisibleItems !== this.visibleItems) {
                this.visibleItems = newVisibleItems;
                this.updateGalleryLayout();
            }
        });
    }
    
    createGalleryItems() {
        this.galleryTrack.innerHTML = '';
        
        // Create enough items for smooth rotation (visible items + buffer)
        const totalItems = this.images.length + this.visibleItems;
        
        for (let i = 0; i < totalItems; i++) {
            const imageIndex = i % this.images.length;
            const image = this.images[imageIndex];
            
            const item = document.createElement('div');
            item.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.className = 'gallery-img';
            img.loading = 'lazy';
            
            // Add error handling for missing images
            img.onerror = function() {
                console.log('Failed to load image:', image.src);
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjhGOUZBIi8+CjxwYXRoIGQ9Ik0yNzUgMTc1SDE3NVYyMjVIMjc1VjE3NVoiIGZpbGw9IiNEREREREQiLz4KPHA+SW1hZ2UgTm90IEZvdW5kPC9wPgo8L3N2Zz4=';
                this.alt = 'Image not found: ' + image.alt;
            };
            
            img.onload = function() {
                console.log('Successfully loaded image:', image.src);
            };
            
            item.innerHTML = `
                <div class="gallery-overlay">
                    <p>${image.caption}</p>
                </div>
            `;
            
            item.insertBefore(img, item.firstChild);
            
            // Add click handler for lightbox
            item.addEventListener('click', () => {
                this.openLightbox(image.src, image.caption);
            });
            
            this.galleryTrack.appendChild(item);
        }
        
        // Set initial width
        this.updateGalleryLayout();
    }
    
    updateGalleryLayout() {
        const items = this.galleryTrack.querySelectorAll('.gallery-item');
        items.forEach(item => {
            item.style.flex = `0 0 ${100 / this.visibleItems}%`;
        });
    }
    
    createIndicators() {
        if (!this.indicatorsContainer) return;
        
        this.indicatorsContainer.innerHTML = '';
        
        for (let i = 0; i < this.images.length; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'gallery-indicator';
            if (i === 0) indicator.classList.add('active');
            
            indicator.addEventListener('click', () => {
                this.goToSlide(i);
            });
            
            this.indicatorsContainer.appendChild(indicator);
        }
    }
    
    setupEventListeners() {
        if (this.pauseBtn) {
            this.pauseBtn.addEventListener('click', () => {
                this.togglePlayPause();
            });
        }
        
        // Pause on hover
        if (this.galleryTrack) {
            this.galleryTrack.addEventListener('mouseenter', () => {
                if (this.isPlaying) this.pauseRotation();
            });
            
            this.galleryTrack.addEventListener('mouseleave', () => {
                if (this.isPlaying) this.startRotation();
            });
        }
    }
    
    startRotation() {
        if (this.rotationInterval) return;
        
        this.rotationInterval = setInterval(() => {
            this.nextSlide();
        }, this.rotationSpeed);
    }
    
    pauseRotation() {
        if (this.rotationInterval) {
            clearInterval(this.rotationInterval);
            this.rotationInterval = null;
        }
    }
    
    togglePlayPause() {
        this.isPlaying = !this.isPlaying;
        
        if (this.isPlaying) {
            this.startRotation();
            this.pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            this.pauseRotation();
            this.pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    }
    
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateGallery();
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateGallery();
    }
    
    updateGallery() {
        const translateX = -(this.currentIndex * (100 / this.visibleItems));
        this.galleryTrack.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        const indicators = this.indicatorsContainer.querySelectorAll('.gallery-indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
        
        // Handle infinite loop
        if (this.currentIndex >= this.images.length - this.visibleItems) {
            setTimeout(() => {
                this.galleryTrack.style.transition = 'none';
                this.currentIndex = 0;
                this.galleryTrack.style.transform = 'translateX(0%)';
                
                setTimeout(() => {
                    this.galleryTrack.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                }, 50);
            }, 800);
        }
    }
    
    openLightbox(imageSrc, caption) {
        // Reuse existing lightbox function
        if (typeof openLightbox === 'function') {
            openLightbox(imageSrc, caption);
        }
    }
}

// Initialize rotating gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing gallery...');
    try {
        const gallery = new RotatingGallery();
        console.log('Gallery initialized successfully:', gallery);
    } catch (error) {
        console.error('Error initializing gallery:', error);
    }
});

// Fallback initialization in case DOMContentLoaded already fired
if (document.readyState === 'loading') {
    console.log('Document still loading, waiting for DOMContentLoaded...');
} else {
    console.log('Document already loaded, initializing gallery immediately...');
    try {
        const gallery = new RotatingGallery();
        console.log('Gallery initialized successfully (fallback):', gallery);
    } catch (error) {
        console.error('Error initializing gallery (fallback):', error);
    }
}

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}


