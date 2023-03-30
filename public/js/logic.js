const submitBtn = document.querySelector(".inputForm-searchBtn");
const jobInput = document.querySelector(".inputForm-inputField");
submitBtn.addEventListener("click", () => {
  const { value } = jobInput;
  fetch(`/jobs/${value}`)
    .then((res) => res.json())
    .then((data) => data.forEach(renderJobCard))
    .catch((err) => console.log(err));
});
