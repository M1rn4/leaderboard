const newLead = async (user = '', score = 0, id) => {
  const apiNn = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
  const leader = {
    user,
    score,
  };
  await fetch(await apiNn, {
    method: 'POST',
    body: JSON.stringify(leader),
    headers: {
      'Content-type': 'application/json; chartset=UT-8',
    },
  })
    .then((response) => response.json())
    .then((data) => data.result);
};
export default newLead;