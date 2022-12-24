const newId = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    // eslint-disable-next-line no-console
    method: 'POST',
    body: JSON.stringify({ name: 'New game' }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  // eslint-disable-next-line no-console
  });
  const data = await res.json();
  const apikey = await data.result.split(' ');
  const apikeyId = await apikey[3];
  return apikeyId;
};

export default newId;