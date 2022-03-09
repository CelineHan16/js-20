// const h1 = document.querySelector('h1');

// fetch('/example.txt') //get example.txt content
//   .then(response => { //when you get it
//     return response.text(); //see the content as text
//   })
//   .then(text => { // then you should do next
//     h1.textContent = text; //put the example.txt's content into h1.content
//   })

// console.log(response);


// document.querySelector('body > a').addEventListener('click', function (event) {
//   event.preventDefault;

//   fetch('/article.json') //get article.json content
//     .then(response => { //when you get it
//       return response.json(); //see the content as json
//     })
//     .then(article => { // then you should do next
//       history.pushState({}, '', article.url)
//       document.querySelector('article h2').textContent = article.title;
//       document.querySelector('article p').textContent = article.description;
//       document.querySelector('article img').src = article.image;
//     })
// })


// const ul = document.querySelector('ul');
// fetch('/list.json') //get article.json content
//   .then(response => { //when you get it
//     return response.json(); //see the content as json
//   })
//   .then(items => { // then you should do next
//     items.forEach(item => {
//       const li = document.createElement('li');
//       li.textContent = item;
//       ul.append(li);
//     });
//   })


const bookList = document.querySelector('#book_list');
fetch('/books.json')
  .then(response => {
    return response.json();
  })
  .then(books => {
    books.forEach(book => {
      document.querySelector('#book_list img').src = book.image;
      document.querySelector('#book_list h3').textContent = book.title;
      document.querySelector('#book_list span').textContent = book.year;
      document.querySelector('#book_list a').textContent = book.author;

      bookList.append(books)
    });
  })