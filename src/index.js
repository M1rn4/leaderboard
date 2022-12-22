import './index.css';
let listOfScore = [];
const container = document.querySelector('.square');
const refreshBtn = document.querySelector('.refreshButton');
const submitBtn = document.querySelector('.btn-submit-score');
class createObjectScore {
  constructor(user, score) {
    this.user =  user;
    this.score = score;
  }
}

class features {
  static displayListScore(array) {
    container.innerHTML = '';
    let backgroundColor = '';
    for (let i = 0; i < array.length; i += 1) {
      if (i % 2 === 0) {
        backgroundColor = 'white';
      } else {
        backgroundColor = 'gray';
      }
      const scoreTemplate = `
        <div class="book ${backgroundColor}">
            <p>"${listOfScore[i].user}"&ensp:</p>
            <p>&ensp;${listOfScore[i].score}</p>
        </div>
            `;
      container.innerHTML += scoreTemplate;
    }
  }
  static add(user, score) {
    if (user === '' || score === '') return;
    const newScore = new createObjectScore(user, score);
    listOfScore.push(newScore);
    this.displayListBooks(listOfScore);
  };
}
function addSubmitBtn() {
  features.add(user.value, score.value);
  console.log(listOfScore);
}
submitBtn.addEventListener('click', addSubmitBtn);

function addRefreshBtn() {
  features.displayListScore();
}
refreshBtn.addEventListener('click', addRefreshBtn);