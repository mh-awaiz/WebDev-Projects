let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let turnOfO = true;
let wins = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Event handlers
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turnOfO) {
      box.innerText = "O";
      turnOfO = false;
    } else {
      box.innerText = "X";
      turnOfO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (patterns of wins) {
    let pos1 = boxes[patterns[0]].innerText;
    let pos2 = boxes[patterns[1]].innerText;
    let pos3 = boxes[patterns[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner", pos1);
      }
    }
  }
};
