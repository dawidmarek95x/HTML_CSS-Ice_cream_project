(() => {
  const refs = {
    openBtn: document.querySelector('[data-hero-btn-open]'),
    textMore: document.querySelector(".hero__description-more--is-hidden")
  };

  refs.openBtn.addEventListener('click', toggleText);

  function toggleText() {
    refs.textMore.classList.toggle('hero__description-more--is-hidden');
    refs.openBtn.classList.toggle('product__btn--close');
  }
})();