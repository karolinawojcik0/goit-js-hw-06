function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener('click', function() {
      const newColor = getRandomHexColor();
      document.body.style.backgroundColor = newColor;
      colorSpan.textContent = newColor;
    });