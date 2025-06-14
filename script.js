
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// 🔹 Zoom the window image slowly (over 150vh)
gsap.to('.hero-img', {
  scale: 8,
  transformOrigin: 'center center',
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.zoomScroll',
    start: 'top top',
    end: 'bottom+=100 top', // zoom spans full 150vh
    scrub: 0.5,
  }
});

// 🔹 Fade out the zoomed window image (after zoom finishes)
gsap.to('.hero-zoom', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.scrollDist',
    start: 'top 90%',
    end: 'top 70%',
    scrub: true,
  }
});

// 🔹 Parallax animation starts AFTER zoom
gsap.timeline({
  scrollTrigger: {
    trigger: '.scrollDist',
    start: 'top top',
    end: '100% 100%',
    scrub: 1,
  }
})
  .fromTo('.sky', { y: 0 }, { y: -200 }, 0)
  .fromTo('.cloud1', { y: 100 }, { y: -800 }, 0)
  .fromTo('.cloud2', { y: -150 }, { y: -500 }, 0)
  .fromTo('.cloud3', { y: -50 }, { y: -650 }, 0)
  .fromTo('.mountBg', { y: -10 }, { y: -100 }, 0)
  .fromTo('.mountMg', { y: -30 }, { y: -250 }, 0)
  .fromTo('.mountFg', { y: -50 }, { y: -600 }, 0);

// 🔹 Arrow button interactions
const arrowBtn = document.querySelector('#arrow-btn');

arrowBtn?.addEventListener('mouseenter', () => {
  gsap.to('.arrow', {
    y: 10,
    duration: 0.8,
    ease: 'back.inOut(3)',
    overwrite: 'auto',
  });
});

arrowBtn?.addEventListener('mouseleave', () => {
  gsap.to('.arrow', {
    y: 0,
    duration: 0.5,
    ease: 'power3.out',
    overwrite: 'auto',
  });
});

arrowBtn?.addEventListener('click', () => {
  gsap.to(window, {
    scrollTo: innerHeight,
    duration: 1.5,
    ease: 'power1.inOut',
  });
});







// let smoother = ScrollSmoother.create({
//   smooth: 1.2,
//   effects: true,
//   normalizeScroll: true
// });

gsap.utils.toArray(".col").forEach((col, index) => {
  gsap.to(col, {
    yPercent: -100 * (index + 1) * 0.46,
    ease: "none",
    scrollTrigger: {
      trigger: col,
      start: "top 70%",
      end: "bottom top",
      scrub: 1
    }
  });
});

function adjustGridHeight() {
  let firstCol = document.querySelector(".col:first-child");
  let grid = document.querySelector(".grid");

  if (firstCol && grid) {
    let firstColHeight = firstCol.scrollHeight;
    let firstColOffset = 0.32 * firstColHeight;
    grid.style.height = (firstColHeight - firstColOffset) + "px";
  }
}

window.addEventListener("load", adjustGridHeight);
window.addEventListener("resize", adjustGridHeight);


gsap.set('.title1', { visibility: 'visible' });


gsap.from(".grid", {
  opacity: 0,
  y: 100,
  ease: "power2.out",
  duration: 1,
  delay: .2,
  scrollTrigger: {
    trigger: ".grid",
    start: "top 100%",
    toggleActions: "play none none none"
  }
});





const next = document.querySelector('.next50');
const prev = document.querySelector('.prev50');
const slideContainer = document.querySelector('.slide50');

function updateVideos() {
    const items = document.querySelectorAll('.item50');
    
    items.forEach((item, index) => {
        const video = item.querySelector('video');
        
        if (video) {
            if (index === 1) {
                // Active item (2nd child) - play video
                video.play();
            } else {
                // Inactive items - pause and reset video
                video.pause();
                video.currentTime = 0;
            }
        }
    });
}

next.addEventListener('click', function () {
    const items = document.querySelectorAll('.item50');
    slideContainer.appendChild(items[0]);
    updateVideos();
});

prev.addEventListener('click', function () {
    const items = document.querySelectorAll('.item50');
    slideContainer.prepend(items[items.length - 1]);
    updateVideos();
});

// Initialize video states on page load
window.addEventListener('DOMContentLoaded', updateVideos);







const preCover = document.querySelector('.pre-cover');

preCover.addEventListener('mousemove', (e) => {
    const rect = preCover.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    preCover.style.maskImage = `radial-gradient(circle 350px at ${x}px ${y}px, transparent 0%, black 100%)`;
    preCover.style.webkitMaskImage = `radial-gradient(circle 350px at ${x}px ${y}px, transparent 0%, black 100%)`;
});

preCover.addEventListener('mouseleave', () => {
    preCover.style.opacity = '1';
    preCover.style.maskImage = `none`;
    preCover.style.webkitMaskImage = `none`;
});






// Add this to your script.js file
document.addEventListener('DOMContentLoaded', function() {
  // Create mobile menu toggle button
  const navbar = document.querySelector('.navbar');
  const menuList = document.querySelector('.menu');
  
  const toggleButton = document.createElement('div');
  toggleButton.className = 'mobile-menu-toggle';
  toggleButton.innerHTML = '☰';
  navbar.insertBefore(toggleButton, navbar.firstChild);
  
  // Toggle menu on click
  toggleButton.addEventListener('click', function() {
    menuList.classList.toggle('active');
    toggleButton.innerHTML = menuList.classList.contains('active') ? '✕' : '☰';
  });
  
  // Close menu when clicking a link
  const menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuList.classList.remove('active');
      toggleButton.innerHTML = '☰';
    });
  });
});
