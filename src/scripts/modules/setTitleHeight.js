console.log('set Height');

const titles = document.querySelectorAll('.article-card__title');

if(titles) {
  console.log(titles);

  const desktopWidth = 959; //more than
  const tabletWidth = 533; //more than

  const desktopCount = 3;
  const tabletCount  = 2;
  const mobileCount  = 1;

  let windowWidth = window.innerWidth;

  let count = null;

  function setCount() {
    windowWidth = window.innerWidth;
    if(windowWidth <= tabletWidth) {
      count = mobileCount;
    }

    if(windowWidth > tabletWidth && windowWidth <= desktopWidth) {
      count = tabletCount;
    }

    if(windowWidth > desktopWidth) {
      count = desktopCount;
    }

    splitTitles(count);
  }

  setCount();

  window.addEventListener('resize', setCount);

  function setHeight(array) {
    console.log(array);
  }

  function splitTitles(count) {
    console.log('COUNT: ', count);

    let row = 1;
    let rowIndex = 1

    titles.forEach(title => {
      if(count === rowIndex) {
        title.setAttribute('data-row', row - 1);
        row++;
        rowIndex = 1;
      } else {
        title.setAttribute('data-row', row - 1);
        rowIndex++;
      }
    });

    if(count === mobileCount) {
      titles.forEach(title => {
        title.style.height = 'initial';
      })
    }

    if(count === tabletCount) {

    }

    if(count === desktopCount) {

    }
  }

  /*function splitTitles() {
    let array = [];

    for(let i = 0; i < titles.length; i++) {
      array.push(titles[i]);

      if(i === count - 1) {
        setHeight(i, [...array]);
      }
    }
  }*/

 // splitTitles();
}
