(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-menu--open]'),
    closeModalBtn: document.querySelector('[data-mobile-menu--close]'),
    modal: document.querySelector('[data-mobile-menu]'),
    allMobileLink: document.querySelectorAll('.mobile-menu__link')
  };


  function toggleModal() {
    refs.modal.classList.toggle('mobile-menu--is-hidden');
  };
  function closeModal() {
    refs.modal.classList.add('mobile-menu--is-hidden');
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.allMobileLink.forEach(item => {
    item.addEventListener('click', closeModal)
  });

})();
