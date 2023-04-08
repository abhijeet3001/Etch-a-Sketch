const container = document.querySelector(".container");
let gridSize = 16;

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
