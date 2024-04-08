const btn = document.querySelector(".subscribe-btn");
const modal = document.querySelector(".modal");
const container = document.querySelector(".container");
const input_email = document.querySelector(".input-email");

btn.addEventListener("click", () => {
  if (input_email.value != "") {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    container.style.backgroungColor = "rgb(0, 0, 0)";
    //   modal.classList.add("active");
  } else {
    alert("You have to pass your email.");
  }
});

const btn2 = document.querySelector(".dismiss");
btn2.addEventListener("click", () => {
  modal.style.display = "none";
});

input_email.addEventListener("focus", () => {
  if (input_email.value === "") {
    input_email.style.borderColor = "red";
  } else {
    input_email.style.borderColor = "black";
  }
});
