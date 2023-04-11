const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const slideNav = document.querySelector('.slider-nav');
const slideNavItems = slideNav.querySelectorAll('.slider-nav-item');
const autoPlayDelay = 5000; // 5 seconds

let currentSlideIndex = 0;
let autoPlayIntervalId;

function setCurrentSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
      slideNavItems[i].classList
  .add('active');
} else {
  slide.classList.remove('active');
  slideNavItems[i].classList.remove('active');
}
});
}

function moveToNextSlide() {
currentSlideIndex = (currentSlideIndex + 1) % slides.length;
setCurrentSlide(currentSlideIndex);
}

function startAutoPlay() {
autoPlayIntervalId = setInterval(() => {
moveToNextSlide();
}, autoPlayDelay);
}

function stopAutoPlay() {
clearInterval(autoPlayIntervalId);
}

function setupSlideNav() {
slideNavItems.forEach((item, i) => {
item.addEventListener('click', () => {
currentSlideIndex = i;
setCurrentSlide(currentSlideIndex);
stopAutoPlay();
});
});
}

function setSlideHeight() {
const activeSlide = slider.querySelector('.slide.active');
slider.style.height = ${activeSlide.offsetHeight}px;
}
function initSlider() {
setCurrentSlide(currentSlideIndex);
setupSlideNav();
setSlideHeight();
startAutoPlay();
}

window.addEventListener('load', () => {
initSlider();
});

window.addEventListener('resize', () => {
setSlideHeight();
});