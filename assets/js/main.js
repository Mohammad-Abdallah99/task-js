const search = document.querySelector('header form .search');
const searchForm = document.querySelector('header form .searchForm');
search.addEventListener('click', (e) => {
  if (searchForm.classList.contains('hiddenDispaly')) {
    searchForm.classList.remove('slideout');
    searchForm.classList.add('slideinside');
    searchForm.classList.remove('hiddenDispaly');

  } else {
    searchForm.classList.remove('slideinside');
    searchForm.classList.add('slideout');
    searchForm.classList.add('hiddenDispaly');
  }
});

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 39.5,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const hiddenElements = document.querySelectorAll('.hiddenAnima');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visibleanima');
    } else {
      entry.target.classList.remove('visibleanima');
    }
  });
});
hiddenElements.forEach(element => {
  observer.observe(element);
});

const PlusToDash = document.querySelectorAll('.quastion .accordion button img');
PlusToDash.forEach(element => {
  element.addEventListener('click', (e) => {
    let targetImg = e.target;
    
    targetImg.classList.add("rotate-out");
    setTimeout(() => {
      let currentSrc = targetImg.getAttribute('src');
      let newSrc = currentSrc.includes("plus.svg")
        ? "./assets/img/home/quastion/dash.svg"
        : "./assets/img/home/quastion/plus.svg";
      targetImg.setAttribute('src', newSrc);
      targetImg.classList.remove("rotate-out");
      targetImg.classList.add("rotate-in");

      setTimeout(() => {
        targetImg.classList.remove("rotate-in");
      }, 500);
    }, 500);
  });
});

const Monthly = document.querySelector('.plans .buttons .buttom1');
const Yearly = document.querySelector('.plans .buttons .buttom2');
const monthPrice = document.querySelectorAll('.plans .card .pricing .monthly');
const yearPrice = document.querySelectorAll('.plans .card .pricing .yearly');
Monthly.addEventListener('click', (e) => {
  if (monthPrice[0].classList.contains('d-none')) {
    monthPrice.forEach(price => price.classList.remove('d-none'));
    yearPrice.forEach(price => price.classList.add('d-none'));
    Yearly.classList.remove('active');
    Monthly.classList.add('active');
  } else {}
});
Yearly.addEventListener('click', (e) => {
  if (yearPrice[0].classList.contains('d-none')) {
    yearPrice.forEach(price => price.classList.remove('d-none'));
    monthPrice.forEach(price => price.classList.add('d-none'));
    Monthly.classList.remove('active');
    Yearly.classList.add('active');
  } else {}
});
