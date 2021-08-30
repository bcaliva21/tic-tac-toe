console.log('hello world');

let squares = document.getElementsByClassName('square');

for (const square of squares) {
  let clickTracker = true;
  square.addEventListener('click',(e) => {
    square.innerHTML = (clickTracker) ? 'X' : 'O';
    clickTracker = !clickTracker;
  })
}

console.log(squares);