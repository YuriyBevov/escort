const opener = document.querySelector('.header__contacts-mobile-opener');

if(opener) {
  const contactModal = document.querySelector('.header__contacts');
  const closer = document.querySelector('.header__contacts-mobile-closer');

  const removeListeners = () => {
    document.removeEventListener('click', onOverlayClickCloseContacts);
    document.removeEventListener('keydown', onEscClickCloseContacts);
    closer.removeEventListener('click', onEscClickCloseContacts);

    opener.addEventListener('click', onClickOpenContacts);
  }

  const addListeners = () => {
    document.addEventListener('click', onOverlayClickCloseContacts);
    document.addEventListener('keydown', onEscClickCloseContacts);
    closer.addEventListener('click', onCloserClickCloseContacts);

    opener.removeEventListener('click', onClickOpenContacts);
  }

  const closeContacts = () => {
    removeListeners();
    contactModal.classList.remove('active');
  }

  const onClickOpenContacts = () => {
    contactModal.classList.add('active');
    addListeners();
  }

  const onOverlayClickCloseContacts = (evt) => {
    if(!contactModal.contains(evt.target)) {
      closeContacts();
    }
  }

  const onEscClickCloseContacts = (evt) => {
    if(evt.key === 'Esc' || evt.key === 'Escape') {
      closeContacts();
    }
  }

  const onCloserClickCloseContacts = () => {
    closeContacts();
  }

  opener.addEventListener('click', onClickOpenContacts);
}
