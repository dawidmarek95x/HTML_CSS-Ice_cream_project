(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-window--open]'),
    closeModalBtn: document.querySelector('[data-modal-window--close]'),
    modal: document.querySelector('[data-modal-window]'),
  };

  refs.openModalBtn.forEach((b)=>b.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();