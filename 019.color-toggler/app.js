let toggler = document.getElementById("switch");

toggler.addEventListener("click", () => {
  document.body.style.background = toggler.checked ? "black" : "white";
});
