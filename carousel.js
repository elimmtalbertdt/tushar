const carousel = document.querySelector(".carousel");
const items = carousel.querySelectorAll(".carousel-img");
const dots = carousel.querySelectorAll(".dot");
const prev = carousel.querySelector(".carousel-controls span:first-child");
const next = carousel.querySelector(".carousel-controls span:last-child");

let currentIndex = 0;

function showSlide(index) {
  items.forEach((item, i) => item.classList.toggle("active", i === index));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  currentIndex = index;
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
  });
});

prev.addEventListener("click", () => {
  let index = (currentIndex - 1 + items.length) % items.length;
  showSlide(index);
});

next.addEventListener("click", () => {
  let index = (currentIndex + 1) % items.length;
  showSlide(index);
});

showSlide(0);