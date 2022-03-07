const h1 = document.querySelector('h1');

fetch('/example.txt') //get example.txt content
  .then(response => { //when you get it
    return response.text(); //see the content as text
  })
  .then(text => { // then you should do next
    h1.textContent = text; //put the example.txt's content into h1.content
  })

// console.log(response);


document.querySelector('body > a').addEventListener('click', function (event) {
  event.preventDefault;

  fetch('/article.json') //get article.json content
    .then(response => { //when you get it
      return response.json(); //see the content as json
    })
    .then(article => { // then you should do next
      history.pushState({}, '', article.url)
      document.querySelector('article h2').textContent = article.title;
      document.querySelector('article p').textContent = article.description;
      document.querySelector('article img').src = article.image;
    })
})