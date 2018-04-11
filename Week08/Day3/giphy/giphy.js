let giphy = new XMLHttpRequest();
let div = document.querySelector('div');

giphy.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=zdN6yX2MwDHR0BFuQAAb3jy0RIpHq9VC&q=wednesday&limit=16&offset=0&rating=G&lang=en', true);
giphy.onload = () => {

  let dataFromGiphy = JSON.parse(giphy.responseText);
  console.log(dataFromGiphy);
  
  for (let i = 0; i < dataFromGiphy.data.length; i++) {
    let img = document.createElement('img');
    img.setAttribute('src', JSON.parse(giphy.responseText).data[i].images.fixed_height.url);
    div.appendChild(img);

    img.addEventListener('click', function() {
      img.setAttribute('src', JSON.parse(giphy.responseText).data[i].images.original.url);
    });

    img.addEventListener('mouseout', function() {
      img.setAttribute('src', JSON.parse(giphy.responseText).data[i].images.fixed_height.url);
    });
  }
}
giphy.send();
