import display from './display.js';

const getData = async (id) => {
  const apiN = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
  await fetch(apiN)
    .then((response) => response.json())
    .then((data) => {
      const learArray = data.result;
      const leadSort = learArray.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
      display(leadSort);
    });
};
export default getData;