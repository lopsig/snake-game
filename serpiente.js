// 1. Capturamos el canvas y su contexto de dibujo
const canvas = document.getElementById("canvasJuego");
const ctx = canvas.getContext("2d");

//CONSTANTES
const cellSize = 25;

function drawAll() {
  cleanCanvas();
  drawBoard();
  fillCell(5,5)
  fillCell(10,2)
  fillCell(7,19)
  fillCell(23,7)
  fillCell(0,12)
  fillCell(23,0)
}

function cleanCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// DIBUJAR CUADRICULA
const drawBoard = () => {

  ctx.strokeStyle = "gray";
  
  for (let i = 25; i < canvas.width; i += cellSize) {
    ctx.beginPath();
    ctx.moveTo(i, 0)
    ctx.lineTo(i, canvas.height)
    ctx.stroke()
  }

  for (let j = 0; j < canvas.height; j += cellSize) {
    ctx.beginPath();
    ctx.moveTo(0, j);
    ctx.lineTo(canvas.width, j);
    ctx.stroke();
  }

};

// PINTAR PARTE

const fillCell = (lineX, lineY) => {
  ctx.fillStyle = "red"
  ctx.fillRect(lineX*cellSize, lineY*cellSize, cellSize, cellSize);
  ctx.strokeStyle = "gray";
  ctx.strokeRect(lineX * cellSize, lineY * cellSize, cellSize, cellSize);
}

drawAll();
