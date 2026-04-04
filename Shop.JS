const dogsBtn = document.getElementById("dogs-btn");

dogsBtn.addEventListener("click", function () {
  document
    .getElementById("dogs-section")
    .scrollIntoView({ behavior: "smooth" });
});
const catsBtn = document.getElementById("cats-btn");

catsBtn.addEventListener("click", function () {
  document
    .getElementById("cats-section")
    .scrollIntoView({ behavior: "smooth" });
});
