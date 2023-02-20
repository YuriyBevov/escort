const accordeon = document.querySelector('.accordeon');

if(accordeon) {
  const items = accordeon.querySelectorAll('.accordeon__item-header');

  items.forEach(item => {
    item.addEventListener('click', (evt) => {
      evt.currentTarget.parentNode.classList.toggle('active');
    });
  });
};
