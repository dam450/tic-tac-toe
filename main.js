var player = null;

var playerTurn = document.getElementById('player-turn');

changePlayer('X')

function chooseSquare(id) {
  console.log(`clicou no quadrado ${id}`);
  var square = document.getElementById(id);

  if (square.innerHTML !== '-') return;

  square.innerHTML = player;

  if (player === 'X') {
    square.style.color = 'blue'
    player = 'O';
  } else {
    square.style.color = 'red'
    player = 'X';
  }
  changePlayer(player);

}

function changePlayer(value) {
  player = value;
  playerTurn.innerHTML = player

}
