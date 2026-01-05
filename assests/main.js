document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".hero__slider", {
    loop: true,
    speed: 1200,
    effect: "fade",
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false
    // },
    navigation: {
      prevEl: ".hero__prev",
      nextEl: ".hero__next"
    }
  });
});
const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });