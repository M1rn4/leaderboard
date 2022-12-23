import display from "./display";
const apiN = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/pXcmf2utbzlnbmvGb7jA'
const getData = async() => {
  await fetch(`${apiN}/scores`)
  .then((response) => response.json())
  .then((data) => {
  const learArray = data.result;
  const leadSort = learArray.sort((a,b) => parseFloat(b.score) - parseFloat(a.score));
  display(leadSort);
})
}
export default getData;