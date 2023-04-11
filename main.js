// const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const paginationBtns = document.querySelectorAll(".pagination-btn");

let currentSlide = 0;

// Initialize the slider
updateSlider();
// Add event listener to the pagination buttons
paginationBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentSlide = index;

    updateSlider();
  });
});


function updateSlider() {
  // update slides
  slides.forEach((slide, index) => {
    slide.classList.remove("active");

    if (index === currentSlide) {
      slide.classList.add("active");
    }
  });
  // Update pagination buttons
  paginationBtns.forEach((button, index) => {
    button.classList.remove("active");

    if (index === currentSlide) {
      button.classList.add("active");
    }
  });
  
}