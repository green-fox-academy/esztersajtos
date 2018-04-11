let apollo = new XMLHttpRequest();
let div = document.querySelector('div');
let container = document.getElementById('container');

apollo.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d1fb311bae8d4ec08e146780eedb27d8&q=Apollo-11&fq=moon', true);
apollo.onload = () => {
  let dataFromNyTimes = JSON.parse(apollo.responseText);
  console.log(dataFromNyTimes.response.docs);
  let headLine = document.createElement('h1');
  headLine.innerText = JSON.parse(apollo.responseText).response.docs[0].headline.print_headline;
  container.appendChild(headLine);

  let snippet = document.createElement('h3');
  snippet.innerText = JSON.parse(apollo.responseText).response.docs[0].snippet;
  container.appendChild(snippet);

  let date = document.createElement('p');
  date.innerText = JSON.parse(apollo.responseText).response.docs[0].pub_date;
  container.appendChild(date);

  console.log(dataFromNyTimes.response.docs[1].headline.print_headline)
}
apollo.send();

