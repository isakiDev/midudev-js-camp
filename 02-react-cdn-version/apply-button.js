// *JOBS
const buttons = document.querySelectorAll(".button-apply-job");

// TODO: choice one
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     button.textContent = "Aplicado";
//     button.classList.add("is-applied");
//     button.disabled = true;
//   });
// });

// TODO: choice two (better)

const jobsListingSection = document.querySelector(".jobs-listings");

jobsListingSection?.addEventListener("click", (e) => {
  const element = e.target;

  if (element.classList.contains("button-apply-job")) {
    element.textContent = "Aplicado";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});
