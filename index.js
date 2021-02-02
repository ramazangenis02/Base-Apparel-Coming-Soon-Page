//variables
const warning = document.getElementById("warning");
const send = document.getElementById("send");
const error = document.querySelector(".error");
const input = document.querySelector("#input");

send.addEventListener("click", e => {
  e.preventDefault();

  if (input.value === "") {
    warning.style.display = "block";
    error.style.display = "block";
    input.style.borderColor = "hsl(0, 93%, 68%)";

    warning.innerHTML = "Email cannot be empty!";
  } else {
    warning.style.display = "none";
    error.style.display = "none";
    input.style.borderColor = "hsl(0, 36%, 70%)";
  }

  if (input.validity.valid === false) {
    warning.style.display = "block";
    error.style.display = "block";
    input.style.borderColor = "hsl(0, 36%, 70%)";
    warning.innerHTML = "Please provide a valid email!";
  }
});
