const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const years = document.getElementById("years");

const calButton = document.getElementById("submit");
const resultDiv = document.getElementById("result");
calButton.addEventListener("click", (e) => {
  const result = (amount.value * rate.value * years.value)/100;
  resultDiv.innerText = `Total amount: ${result}`;
});
