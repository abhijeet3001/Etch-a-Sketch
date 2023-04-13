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

let isEraserOn = false;
function eraseBox(btn) {
  console.log(btn.target)
  console.log(isEraserOn);
  const squares = document.querySelectorAll(".square");
  if (isEraserOn) {
    btn.target.classList.toggle('active');
    console.log("hello");
    isEraserOn = false;
    squares.forEach((square) => square.addEventListener("mouseover", addColor));

    return;
  }
  btn.target.classList.toggle('active');

  squares.forEach((square) =>
    square.removeEventListener("mouseover", addColor)
  );
  squares.forEach((square) =>
    square.addEventListener(
      "mouseover",
      (e) => (e.target.style.backgroundColor = "white")
    )
  );
  isEraserOn = true;
  return;
}

function clickButton(e) {
  if (e.target.id === "grid") getGridSize();
  if (e.target.id === "color") getColor();
  if (e.target.id === "clear") clearGrid();
  if (e.target.id === "eraser") eraseBox(e);
}

const btn = document.querySelectorAll(".btn");
btn.forEach((button) => button.addEventListener("click", clickButton));
