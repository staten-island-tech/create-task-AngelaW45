const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//calls function getRandomNumber, get "randam" numbers between 1-6 (both numbers are included)
const rollDice = () => getRandomNumber(1, 6);

document.getElementById("roll").addEventListener("click", function () {
  // gets User input on player names
  const player1 = document.getElementById("player1").value;
  const player2 = document.getElementById("player2").value;

  // roll dice for both players
  const player1Score = rollDice();
  const player2Score = rollDice();

  // Empty string to store result from later
  let result = "";

  // determine the result
  if (player1Score > player2Score) {
    result = `${player1} won the round`;
  } else if (player2Score > player1Score) {
    result = `${player2} won the round`;
  } else {
    result = "This round is tied";
  }

  // display the result on the page
  document.getElementById("results").innerHTML = `
  <p>${player1} => ${player1Score}</p>
  <p>${player2} => ${player2Score}</p>
  <p>${result}</p>
  `;
});
