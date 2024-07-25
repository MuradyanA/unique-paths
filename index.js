const prompt = require('prompt-sync')();
let grid = [];

for (let i = 0; i <= 1; i++) {
    do{
        let colsOrRows = prompt(`Enter the numbers of ${i==0 ? 'rows' : 'columns'} `) - 1;
        if (!isNaN(colsOrRows)) {
          grid[i] = colsOrRows;
        } else {
          console.log('Please enter a valid number!')
        }
    }while(grid.length != i + 1)
}

let pathCount = 0;

function calcWays(currentRow, currentColumn) {
  if (grid[0] == currentRow && grid[1] == currentColumn) {
    pathCount += 1;
  } else if (currentRow < grid[0] && currentColumn < grid[1]) {
    calcWays(currentRow + 1, currentColumn);
    calcWays(currentRow, currentColumn + 1);
  } else if (currentRow == grid[0]) {
    calcWays(currentRow, currentColumn + 1);
  } else if (currentColumn == grid[1]) {
    calcWays(currentRow + 1, currentColumn);
  }
}

calcWays(0, 0);
console.log(pathCount);
