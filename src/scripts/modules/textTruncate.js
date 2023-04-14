console.log('text');

function limitStr( str, n ) {
  if ( str.length > n ) {
      return str.slice(0, n) + '...';
  } else {
      return str
  }
}

const articleText = document.querySelectorAll('.article-card__text');

if(articleText) {
  articleText.forEach(text => {
    text.innerHTML = limitStr(text.innerHTML, 130);
  })
}
