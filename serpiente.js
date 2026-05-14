// 1. Capturamos el canvas y su contexto de dibujo
const canvas = document.getElementById("canvasJuego");
const ctx = canvas.getContext("2d");

//CONSTANTES
const cellSize = 25;

function drawAll() {
  cleanCanvas();
  drawBoard();
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

drawAll();
