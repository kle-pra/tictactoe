const positions = document.querySelectorAll('.board div');
const title = document.querySelector('.title');
let player = 1;
let gameOver = false;
positions.forEach(pos => pos.addEventListener('click', mark));

function mark(event) {
  if (event.target.classList.contains('cross') ||
    event.target.classList.contains('circle') ||
    gameOver) {
    return;
  }

  if (player == 1) {
    event.target.classList.add('cross');
  } else {
    event.target.classList.add('circle');
  }

  if (gameEnd()) {
    gameOver = true;
    title.textContent = `Player ${player}'s won!`;
  } else {
    player = player == 2 ? 1 : 2;
    title.innerHTML = `Player ${player}'s turn.`;
  }
}

function gameEnd() {
  return winningCommnination([0, 1, 2]) ||
    winningCommnination([3, 4, 5]) ||
    winningCommnination([6, 7, 8]) ||
    winningCommnination([0, 3, 6]) ||
    winningCommnination([1, 4, 7]) ||
    winningCommnination([2, 5, 8]) ||
    winningCommnination([0, 4, 8]) ||
    winningCommnination([2, 4, 6]);
}

function winningCommnination(indeces) {
  let crossesWin = true;
  let circlesWin = true;

  for (let i of indeces) {
    if (!positions[i].classList.contains('cross')) {
      crossesWin = false;
    }
    if (!positions[i].classList.contains('circle')) {
      circlesWin = false;
    }
  }
  return circlesWin || crossesWin;
}


