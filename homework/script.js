const book = document.querySelector('.book');
fetch('/book.json')
  .then(response => { 
    return response.json(); 
  })
  .then(book => { 
    document.querySelector('#book_cover').src = book.image;
    document.querySelector('#book_list h3').textContent = book.title;
  })

  