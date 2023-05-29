function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // Adjust the duration as desired (in milliseconds)
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}

const nav = document.querySelector('header');
const navLinks = document.querySelectorAll('nav ul li a');

for (const link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

let prevScrollPos = window.pageYOffset;
let isNavVisible = true;
const navHeight = nav.offsetHeight;

// Add padding to the top of the body equal to the height of the navbar
document.body.style.paddingTop = `${navHeight}px`;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    if (!isNavVisible) {
      nav.style.top = '0';
      isNavVisible = true;
    }
  } else {
    // Scrolling down
    if (isNavVisible && currentScrollPos > navHeight) {
      nav.style.top = `-${navHeight}px`;
      isNavVisible = false;
    }
  }

  prevScrollPos = currentScrollPos;
};

window.addEventListener('DOMContentLoaded', function() {
  var applyButton = document.getElementById('applyBtn');

  applyButton.addEventListener('click', function() {
      // Add your custom JavaScript behavior here
      console.log('Button clicked!');
  });
});


