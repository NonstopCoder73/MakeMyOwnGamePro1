let board = [['', '', ''], ['', '', ''], ['', '', '']];

let players = ['X', 'O'];
let currentPlayer;
let avail = [];

function preload() {

}

function setup() {
  canvas = createCanvas(400, 400);


  currentPlayer = random(players);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      avail.push([i, j])

    }
  }
}
function mousePressed() {
  nextTurn();
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let box = board[i][j];
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      textSize(32);
      strokeWeight(4);
      if (box === players[0]) {
        ellipse(x, y, w / 2)
      }
      else if (box === players[1]) {
        let xr = w / 4;
        line(x - xr, y - xr, x + xr, y + xr);
        line(x + xr, y - xr, x - xr, y + xr);
      }
      text(box, x, y);

    }

}

function equals3(a, b, c) {
  return (a == b && b == c && a == c && a !== '');
}

function checkWinner() {
  let winner = null;

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }
  //Vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[0][i], board[0][i])) {
      winner = board[0][i];
    }
  }
  //Diagonal
  if (equals3(board[0][0], board[1][1], board[1][1])) {
    winner = board[0][0];
  }
  if (equals3(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }


  if (winner == null && avail.length === 0) {
    return 'tie'
  } else {
    return 'winner'
  }

}



function nextTurn() {
  let index = (random(avail.length));
  let spot = avail.splice(index, 1)[0];
  let i = spot[0];
  let j = spot[1];
  board[i][j] = players[currentPlayer];
  currentPlayer = (currentPlayer + 1) % players.length;
}



function draw() {
  background("white");
  let w = width / 3;
  let h = height / 3;

  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  


   

    let result = checkWinner();

    // if (result != null) {
    //   noLoop();
    //   console.log(result);
    // }
    //nextTurn();
  
  }
}
