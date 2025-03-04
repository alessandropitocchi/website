// CountAPI configuration for visitor counter
// This is a free service that works with static sites

// Function to increment visitor count using CountAPI
function incrementVisitorCount() {
    // Generate a unique namespace for your site
    const namespace = 'pitocchi-portfolio';
    const key = 'visitors';
    
    // First, hit the API to increment the counter
    countapi.hit(namespace, key).then((result) => {
        // Update the displayed count
        document.getElementById('visitor-count').textContent = result.value.toLocaleString();
    }).catch((error) => {
        console.error("Error updating visitor count:", error);
        document.getElementById('visitor-count').textContent = "Error";
    });
}

document.addEventListener('DOMContentLoaded', function() {
    incrementVisitorCount();
            
    // Back to top button functionality
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('navbar-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a nav link
    document.querySelectorAll('.navbar-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar-container')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});