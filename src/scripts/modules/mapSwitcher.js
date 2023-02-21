const switchers = document.querySelectorAll('.map-switcher');

if(switchers) {
  const maps = document.querySelectorAll('.map__content iframe');

  function setActiveMap(current, index) {
    switchers.forEach(switcher => {
      switcher.classList.contains('active') ?
      switcher.classList.remove('active') : null;
    });

    maps.forEach(map => {
      map.classList.contains('active') ?
      map.classList.remove('active') : null;
    });

    current.classList.add('active');
    maps[index].classList.add('active');
  };

  switchers.forEach((switcher,index) => {
    switcher.addEventListener('click', (evt) => {

      setActiveMap(switcher, index);
    });
  });
};
