(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-menu--open]'),
    closeModalBtn: document.querySelector('[data-mobile-menu--close]'),
    modal: document.querySelector('[data-mobile-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('mobile-menu--is-hidden');
  }
})();