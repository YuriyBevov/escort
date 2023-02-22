const nav = document.querySelector('header nav');

if(nav) {
  let windowWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
  });

  const triggers = nav.querySelectorAll('.nav__list-item--nested a');

  let inner = null;
  let button = null;

  const onOverlayClickCloseInner = (evt) => {
    evt.stopPropagation();

    if(windowWidth > 1023) {
      if(!inner.contains(evt.target)) {
        closeInner();
      };
    };
  };

  const onButtonClickCloseInner = () => {
    closeInner();
  };

  const closeInner = () => {
    document.removeEventListener('click', onOverlayClickCloseInner);
    button.removeEventListener('click', onButtonClickCloseInner);
    button.classList.remove('active');
    inner.classList.remove('active');
    inner = null;
    button = null;
  };

  function openSubMenu() {
    inner.classList.add('active');
    button.classList.add('active');
    document.addEventListener('click', onOverlayClickCloseInner);
    button.addEventListener('click', onButtonClickCloseInner);
  };

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (evt) => {
      evt.stopPropagation();
      evt.preventDefault();

      inner = trigger.nextElementSibling;
      button = trigger;

      openSubMenu();
    });
  });
};
