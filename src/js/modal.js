(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-window--open]'),
    closeModalBtn: document.querySelector('[modal-window--close]'),
    modal: document.querySelector('[modal-window]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();