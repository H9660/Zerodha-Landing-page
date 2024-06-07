const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const years = document.getElementById("years");
const menu = document.getElementById("menu");
const sideMenu = document.getElementById('side-menu')
const calButton = document.getElementById("submit");
const resultDiv = document.getElementById("result");
const closeMenu = document.getElementById("close-menu");
calButton.addEventListener("click", (e) => {
  const result = (amount.value * rate.value * years.value) / 100;
  resultDiv.innerText = `Total amount: ${result}`;
});

menu.addEventListener("click", (e) => {
  const image = e.target;

  // Add the fade-out class
  image.classList.add("fade-out");

  // Wait for the fade-out animation to complete
  image.addEventListener("animationend", function handleFadeOut() {
    // Remove the event listener to avoid repeated triggers
    image.removeEventListener("animationend", handleFadeOut);

    // Change the image source
    image.src = "images/menu.png";
    // Add the fade-in class
    image.classList.remove("fade-out");
    image.classList.add("fade-in");

    // Remove the fade-in class after animation completes
    image.addEventListener("animationend", function handleFadeIn() {
      image.classList.remove("fade-in");
      image.removeEventListener("animationend", handleFadeIn);
    });

    sideMenu.classList.toggle('visible');
  });
});

closeMenu.addEventListener('click', ()=>{
  sideMenu.classList.remove('visible');
})