import IMask from 'imask';

const items = document.querySelectorAll('input[type="tel"');

if(items) {
  const options = {
    mask: '+{7} (000) 000-00-00'
  };

  items.forEach(item=>{
    IMask(item, options);
  });
};
