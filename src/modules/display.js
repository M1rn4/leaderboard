const display = (array) => {
  const container = document.querySelector('.square');
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
      <p>${array[i].user}&ensp;</p>
      <p>&ensp;${array[i].score}</p>
    </div>
           `;
    container.innerHTML += scoreTemplate;
  }
}
export default display;