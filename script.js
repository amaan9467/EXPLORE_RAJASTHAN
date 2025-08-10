// Smooth scrolling for navigation links
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

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Tours Section Video Slider
class ToursSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.tour-slide');
        this.dots = document.querySelectorAll('.tour-dots .dot');
        this.track = document.querySelector('.tours-track');
        this.prevBtn = document.querySelector('.tours-section .nav-prev');
        this.nextBtn = document.querySelector('.tours-section .nav-next');
        this.playPauseBtn = document.querySelector('.play-pause-btn');
        this.videos = document.querySelectorAll('.tour-video');
        
        this.isPlaying = true;
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    init() {
        if (!this.slides.length) return;
        
        // Set up initial state
        this.updateSlider();
        this.startAutoPlay();
        
        // Event listeners
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());
        this.playPauseBtn?.addEventListener('click', () => this.togglePlayPause());
        
        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Video event listeners
        this.videos.forEach((video, index) => {
            video.addEventListener('loadedmetadata', () => {
                if (index === this.currentSlide) {
                    video.currentTime = 0;
                    this.playCurrentVideo();
                }
            });
            
            video.addEventListener('ended', () => {
                if (index === this.currentSlide) {
                    this.nextSlide();
                }
            });
            
            video.addEventListener('error', (e) => {
                console.log(`Video ${index + 1} error:`, e);
                // Continue to next slide if video fails
                if (index === this.currentSlide) {
                    setTimeout(() => this.nextSlide(), 1000);
                }
            });
        });
        
        // Pause on hover
        const slider = document.querySelector('.tours-slider');
        slider?.addEventListener('mouseenter', () => this.pauseAutoPlay());
        slider?.addEventListener('mouseleave', () => {
            if (this.isPlaying) this.startAutoPlay();
        });
    }
    
    updateSlider() {
        if (!this.track) return;
        
        // Move slider
        this.track.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
        
        // Update slides
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });
        
        // Handle videos
        this.handleVideos();
    }
    
    handleVideos() {
        this.videos.forEach((video, index) => {
            if (index === this.currentSlide) {
                // Play current video
                this.playCurrentVideo();
            } else {
                // Pause and reset other videos
                video.pause();
                video.currentTime = 0;
            }
        });
    }
    
    playCurrentVideo() {
        const currentVideo = this.videos[this.currentSlide];
        if (currentVideo && this.isPlaying) {
            const playPromise = currentVideo.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log('Video play failed:', error);
                });
            }
        }
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlider();
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlider();
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlider();
    }
    
    togglePlayPause() {
        this.isPlaying = !this.isPlaying;
        const icon = this.playPauseBtn?.querySelector('i');
        
        if (this.isPlaying) {
            icon?.classList.replace('fa-play', 'fa-pause');
            this.startAutoPlay();
            this.playCurrentVideo();
        } else {
            icon?.classList.replace('fa-pause', 'fa-play');
            this.pauseAutoPlay();
            this.videos[this.currentSlide]?.pause();
        }
    }
    
    startAutoPlay() {
        this.pauseAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            if (this.isPlaying) {
                this.nextSlide();
            }
        }, 8000); // 8 seconds per slide
    }
    
    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Gallery Section Slider
class GallerySlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.gallery-slide');
        this.dots = document.querySelectorAll('.gallery-dots .dot');
        this.track = document.querySelector('.gallery-track');
        this.prevBtn = document.querySelector('.gallery-section .nav-prev');
        this.nextBtn = document.querySelector('.gallery-section .nav-next');
        this.progressBar = document.querySelector('.gallery-progress');
        
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    init() {
        if (!this.slides.length) return;
        
        this.updateSlider();
        this.startAutoPlay();
        
        // Event listeners
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());
        
        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Pause on hover
        const slider = document.querySelector('.gallery-slider');
        slider?.addEventListener('mouseenter', () => this.pauseAutoPlay());
        slider?.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    updateSlider() {
        if (!this.track) return;
        
        // Move slider
        this.track.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
        
        // Update slides
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });
        
        // Update progress bar
        const progress = ((this.currentSlide + 1) / this.slides.length) * 100;
        if (this.progressBar) {
            this.progressBar.style.width = `${progress}%`;
        }
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlider();
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlider();
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlider();
    }
    
    startAutoPlay() {
        this.pauseAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // 5 seconds per slide
    }
    
    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Scroll reveal animation
function scrollReveal() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

// Contact form handling
function initContactForm() {
    const form = document.querySelector('#contact form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        const name = form.querySelector('input[placeholder*="Name"]').value;
        const email = form.querySelector('input[placeholder*="Email"]').value;
        const phone = form.querySelector('input[placeholder*="Phone"]').value;
        
        if (!name || !email || !phone) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Success message
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize sliders
    new ToursSlider();
    new GallerySlider();
    
    // Initialize other features
    initContactForm();
    
    // Scroll reveal
    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); // Run once on load
    
    // Preload videos for better performance
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.preload = 'metadata';
        video.muted = true; // Ensure videos are muted for autoplay
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    // Recalculate slider positions if needed
    const toursTrack = document.querySelector('.tours-track');
    const galleryTrack = document.querySelector('.gallery-track');
    
    if (toursTrack) {
        const currentTourSlide = document.querySelector('.tour-slide.active');
        if (currentTourSlide) {
            const index = Array.from(currentTourSlide.parentNode.children).indexOf(currentTourSlide);
            toursTrack.style.transform = `translateX(-${index * 100}%)`;
        }
    }
    
    if (galleryTrack) {
        const currentGallerySlide = document.querySelector('.gallery-slide.active');
        if (currentGallerySlide) {
            const index = Array.from(currentGallerySlide.parentNode.children).indexOf(currentGallerySlide);
            galleryTrack.style.transform = `translateX(-${index * 100}%)`;
        }
    }
});
// Hero Carousel JavaScript
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
let slideInterval;

// Function to show specific slide
function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide and indicator
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    
    currentSlideIndex = index;
}

// Function to go to next slide
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

// Function to go to previous slide
function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

// Function to change slide (called by arrow buttons)
function changeSlide(direction) {
    if (direction === 1) {
        nextSlide();
    } else {
        prevSlide();
    }
    resetInterval();
}

// Function to go to specific slide (called by indicators)
function currentSlide(index) {
    showSlide(index - 1);
    resetInterval();
}

// Auto-play functionality
function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function resetInterval() {
    clearInterval(slideInterval);
    startSlideShow();
}

// Initialize carousel when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (slides.length > 0) {
        showSlide(0);
        startSlideShow();
    }
});

// Pause auto-play when user hovers over carousel
const heroCarousel = document.querySelector('.hero-carousel');
if (heroCarousel) {
    heroCarousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
    heroCarousel.addEventListener('mouseleave', startSlideShow);
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (event.key === 'ArrowRight') {
        changeSlide(1);
    }
});
