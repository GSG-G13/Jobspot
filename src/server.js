let url =
  "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=99d1457c&app_key=3f231e4166d93072210889237c3b5f61&what=teacher";
fetch(url)
  .then((res) => res.json())
  .then(console.log);
