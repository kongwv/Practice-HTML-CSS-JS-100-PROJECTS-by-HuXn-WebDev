let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let list = document.getElementById("list");
let arrowicon = document.getElementById("arrowicon");
let options = document.getElementsByClassName("options");

selectField.addEventListener("click", () => {
  arrowicon.classList.toggle("rotate");
  list.classList.toggle("hide");
});

for (let option of options) {
  option.addEventListener("click", function () {
    selectText.innerHTML = this.textContent;
    arrowicon.classList.toggle("rotate");
    list.classList.toggle("hide");
  });
}
