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

const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const overlay = document.getElementById("overlay");
const closeCart = document.getElementById("closeCart");


cartBtn.onclick = function () {
  cartSidebar.classList.add("active");
  overlay.classList.add("active");
};


closeCart.onclick = function () {
  cartSidebar.classList.remove("active");
  overlay.classList.remove("active");
};


overlay.onclick = function () {
  cartSidebar.classList.remove("active");
  overlay.classList.remove("active");
};
