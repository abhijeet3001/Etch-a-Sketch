const container = document.querySelector(".container");
let gridSize = 16;

function createGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const sq = document.createElement("div");
    sq.classList.add("square");
    sq.setAttribute("id", `b${i}`);
    if (i < gridSize) sq.classList.add("top");
    if (i % gridSize == gridSize - 1) sq.classList.add("right");
    container.appendChild(sq);
  }

  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    let side = (500 - gridSize - 1) / gridSize;
    square.style.width = side + "px";
    square.style.height = side + "px";
  });

  squares.forEach((square) => square.addEventListener("mouseover", addColor));
}

createGrid(gridSize);

function addColor(e) {
  console.log(e.target.id);
  const box = document.querySelector(`#${e.target.id}`);
  box.style.backgroundColor = "black";
}

function getGridSize() {
  let newGridSize = prompt("Enter a new size of Grid");
  if (newGridSize > 100) {
    alert("Only value till 100 are supported");
    return;
  }
  gridSize = newGridSize;
  const squareDiv = document.querySelectorAll(".square");
  // Removing the previous grid
  squareDiv.forEach((div) => div.remove());
  createGrid(gridSize);
}

function clearGrid() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => (square.style.backgroundColor = "white"));
}

function clickButton(e) {
  if (e.target.id === "grid") getGridSize();
  if (e.target.id === "color") getColor();
  if (e.target.id === "clear") clearGrid();
}

const btn = document.querySelectorAll(".btn");
btn.forEach((button) => button.addEventListener("click", clickButton));
