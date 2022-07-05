const modal = (btnsSelector) => {
  const btnsToModal = document.querySelectorAll(btnsSelector);
  btnsToModal.forEach(btn => {
    const idModal = btn.getAttribute('data-modal');
    const modalBlock = document.querySelector('#' + idModal);
    const overlay = modalBlock.closest('.overlay');

    btn.addEventListener('click', e => {
      e.preventDefault();
      overlay.classList.add('overlay_active')
      document.body.style.overflow = 'hidden';
    });
    overlay.addEventListener('click', e => {
      const target = e.target;
      if(target.closest('.modal__close') || target === overlay && target !== modalBlock) {
        overlay.classList.remove('overlay_active');
        document.body.style.overflow = '';
      }
    })
  });
};

export default modal;