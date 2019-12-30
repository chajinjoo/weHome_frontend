const fetchAPI = (...req) =>
  fetch(...req)
    .then(res => res.json())
    .catch(err => {
      console.log(err);
      throw err;
    });

export default fetchAPI;
