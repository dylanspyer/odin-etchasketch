//create a function that creates 16 * 16 div elements with a class
//style that class to be a small cube
const gridContainer = document.querySelector(".gridContainer");
const clearButton = document.querySelector(".clearButton");

//Create the grid
function createGridBoxes() {
  for (let i = 1; i <= 256; i++) {
    let gridCell = document.createElement("div");
    let color = [, "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
    gridCell.className = "gridCell";
    gridContainer.appendChild(gridCell);
    gridCell.addEventListener("mouseover", function () {
      gridCell.style.background =
        color[Math.floor(Math.random() * color.length)];
    });
  }
}

//Clear button
function clearGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  createGridBoxes();
}
clearButton.addEventListener("click", clearGrid);

createGridBoxes();
