import Config from "./config.js";
import * as Canvas from "./canvas.js";
const gridWidth = Canvas.main.width / Config.size;
const ctx = Canvas.ctx;
// function for render all grid in the canvas
export function renderAll() {
  let checkeredFlag = false;
  // this iterator for making grid in the canvas by using config.size for looping count
  for (let i = 0; i < Config.size; i++) {
    // this iterator for making grid in the canvas by using config.size for looping count
    for (let j = 0; j < Config.size; j++) {
      let index = Config.size * i + j;
      checkeredFlag = autoCheckeredGrid(checkeredFlag, Config.size, index);
      ctx.beginPath();
      ctx.fillStyle = checkeredFlag ? "#24A7C3" : "#11D4FF";
      ctx.fillRect(gridWidth * j, gridWidth * i, gridWidth, gridWidth);
      ctx.rect(gridWidth * j, gridWidth * i, gridWidth, gridWidth);
    }
  }
}
// for render one part
export function partialRender(event) {
  let y = Math.floor(event.offsetX / (event.target.offsetHeight / Config.size));
  let x = Math.floor(event.offsetY / (event.target.offsetHeight / Config.size));
  let index = Config.size * y + x;
  let checkeredFlag;
  checkeredFlag = autoCheckeredGrid(checkeredFlag, Config.size, index);
  ctx.beginPath();
  ctx.fillStyle = checkeredFlag ? "#D2D2D2" : "#E1E0E0";
  ctx.fillRect(gridWidth * y, gridWidth * x, gridWidth, gridWidth);
  ctx.rect(gridWidth * y, gridWidth * x, gridWidth, gridWidth);
}
// for make automatic checkered style depend on the grid size in config and some parameter
function autoCheckeredGrid(currentCheckeredFlag, size, index) {
  // check number in size is even or odd
  if (size % 2 == 0) {
    // check index divided by size is even or odd
    if (Math.floor(index / size) % 2 == 0) {
      // if index is even return true
      return (currentCheckeredFlag = index % 2 == 0);
    } else {
      // if index is even return false
      return (currentCheckeredFlag = index % 2 != 0);
    }
  } else {
    // if index is even return false
    return (currentCheckeredFlag = index % 2 != 0);
  }
}
