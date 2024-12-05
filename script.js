let secretNumber = document.querySelector(".number");
let message = document.querySelector(".msg");
let checkBtn = document.querySelector(".check");
let gameScore = document.querySelector(".score");
let againBtn = document.querySelector(".again");

let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const clickFunction = () => {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "🙏 Please enter a number";
    return;
  }

  if (guess === random) {
    message.textContent = "🎉 You guessed it right!";
    secretNumber.textContent = random;
    document.querySelector("body").style.backgroundColor = "#98ea05";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".high--score").textContent = score;
    }
  } else {
    if (score > 0) {
      message.textContent = guess > random ? "📈 Too high!" : "📉 Too low!";
      score--;
      gameScore.textContent = score;
    } else {
      message.textContent = "😔 You lost the game!";
    }
  }
};

againBtn.addEventListener("click", () => {
  random = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  secretNumber.textContent = "?";
  message.textContent = "❓ Start Guessing ...";
  gameScore.textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});

checkBtn.addEventListener("click", clickFunction);
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") clickFunction();
});
