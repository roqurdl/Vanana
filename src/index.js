const putNumForm = document.querySelector("#putnum");
const maxNumInput = document.querySelector("#maxnum");
const guessNumInput = document.querySelector("#guessnum");
const result = document.querySelector("#result");

const HIDDEN_CLASS = "hidden";

function paintResult(guessNum, gameNum) {
  const rsStart = document.querySelector("#result span:first-child");
  const rsEnd = document.querySelector("#result span:last-child");
  result.classList.remove(HIDDEN_CLASS);
  if (guessNum === gameNum) {
    rsStart.innerText = `You choose:${guessNum}, the machine chose:${gameNum}.`;
    rsEnd.innerText = `You Win!`;
  } else {
    rsStart.innerText = `You choose: ${guessNum}, the machine chose: ${gameNum}.`;
    rsEnd.innerText = `You lose!`;
  }
}

function numberGame(event) {
  event.preventDefault();
  const maxNum = maxNumInput.value;
  const guessNum = guessNumInput.value;
  const gameNum = String(Math.round(Math.random() * maxNum));
  if (maxNum < guessNum) {
    alert("Guess Number is over the range");
  } else {
    paintResult(guessNum, gameNum);
  }
}

putNumForm.addEventListener("submit", numberGame);
