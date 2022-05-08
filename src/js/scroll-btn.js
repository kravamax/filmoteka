const scrollUp = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    scrollUp.classList.add('scroll-up--active');
  } else {
    scrollUp.classList.remove('scroll-up--active');
  }
});

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
