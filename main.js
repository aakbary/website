// Select all elements with the 'animate' class
const animateElements = document.querySelectorAll('.animate');

// Create an Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the animation class specified in the data-animate attribute
            entry.target.classList.add(entry.target.dataset.animate);
            observer.unobserve(entry.target); // Stop observing after the animation is applied
        }
    });
});

// Observe each animated element
animateElements.forEach(el => observer.observe(el));

const images = document.querySelectorAll('.image-gallery img');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
            img.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
    });

