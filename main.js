//create a function that creates 16 * 16 div elements with a class
//style that class to be a small cube
const gridContainer = document.querySelector(".gridContainer");
function createGridBoxes() {
  for (let i = 1; i <= 256; i++) {
    let box = document.createElement("div");
    let color = [, "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
    box.className = "box";
    gridContainer.appendChild(box);
    box.style.cssText =
      "border: 1px solid black; height 25px; width 25px; padding: 20px";
    box.addEventListener("click", function () {
      box.style.background = color[Math.floor(Math.random() * color.length)];
    });
  }
}

createGridBoxes();
