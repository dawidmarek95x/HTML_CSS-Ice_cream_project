(() => {
  const refs = {
    openBtn: document.querySelector('[data-first-product-open]'),
    textMore: document.querySelector(".product__text--is-hidden")
  };

  refs.openBtn.addEventListener('click', toggleText);

  function toggleText() {
    refs.textMore.classList.toggle('product__text--is-hidden');
    refs.openBtn.classList.toggle('product__btn--close');
  }
})();

(() => {
  const refs = {
    openBtn: document.querySelector('[data-second-product-open]'),
    textMore: document.querySelector(".product__text-second--is-hidden")
  };

  refs.openBtn.addEventListener('click', toggleText);

  function toggleText() {
    refs.textMore.classList.toggle('product__text-second--is-hidden');
    refs.openBtn.classList.toggle('product__btn--close');
  }
})();

(() => {
  const refs = {
    openBtn: document.querySelector('[data-third-product-open]'),
    textMore: document.querySelector(".product__text-third--is-hidden")
  };

  refs.openBtn.addEventListener('click', toggleText);

  function toggleText() {
    refs.textMore.classList.toggle('product__text-third--is-hidden');
    refs.openBtn.classList.toggle('product__btn--close');
  }
})();