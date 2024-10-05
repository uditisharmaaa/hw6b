// Select all elements with the 'slide-in' class
const sliders = document.querySelectorAll('.slide-in');

window.addEventListener('scroll', () => {
  sliders.forEach(slider => {
    const rect = slider.getBoundingClientRect();
    // If the element is in the viewport, add the 'visible' class
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      slider.classList.add('visible');
    } else {
      slider.classList.remove('visible');
    }
  });
});
