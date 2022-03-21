(() => {
  const refs = {
    openBtn: document.querySelector('[data-read-open]'),
    textMore: document.querySelector(".about__description-more--is-hidden"),
    textBtn1: document.querySelector(".about__btn-title"),
    textBtn2: document.querySelector(".about__btn-title--is-hidden"),

  };

  refs.openBtn.addEventListener('click', toggleText);

  function toggleText() {
    refs.textMore.classList.toggle('about__description-more--is-hidden');
    refs.textBtn1.classList.toggle('about__btn-title--is-hidden');
    refs.textBtn2.classList.toggle('about__btn-title--is-hidden');




    }

  }
)();