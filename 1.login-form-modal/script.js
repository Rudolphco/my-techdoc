const closeForm = document.querySelector(".closeForm");
const formContainer = document.querySelector(".login-form");
const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", (e) => {
  formContainer.classList.toggle("active");
});

closeForm.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.toggle("active");
});
