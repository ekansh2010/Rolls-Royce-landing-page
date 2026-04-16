// Video loop functionality (also covered by the `loop` attribute, but kept as fallback)
const videos = document.querySelectorAll('video');
videos.forEach(video => {
    video.addEventListener('ended', function() {
        video.currentTime = 0;
        video.play();
    });
});

// Logo scroll behavior — FIXED: use correct relative paths inside images/
var scrollPosition = 0;
var image = document.getElementById("logo");

window.addEventListener("scroll", function() {
    var newScrollPosition = window.scrollY;

    if (newScrollPosition > scrollPosition && newScrollPosition > 100) {
        image.src = "images/Logo.png";                  // ✅ Fixed path
    } else if (newScrollPosition === 0) {
        image.src = "images/Rolls-Royce-Title.png";     // ✅ Fixed path
    }

    scrollPosition = newScrollPosition;
});

// Menu overlay functionality
document.getElementById("openbutton").addEventListener("click", function() {
    document.getElementById("overlay").style.left = "0";
});

document.getElementById("closebutton").addEventListener("click", function() {
    document.getElementById("overlay").style.left = "-40%";
});

// Smooth scroll behavior for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
});