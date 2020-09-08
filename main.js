const parent = document.querySelector(".modal-parent"),
  btn = document.querySelector("button"),
  X = document.querySelector(".X"),
  section = document.querySelector("section");

btn.addEventListener("click", appear);

function appear() {
  parent.style.display = "block";
  section.style.filter = "blur(10px)";
}
