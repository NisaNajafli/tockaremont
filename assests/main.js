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
document.addEventListener("DOMContentLoaded", () => {

  const servicesSlider = document.querySelector('.services__slider');
  if (!servicesSlider) return;

  new Swiper('.services__slider', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    grabCursor: true,

    pagination: {
      el: '.services__progress',
      type: 'progressbar'
    },

    breakpoints: {
      320: { slidesPerView: 1.1 },
      768: { slidesPerView: 2.2 },
      1200: { slidesPerView: 3 }
    }
  });

});
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

    if (!isOpen) item.classList.add('active');
  });
});
flatpickr("#datePicker", {
  dateFormat: "d.m.Y",
  locale: "ru"
});
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('.fancybox').forEach(el => {
  el.addEventListener('click', function(e){
    e.preventDefault();
    const src = this.getAttribute('href');

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `<img src="${src}">`;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', ()=> overlay.remove());
  });
});
const openBtns = document.querySelectorAll('[data-modal-open]');
const modal = document.querySelector('[data-modal]');
const overlay = document.querySelector('[data-modal-overlay]');
const closeBtn = document.querySelector('[data-modal-close]');

function openModal(e) {
  e.preventDefault();
  modal.classList.add('is-active');
  overlay.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-active');
  overlay.classList.remove('is-active');
  document.body.style.overflow = '';
}

openBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});