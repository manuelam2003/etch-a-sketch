const container = document.querySelector("#container");
let divs = document.querySelectorAll(".grid-item");
const sizeBtn = document.querySelector("#size");
const clearBtn = document.querySelector("#clear");
const colorPicker = document.querySelector("#color-picker");
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;
const fill = document.querySelector("#fill");

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

function sizeBtnf() {
  sizeBtn.addEventListener("click", () => {
    do {
      var size = prompt("Desired size?");
    } while (size < 1 || size > 64);
    clearGrid();
    makeGrid(size);
    etchSketch();
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

colorPicker.oninput = function () {
  etchSketch(this.value);
};

fill.onclick = () => fillGrid();

makeGrid(16);
clearBtnf();
