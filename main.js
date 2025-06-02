let pop = document.querySelector(".pop");
let btn = document.querySelector(".btn");

function openP() {
  pop.classList.add("open");
  btn.style.display = "none";
}

function closeP() {
  pop.classList.remove("open");
  btn.style.display = "block";
}
