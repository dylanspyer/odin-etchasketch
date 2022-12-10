//Container for grid cells
const gridContainer = document.querySelector(".gridContainer");
//Controls buttons
const controlsButtons = document.querySelectorAll(".controlsButtons");
const clearButton = document.querySelector(".clearButton");
const ninetiesButton = document.querySelector(".ninetiesButton");
const rainbowButton = document.querySelector(".rainbowButton");
const colorButton = document.querySelector(".colorButton");
const eraserButton = document.querySelector(".eraserButton");
//Slider
const sizeValue = document.querySelector(".sizeValue");
const sizeSlider = document.querySelector(".sizeSlider");
const colorPicker = document.querySelector(".colorPicker");
//Event Listeners
//Default values
let defaultGridSize = 16;
//Current values
let currentSize = defaultGridSize;

//Create the grid
function createGridBoxes(size) {
  for (let i = 1; i <= size * size; i++) {
    let gridCell = document.createElement("div");
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.appendChild(gridCell).classList.add("gridCell");
  }
}

//Change grid size
function updateSizeValue(value) {
  sizeValue.textContent = `${value} x ${value}`;
}
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

sizeSlider.addEventListener("change", function () {
  clearGrid();
  createGridBoxes(sizeSlider.value);
  ninetiesColors();
  rainbowColors();
  eraseOneGridCell();
});

//Add active state for buttons
for (let i = 0; i < controlsButtons.length; i++) {
  controlsButtons[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

//color mode button
colorPicker.oninput = colorPickerMode();
colorButton.addEventListener("click", colorPickerMode);

function colorPickerMode() {
  const gridCells = gridContainer.querySelectorAll(".gridCell");
  gridCells.forEach((gridCell) =>
    gridCell.addEventListener("mouseover", (event) => {
      if (event.buttons === 1) {
        gridCell.style.background = colorPicker.value;
      }
    })
  );
}

//Rainbow mode
rainbowButton.addEventListener("click", () => rainbowColors());

function rainbowColors() {
  const gridCells = gridContainer.querySelectorAll(".gridCell");
  gridCells.forEach((gridCell) =>
    gridCell.addEventListener("mouseover", (event) => {
      let color = [
        "#ff0000",
        "#ffa500",
        "#ffff00",
        "#008000",
        "#0000ff",
        "#4b0082",
        "#ee82ee",
      ];
      if (event.buttons === 1) {
        gridCell.style.background =
          color[Math.floor(Math.random() * color.length)];
      }
    })
  );
}

//90s colors button
function ninetiesColors() {
  const gridCells = gridContainer.querySelectorAll(".gridCell");
  ninetiesButton.addEventListener("click", () => {
    gridCells.forEach((gridCell) =>
      gridCell.addEventListener("mouseover", (event) => {
        let color = ["#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#F8E924"];
        if (event.buttons === 1) {
          gridCell.style.background =
            color[Math.floor(Math.random() * color.length)];
        }
      })
    );
  });
}

//Eraser button
function eraseOneGridCell() {
  const gridCells = gridContainer.querySelectorAll(".gridCell");
  eraserButton.addEventListener("click", () => {
    gridCells.forEach((gridCell) =>
      gridCell.addEventListener("mouseover", (event) => {
        if (event.buttons === 1) {
          gridCell.style.background = "#d2d1d1";
        }
      })
    );
  });
}

//Clear button aka "Shake"
function clearGrid() {
  // while (gridContainer.firstChild) {
  //   gridContainer.removeChild(gridContainer.firstChild);
  // }
  // createGridBoxes(sizeSlider.value);

  gridContainer.innerHTML = "";
}
clearButton.addEventListener("click", reloadGrid);

////experimenting
function reloadGrid() {
  clearGrid();
  createGridBoxes(currentSize);
  ninetiesColors();
  rainbowColors();
  eraseOneGridCell();
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

function changeSize(value) {
  setCurrentSize(value);
  updateSizeValue(value);
  reloadGrid();
}

//Default
window.onload = () => {
  createGridBoxes(defaultGridSize);
  ninetiesColors();
  // rainbowColors();
  eraseOneGridCell();
};
