const container = document.querySelector("#container");
let divs = document.querySelectorAll(".grid-item");
const clearBtn = document.querySelector("#clear");
const colorPicker = document.querySelector("#color-picker");
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;
const fill = document.querySelector("#fill");
const eraser = document.querySelector("#eraser");
const colorBtn = document.querySelector("#colorbtn");
const rainbow = document.querySelector("#rainbow");

function makeGrid(numDivs) {
  numCells = numDivs ** 2;
  container.style["grid-template-columns"] = `repeat(${numDivs},auto)`;

  while (numCells > 0) {
    let div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("grid-item");
    numCells--;
  }
  etchSketch();
}

function clearGrid() {
  const divs = document.querySelectorAll(".grid-item");
  divs.forEach((item) => {
    container.removeChild(item);
  });
}

function etchSketch(color = "black") {
  document.querySelectorAll(".grid-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = color;
    });
  });
}

function clearBtnf() {
  clearBtn.addEventListener("click", () => {
    clearGrid();
    etchSketch();
  });
}

function fillGrid(color = "black") {
  document.querySelectorAll(".grid-item").forEach((item) => {
    item.style.backgroundColor = colorPicker.value;
  });
}

slider.oninput = function () {
  output.innerHTML = this.value;
  clearGrid();
  makeGrid(this.value);
  etchSketch();
};

selectedColor = "black";

colorPicker.oninput = function () {
  etchSketch('#ededed')
};

colorBtn.onclick = function () {
  etchSketch(colorPicker.value);
};


fill.onclick = () => fillGrid();

eraser.onclick = () => {
  document.querySelectorAll(".grid-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = "#ededed";
    });
  });
};

makeGrid(16);
clearBtnf();
