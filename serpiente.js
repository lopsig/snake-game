// Capturamos el canvas y su contexto de dibujo
const canvas = document.getElementById("canvasJuego");
const ctx = canvas.getContext("2d");

//CONSTANTES
const CELL_SIZE = 25;
const SNAKE = [
  {x: 12, y: 7},
  {x: 11, y: 7},
  {x: 10, y: 7},
  {x: 9, y: 7},
  {x: 9, y: 6},
  {x: 9, y: 5},
  {x: 9, y: 4}
]


// DIBUJAR TODO
function drawAll() {
  cleanCanvas();
  drawBoard();
  fillSnake()
}


//LIMPIAR CANVAS
function cleanCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// DIBUJAR CUADRICULA
const drawBoard = () => {

  ctx.strokeStyle = "gray";
  
  for (let i = 25; i < canvas.width; i += CELL_SIZE) {
    ctx.beginPath();
    ctx.moveTo(i, 0)
    ctx.lineTo(i, canvas.height)
    ctx.stroke()
  }

  for (let j = 0; j < canvas.height; j += CELL_SIZE) {
    ctx.beginPath();
    ctx.moveTo(0, j);
    ctx.lineTo(canvas.width, j);
    ctx.stroke();
  }

};


// PINTAR PARTE
const fillCell = (lineX, lineY) => {
  ctx.fillStyle = "green"
  ctx.fillRect(lineX*CELL_SIZE, lineY*CELL_SIZE, CELL_SIZE, CELL_SIZE);
  ctx.strokeStyle = "gray";
  ctx.strokeRect(lineX * CELL_SIZE, lineY * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}


//CREACION SERPIENTE
const fillSnake = () => {
  SNAKE.forEach(element => {
    fillCell(element.x, element.y)
    
  });

  ctx.fillStyle = "yellow";
  ctx.fillRect(
    SNAKE[SNAKE.length-1].x * CELL_SIZE,
    SNAKE[SNAKE.length-1].y * CELL_SIZE,
    CELL_SIZE,
    CELL_SIZE,
  );
  ctx.strokeStyle = "yellow";
  ctx.strokeRect(
    SNAKE[SNAKE.length - 1].x * CELL_SIZE,
    SNAKE[SNAKE.length - 1].y * CELL_SIZE,
    CELL_SIZE,
    CELL_SIZE,
  );
}

drawAll();
