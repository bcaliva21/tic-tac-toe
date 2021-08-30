let squares = document.getElementsByClassName('square');
let message = document.querySelector('.messages');
let reset = document.querySelector('#reset-btn');
let clickTracker = true;
let counter = 0;
let board = {
  row1: ['1','2','3'],
  row2: ['4','5','6'],
  row3: ['7','8','9']
};


for (const square of squares) {
  square.addEventListener('click',(e) => {
    const currentValue = square.innerHTML;
    square.innerHTML = handleClickDisplay(square, clickTracker);

    if (currentValue !== square.innerHTML) {
      counter++;
      clickTracker = !clickTracker;
    }
    updateBoard(board, e.target);

    if (counter > 4) {
      evaluateBoard(board);
    }
    if (counter === 9) {
      message.innerHTML = 'This round is a draw!'
    }
  })
}

reset.addEventListener('click', (e) => {
  if (confirm('Are you sure you want to reset the match?')) {
    counter = 0;
    board = {
      row1: ['1','2','3'],
      row2: ['4','5','6'],
      row3: ['7','8','9']
    };
    for (const square of squares) {
      square.innerHTML = '';
    }
    message.innerHTML = '';
  }
})

const handleClickDisplay = (element, boolean) => {
  if (element.innerHTML !== '') {
    return element.innerHTML;
  }
  if (boolean) {
    return 'X';
  } else {
    return 'O';
  }
}

const evaluateBoard = (board) => {
  let winner = false;
  let winningPlayer = null;
  const row1 = board.row1;
  const row2 = board.row2;
  const row3 = board.row3;

  for (const key in board) {
    const row = board[key];

    if (row[0] === row[1] && row[0] === row[2]) {
      winner = true;
      winningPlayer = row[0];
      break;
    }
  }

  for(const index in row1) {
    if (row1[index] === row2[index] && row1[index] === row3[index]) {
      winner = true;
      winningPlayer = row1[index];
    }
  }


  if (row1[0] === row2[1] && row1[0] === row3[2]) {
    winner = true;
    winningPlayer = row1[0];
  }

  if (row1[2] === row2[1] && row1[2] === row3[0]) {
    winner = true;
    winningPlayer = row1[2];
  }

  if (winner) {
    console.log('WinnerPlayer: ', winningPlayer);
    message.innerHTML = `Player-${winningPlayer} wins!`
  }
}

const updateBoard = (board, element) => {
  if (element.innerHTML !== '') {
    if (element.id > 6) {
      let index = board.row3.indexOf(element.id);
      board.row3.splice(index, 1, element.innerHTML);
    }
    if (element.id > 3 && element.id < 7) {
      let index = board.row2.indexOf(element.id);
      board.row2.splice(index, 1, element.innerHTML);
    }
    if (element.id < 4) {
      let index = board.row1.indexOf(element.id);
      board.row1.splice(index, 1, element.innerHTML);
    }

  }
}