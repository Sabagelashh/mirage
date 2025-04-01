var bannerSwiper = new Swiper(".banner-swiper", {
  navigation: {
    nextEl: ".next-banner",
    prevEl: ".prev-banner",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

var productSwiper = new Swiper(".product-swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var latestProdSwiper = new Swiper(".latest-prod-swiper", {
  slidesPerView: 3,
  grid: {
    rows: 2, 
    fill: "row", 
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// for product swiper
const mainProductSwiper = new Swiper('.main-product-swiper', {
  loop: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: false,
  },
});

// Get all buttons
const buttons = document.querySelectorAll('.product-img-button');

// Add click event to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const slideIndex = button.getAttribute('data-slide-index');
    mainProductSwiper.slideTo(slideIndex);
  });
});

var similarProdSw = new Swiper(".similar-prod-swiper", {
  slidesPerView: 4,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next-similar",
    prevEl: ".prev-similar",
  },
});