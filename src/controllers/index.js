const fetch = require("node-fetch");
const api_key = process.env.API_KEY;
const api_id = process.env.API_ID;

const jobSearch = (req, res) => {
  let url = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${api_id}&app_key=${api_key}&what=${req.params.word}`;
  fetch(url)
    .then((res) => res.json())
    .then(({ results }) => res.send(results))
    .catch((err) => console.log(err));
};

module.exports = jobSearch;
