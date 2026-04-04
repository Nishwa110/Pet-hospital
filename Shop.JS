const dogsBtn = document.getElementById("dogs-btn");

dogsBtn.addEventListener("click", function () {
  document
    .getElementById("dogs-section")
    .scrollIntoView({ behavior: "smooth" });
});
