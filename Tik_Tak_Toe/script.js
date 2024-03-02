console.log("Welcome to Tic Tac Toe!");

let turn = "X";
let gameOver = false;

function switchTurn() {
  return turn === "X" ? "O" : "X";
}

function checkForWin() {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  // Check for a win
  for (let e of wins) {
    if (
      boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML &&
      boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML &&
      boxtext[e[0]].innerHTML !== ""
    ) {
      document.querySelector(".info").innerHTML = `${boxtext[e[0]].innerHTML} has won!`;
      gameOver = true;
      return;
    }
  }

  // Check for a draw
  let isDraw = Array.from(boxtext).every((box) => box.innerHTML !== "");
  if (isDraw) {
    document.querySelector(".info").innerHTML = "It's a draw!";
    gameOver = true;
  }
}

const boxes = Array.from(document.getElementsByClassName("box"));
boxes.forEach((boxElement) => {
  const boxtext = boxElement.querySelector(".boxtext");

  boxElement.addEventListener("click", () => {
    if (!boxtext.innerHTML && !gameOver) {
      boxtext.innerHTML = turn;
      turn = switchTurn();
      checkForWin();
      if (!gameOver) {
        document.querySelector('.info').innerHTML = `Turn for ${turn}`;
      }
    }
  });
});

reset.addEventListener('click', () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach(element => {
    element.innerHTML = "";
  });
  turn = "X";
  gameOver = false;
  document.querySelector('.info').innerHTML = `Turn for ${turn}`;
});
