let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;

document.getElementById("num1").innerText = num1;
document.getElementById("num2").innerText = num2;

function checkAnswer() {
  let userAnswer = document.getElementById("answer").value;
  let correct = num1 + num2;

  if (userAnswer == correct) {
    document.getElementById("result").innerText = "Bravo! 🎉";
  } else {
    document.getElementById("result").innerText = "Pokušaj ponovo!";
  }
}
