var player = null;
var winner = null;
const validSequences = [ //valid sequences to win
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const labPlayer = document.getElementById('player');
const playerTurn = document.getElementById('player-turn');
const squares = document.getElementsByClassName('square');

changePlayer('X');

/**
 * 
 * @param {String} id identification of choosen element (square in game)
 * @returns 
 */
function chooseSquare(id) {
  console.log(`Square ${id} clicked`);
  let square = document.getElementById(id);

  if (square.innerHTML !== '-') return;
  if (winner !== null) return;

  square.innerHTML = player;

  if (player === 'X') {
    square.style.color = 'blue';
    player = 'O';
  } else {
    square.style.color = 'red';
    player = 'X';
  }

  if (hasWinner()) {
    labPlayer.innerHTML = 'Vencedor: ';
    //labPlayer.classList.add('blink');
    //playerTurn.classList.add('blink');
    console.log(`The winner is ${winner}`)
    return
  }

  changePlayer(player);

}
/**
 * Change player simbol value in each turn
 * @param {String} value Pass 'X' or 'O'
 */
function changePlayer(value) {
  player = value;
  playerTurn.innerHTML = player

}


/**
 * this function checks if sequence is valid
 * @param {HTMLDivElement} s1 first square to compare
 * @param {HTMLDivElement} s2 second square to compare
 * @param {HTMLDivElement} s3 third square to compare
 * @returns True or False
 */
function checkSequence(s1, s2, s3) {
  var isEqual = false;
  if (s1.innerHTML !== '-' && s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML) {
    isEqual = true;
  }
  return isEqual
}


/**
 * this function checks if the game has a winner
 * @returns True or False
 */
function hasWinner() {
  winner = null
  for (let i = 0; i < validSequences.length; i++) {
    const [a, b, c] = validSequences[i];
    if (checkSequence(squares[a], squares[b], squares[c])) {
      winner = squares[a].innerHTML;
      changeSquareColor(squares[a], squares[b], squares[c]);
    }
  }


  if (winner !== null) return true
  else return false

}

function changeSquareColor(s1, s2, s3) {
  s1.style.background = 'lightgreen';
  s1.classList.add('blink')
  s2.style.background = 'lightgreen';
  s2.classList.add('blink')
  s3.style.background = 'lightgreen';
  s3.classList.add('blink')

}

function resetGame() {
  player = null;
  winner = null;
  labPlayer.innerHTML = 'Jogador: ';

  for (let i = 0; i <= 8; i++) {
    let square = squares[i];
    square.style.background = 'lightgrey'
    square.style.color = 'lightgrey'
    square.classList.remove('blink')
    square.innerHTML = '-'
  }
  changePlayer('X');

}
