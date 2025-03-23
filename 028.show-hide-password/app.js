const input = document.querySelector("input");
const togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", () => {
  input.type === "password" ? (input.type = "text") : (input.type = "password");
  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-eye-slash");
});

// eye.addEventListener("click", () => {
//   input.type = "text";
//   eye.style.display = "none";
//   eyeSlash.style.display = "inline";
// });

// eyeSlash.addEventListener("click", () => {
//   input.type = "password";
//   eye.style.display = "inline";
//   eyeSlash.style.display = "none";
// });
