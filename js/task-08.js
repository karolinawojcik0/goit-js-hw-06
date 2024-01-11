const loginForm = document.querySelector(".login-form");
const objLogin = {};

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("Wypełnij wszystkie pola!");
  } else {
    objLogin.email = emailInput.value.trim();
    objLogin.password = passwordInput.value.trim();
    console.log(objLogin);
  }
  loginForm.reset();
});