import './index.css';
import getData from './modules/getData.js';
import newLead from './modules/newLead.js';

const refreshBtn = document.querySelector('.refreshButton');
const submitBtn = document.querySelector('.btn-submit-score');
const userInput = document.getElementById('user');
const scoreInput = document.getElementById('score');

refreshBtn.addEventListener('click', () => {
  getData(); 
});

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  await newLead(userInput.value, parseInt(scoreInput.value, 10));
  userInput.value = '';
  scoreInput.value = '';
});
getData();