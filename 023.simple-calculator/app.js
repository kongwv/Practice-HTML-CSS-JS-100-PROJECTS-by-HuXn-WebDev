document.getElementById("btn").addEventListener("click", () => {
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let resultnum = document.querySelector(".resultnum");
  let operator = document.getElementById("selectOp").value;

  switch (operator) {
    case "plus":
      resultnum.innerHTML = Number(num1) + Number(num2);
      break;
    case "minus":
      resultnum.innerHTML = Number(num1) - Number(num2);
      break;
    case "multiply":
      resultnum.innerHTML = Number(num1) * Number(num2);
      break;
    case "devide":
      resultnum.innerHTML = Number(num1) / Number(num2);
      break;
  }
});
