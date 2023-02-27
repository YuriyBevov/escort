const opener = document.querySelector('.header__contacts-mobile-opener');

if(opener) {
  const contactModal = document.querySelector('.header__contacts');

  const removeListeners = () => {
    document.removeEventListener('click', onOverlayClickCloseContacts);
    document.removeEventListener('keydown', onEscClickCloseContacts);
  }

  const addListeners = () => {
    document.addEventListener('click', onOverlayClickCloseContacts);
    document.addEventListener('keydown', onEscClickCloseContacts);
  }

  const closeContacts = () => {
    removeListeners();
    contactModal.classList.remove('active');
  }

  const onClickOpenContacts = () => {
    if(!contactModal.classList.contains('active')) {
      contactModal.classList.add('active');
      addListeners();
    } else {
      closeContacts();
    }

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

  opener.addEventListener('click', onClickOpenContacts);
}
