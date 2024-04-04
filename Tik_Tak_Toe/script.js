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


  let isDraw = Array.from(boxtext).every((box) => box.innerHTML !== "");
  if (isDraw) {
    document.querySelector(".info").innerHTML = "It's a draw!";
    gameOver = true;
  }
}

function fadeOut(element) {
  element.style.transition = "opacity 5s ease";
  element.style.opacity = 0;
}

function fadeOutAll() {
  let boxtexts = document.querySelectorAll(".boxtext");
  boxtexts.forEach((boxtext) => {
    fadeOut(boxtext);
  });
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

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
  let boxtexts = document.querySelectorAll(".boxtext");


  document.querySelector('.container').classList.add('animate-once');


  boxtexts.forEach((boxtext) => {
    fadeOut(boxtext);
  });

  setTimeout(() => {
    boxtexts.forEach((boxtext) => {
      boxtext.innerHTML = "";
      boxtext.style.transition = "none"; 
      boxtext.style.opacity = 1;
    });

    turn = "X";
    gameOver = false;
    document.querySelector('.info').innerHTML = `Turn for ${turn}`;

    document.querySelector('.container').classList.remove('animate-once');
 
    void document.querySelector('.container').offsetWidth;

    document.querySelector('.container').classList.add('animate-once');
  },200);
});
