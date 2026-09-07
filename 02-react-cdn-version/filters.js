//* FILTERS

// const locationFilter = document.querySelector("#filter-location");
// const levelFilter = document.querySelector("#filter-experience-level");

// locationFilter.addEventListener("change", () => {
//   const jobs = document.querySelectorAll(".job-listing-card");

//   const selectedValue = locationFilter.value;

//   jobs.forEach((job) => {
//     const location = job.dataset.location;
//     // const location = job.getAttribute("data-location");

//     const isShown = selectedValue === location;

//     job.classList.toggle("is-hidden", !isShown);
//   });
// });

// levelFilter.addEventListener("change", () => {
//   const jobs = document.querySelectorAll(".job-listing-card");

//   const selectedValue = levelFilter.value;

//   jobs.forEach((job) => {
//     const level = job.dataset.level;

//     const isShown = selectedValue === level;

//     job.classList.toggle("is-hidden", !isShown);
//   });
// });

const filters = document.querySelector(".search-filters");

filters.addEventListener("change", (e) => {
  const jobs = document.querySelectorAll(".job-listing-card");

  const locationInput = document.querySelector("#filter-location").value;
  const levelInput = document.querySelector("#filter-experience-level").value;
  const technologyInput = document.querySelector("#filter-technology").value;

  jobs.forEach((job) => {
    const dataLocation = job.dataset.location;
    const dataLevel = job.dataset.level;
    const dataTechnology = job.dataset.technology
      .split(",")
      .map((t) => t.trim());

    const isShown =
      (locationInput === "" || locationInput === dataLocation) &&
      (levelInput === "" || levelInput === dataLevel) &&
      (technologyInput === "" || dataTechnology.includes(technologyInput));

    job.classList.toggle("is-hidden", !isShown);
  });
});

//* algunos eventos interesantes
// const filterLocation = document.querySelector("#filter-location");

// //? CHANGE
// filterLocation.addEventListener("change", () => {
//   console.log(filterLocation.value);
// });

// const searchInput = document.querySelector("#jobs-search-input");

// // ?INPUT
// searchInput.addEventListener("input", () => {
//   console.log(searchInput.value);
// });

// //? BLUR
// searchInput.addEventListener("blur", () => {
//   console.log("Se dispara cuando pierde el foco");
// });

// //? KEYDOWN
// document.addEventListener("keydown", (e) => {
//   console.log("Tecla presionada: ", e.key);
//   console.log("Esta pulsada la tecla shift?", e.shiftKey);
//   console.log("Esta pulsada la tecla control?", e.ctrlKey);
// });

//* FORM
// const searchForm = document.querySelector("#jobs-search-form");

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   console.log("submit");
// });
