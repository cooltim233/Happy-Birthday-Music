const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnNo.addEventListener("mouseover", () => {
  const containerRect = container.getBoundingClientRect();
  const btnRect = btnNo.getBoundingClientRect();

  const maxTop = container.clientHeight - btnNo.offsetHeight;
  const maxLeft = container.clientWidth - btnNo.offsetWidth;

  const newTop = getRandomNumber(0, maxTop);
  const newLeft = getRandomNumber(0, maxLeft);

  btnNo.style.position = "absolute";
  btnNo.style.top = `${newTop}px`;
  btnNo.style.left = `${newLeft}px`;
});

btnYes.addEventListener("click", () => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});
