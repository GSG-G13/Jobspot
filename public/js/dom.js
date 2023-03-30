const cardsContainer = document.querySelector(".cards-container");
const renderJobCard = (res) => {
  const card = document.createElement("div");
  card.classList.add("card");
  cardsContainer.append(card);

  const jobDescriptionContainer = document.createElement("div");
  jobDescriptionContainer.classList.add("job-descripton-container");

  const companyContainer = document.createElement("div");
  companyContainer.classList.add("company-container");

  const companyLogo = document.createElement("img");
  companyLogo.classList.add("logo");
  companyLogo.setAttribute("src", "../images/job.png");
  companyLogo.setAttribute("alt", "logo");
  jobDescriptionContainer.append(companyLogo);
  companyContainer.append(companyLogo);

  const companyName = document.createElement("span");
  companyName.classList.add("company-name");
  companyName.textContent = res.company["display_name"];
  companyContainer.append(companyName);
  jobDescriptionContainer.append(companyContainer);

  const jobTitle = document.createElement("h3");
  jobTitle.classList.add("job-title");
  jobTitle.textContent = res.title;
  jobDescriptionContainer.append(jobTitle);

  const jobDescription = document.createElement("p");
  jobDescription.classList.add("job-description");
  let cont = res.description.split("").slice(0, 120).join("");
  jobDescription.textContent = cont;

  // jobDescription.textContent = res.description.split(" ").slice(0, 20).join("");
  jobDescriptionContainer.append(jobDescription);

  const salary = document.createElement("div");
  salary.classList.add("salary");
  jobDescriptionContainer.append(salary);

  const maxSalary = document.createElement("span");
  maxSalary.classList.add("max-salary");
  maxSalary.textContent = `${res["salary_min"]}$ - `;
  salary.append(maxSalary);

  const minSalary = document.createElement("span");
  minSalary.classList.add("min-salary");
  minSalary.textContent = `${res["salary_max"]}$`;
  salary.append(minSalary);

  const jobDetails = document.createElement("div");
  jobDetails.classList.add("job-details");

  const contract = document.createElement("div");
  contract.classList.add("contract");
  jobDetails.append(contract);

  const contractTime = document.createElement("span");
  contractTime.classList.add("contract-time");
  contractTime.textContent = "permanent";
  contract.append(contractTime);

  const contractType = document.createElement("span");
  contractType.classList.add("contract-type");
  contractType.textContent = "full time";
  contract.append(contractType);

  const jobLink = document.createElement("a");
  jobLink.classList.add("job-link");
  jobLink.setAttribute("href", res["redirect_url"]);
  jobLink.textContent = "Apply";
  jobDetails.append(jobLink);

  card.append(jobDescriptionContainer);
  card.append(jobDetails);
  cardsContainer.append(card);
};
