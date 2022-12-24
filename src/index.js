import './index.css';
import getData from './modules/getData.js';
import newLead from './modules/newLead.js';
// import newId from './modules/newId.js';

const refreshBtn = document.querySelector('.refreshButton');
const submitBtn = document.querySelector('.btn-submit-score');
const userInput = document.getElementById('user');
const scoreInput = document.getElementById('score');
// const newGameBtn = document.querySelector('.newGame');
const id = 'h1eJ1YvWwqXfMWBSwVMF';
// newGameBtn.addEventListener('click', async (e) => {
//   e.preventDefault();
//   id = await newId();
//   console.log(id);
//   getData(id);
//   await newLead(userInput.value, parseInt(scoreInput.value, 10), id);
// });
submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-undef
  await newLead(userInput.value, parseInt(scoreInput.value, 10), id);
  getData(id);
  userInput.value = '';
  scoreInput.value = '';
});

refreshBtn.addEventListener('click', () => {
  getData(id);
});

window.addEventListener('load', async (e) => {
  e.preventDefault();
  getData(id);
});
