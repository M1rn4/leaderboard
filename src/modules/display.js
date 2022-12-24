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
    if (i === 0) {
      const scoreTemplate = `
      <div class="book ${backgroundColor}">
        <p>${i}&ensp;</p>
        <p>${array[i].user}&ensp;</p>
        <p>&ensp;${array[i].score}</p>
        <p>&ensp;<i class="fa-solid fa-trophy"></i></p>
      </div>
             `;
      container.innerHTML += scoreTemplate;
    }
    if (i === 1) {
      const scoreTemplate = `
      <div class="book ${backgroundColor}">
        <p>${i}&ensp;</p>
        <p>${array[i].user}&ensp;</p>
        <p>&ensp;${array[i].score}</p>
        <p>&ensp;<i class="fa-solid fa-award"></i></p>

      </div>
             `;
      container.innerHTML += scoreTemplate;
    }
    if (i === 2) {
      const scoreTemplate = `
      <div class="book ${backgroundColor}">
        <p>${i}&ensp;</p>
        <p>${array[i].user}&ensp;</p>
        <p>&ensp;${array[i].score}</p>
        <p>&ensp;<i class="fa-solid fa-tags"></i></p>
      </div>
             `;
      container.innerHTML += scoreTemplate;
    }
    if (i > 2) {
      const scoreTemplate = `
      <div class="book ${backgroundColor}">
        <p>${i}&ensp;</p>
        <p>${array[i].user}&ensp;</p>
        <p>&ensp;${array[i].score}</p>
      </div>
             `;
      container.innerHTML += scoreTemplate;
    }
  }
};
export default display;