console.log('hello world');

let squares = document.getElementsByClassName('square');

let clickTracker = true;
let counter = 0;

for (const square of squares) {
  square.addEventListener('click',(e) => {
    // square.innerHTML = (clickTracker) ? 'X' : 'O';
    square.innerHTML = handleClickDisplay(square, clickTracker);
    clickTracker = !clickTracker;
    counter++;
    console.log(boardEvaluator());
  })
}

const handleClickDisplay = (element, boolean) => {
  if(boolean) {
    return 'X';
  } else {
    return 'O';
  }
}

/*
if every other value of the array matches it's game over
if there is a string of three values that match it's game over



TODO AFTER LUNCH
pass in an id to the board eval function
use that to change the value in the board
see it that helps
*/

const boardEvaluator = (counter, id) => {
  const board = {
    row1: ['1','2','3'],
    row2: ['4','5','6'],
    row3: ['7','8','9']
  };
  console.log('start: ', board);
  for (const square of squares) {
    if (square.innerHTML !== '') {
      if(square.id > 6) {
        console.log(square.id);
        let index = board.row3.indexOf(square.id);
        board.row3.splice(index, 1, square.innerHTML);
      }
    }
  }
  console.log('after change: ', board);
}

console.log(squares);