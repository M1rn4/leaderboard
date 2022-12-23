import './index.css';
import getData from './modules/getData.js';
import newLead from './modules/newLead.js';
import newId from './modules/newId';

const refreshBtn = document.querySelector('.refreshButton');
const submitBtn = document.querySelector('.btn-submit-score');
const userInput = document.getElementById('user');
const scoreInput = document.getElementById('score');
const newGameBtn = document.querySelector('.newGame');

refreshBtn.addEventListener('click', () => {
  getData();
});

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  await newLead(userInput.value, parseInt(scoreInput.value, 10));
  userInput.value = '';
  scoreInput.value = '';
});
newGameBtn.addEventListener('click', async(e) => {
  e.preventDefault();
  const generateId = await newId();
  console.log(generateId);
  
})
getData();

