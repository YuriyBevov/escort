const btn = document.querySelector('.faq__more');
const text = document.querySelector('.faq__footer-text');

if(btn && text) {

  btn.addEventListener('click', () => {
    text.classList.toggle('active');

    if(text.classList.contains('active')) {
      btn.textContent = 'скрыть';
    } else {
      btn.textContent = 'текст целиком';
    }
  })
}
