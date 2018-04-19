const tbody = document.querySelector('tbody');

function getQuestion() {
  const xml = new XMLHttpRequest();
  xml.open('GET', '/game');
  xml.setRequestHeader('Content-Type', 'application/json');
  xml.onload = (event) => {
    if (xml.status === 200) {
      const response = JSON.parse(xml.response);
      document.querySelector('#question').innerText = response.question;
    }
  }
  xml.send();
}

function getAnswers() {
  const xml = new XMLHttpRequest();
  xml.open('GET', '/game');
  xml.setRequestHeader('Content-Type', 'application/json');
  xml.onload = (event) => {
    if (xml.status === 200) {
      const response = JSON.parse(xml.response.answers);
      document.querySelector('#answers').innerText = response.answers[0];      
      console.log(response.answers[0]);
    }
  }
  xml.send();
}


window.onload = () => {
  getQuestion();
}
