// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// function createBoxes() {
//     const inputAmount = document.getElementById('inputAmount');
//     const boxesContainer = document.getElementById('boxes');

//     // Clear previous boxes
//     boxesContainer.innerHTML = '';

//     const amount = parseInt(inputAmount.value);

//     for (let i = 0; i < amount; i++) {
//       const box = document.createElement('div');
//       box.style.width = `${30 + i * 10}px`;
//       box.style.height = `${30 + i * 10}px`;
//       box.style.backgroundColor = getRandomHexColor();
//       box.classList.add('box');
//       boxesContainer.appendChild(box);
//     }
//   }

//   function destroyBoxes() {
//     const boxesContainer = document.getElementById('boxes');
//     boxesContainer.innerHTML = '';
//   }