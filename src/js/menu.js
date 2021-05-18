
(() => {
  const refs = {
    openBtn: document.querySelector('[menu-button-open]'),
    closeBtn: document.querySelector('[menu-button-close]'),
    menu: document.querySelector('[data-menu]'),
    navLinks: document.getElementsByClassName('menu-item__link'),
  };

  refs.openBtn.addEventListener('click', toggleModal);
  refs.closeBtn.addEventListener('click', toggleModal);
  [...refs.navLinks].forEach(elem =>
    elem.addEventListener('click', toggleModal),
  );

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();