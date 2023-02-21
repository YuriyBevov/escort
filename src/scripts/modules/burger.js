const burger = document.querySelector('.burger');

if(burger) {
  const header = document.querySelector('header');

  const onClickToggleNav = () => {
    header.classList.toggle('header--mobile-opened');

    if(header.classList.contains('header--mobile-opened')) {
      document.addEventListener('click', onOverlayClickCloseNav);
      document.addEventListener('keydown', onEscClickCloseNav);
    } else {
      document.removeEventListener('click', onOverlayClickCloseNav);
      document.removeEventListener('keydown', onEscClickCloseNav);
    }
  }

  const onEscClickCloseNav = (evt) => {
    if(evt.key === 'Esc' || evt.key === 'Escape') {
      onClickToggleNav();
    }
  }

  const onOverlayClickCloseNav = (evt) => {
    if(!header.contains(evt.target)) {
      onClickToggleNav();
    }
  }

  burger.addEventListener('click', onClickToggleNav);
}
