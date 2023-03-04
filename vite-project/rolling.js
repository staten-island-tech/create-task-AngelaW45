import "./style.css";

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//calls function getRandomNumber, get "randam" numbers between 1-6 (both numbers are included)
const rollDice = () => getRandomNumber(1, 6);

const DOMSelectors = {
  submitForm: document.querySelector("form"),
  results: document.getElementById("results"),
  Reset: document.getElementById("reset"),
  player1: document.getElementById("player1"),
  player2: document.getElementById("player2"),
  NumOfRolls: document.getElementById("NumOfRolls"),
  historyBox: document.getElementById("historyBox"),
  historyBtn: document.getElementById("historyBtn"),
  Card: document.getElementById("Card"),
};

DOMSelectors.submitForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // gets User input on player names and number of rolls
  const player1 = document.getElementById("player1").value;
  const player2 = document.getElementById("player2").value;
  const NumOfRolls = document.getElementById("NumOfRolls").value;

  for (let i = 0; i < NumOfRolls; i++) {
    const player1Score = rollDice();
    const player2Score = rollDice();

    // Empty string to store result and history for later
    let result = [];

    // determine the result
    if (player1Score > player2Score) {
      result = `${player1} Won The Round`;
    } else if (player2Score > player1Score) {
      result = `${player2} Won The Round`;
    } else {
      result = "This Round Is Tied";
    }

    function ShowResult() {
      let results = `
      <div id="Card">
      <p>${player1} => ${player1Score}</p>
      <p>${player2} => ${player2Score}</p>
      <p>${result}</p>
      </div>
      `;
      DOMSelectors.results.insertAdjacentHTML("afterbegin", results);
    }
    ShowResult();

    //when clicking hitory button, show history
    DOMSelectors.historyBtn.addEventListener("click", function () {
      function ShowHistory() {
        let historyBox = `
      <div id="HCard">
      <p id= "text">${result}</p>
      </div>
      `;
        DOMSelectors.historyBox.insertAdjacentHTML("afterbegin", historyBox);
      }
      ShowHistory();
    });

    //When clicking the reset Button, undisable the Submit button, and clear the form
    DOMSelectors.Reset.addEventListener("click", function () {
      undisableBtn();
      clearfields();
    });

    function clearfields() {
      DOMSelectors.NumOfRolls.value = "";
      DOMSelectors.player1.value = "";
      DOMSelectors.player2.value = "";
      document.getElementById("results").innerHTML = "";
    }

    function disableBtn() {
      document.getElementById("submitted").disabled = true;
    }
    disableBtn();
  }

  function undisableBtn() {
    document.getElementById("submitted").disabled = false;
  }
});

// display the result on the page

/* const DOMSelectors = {
  submitForm: document.querySelector("form"),
}; */

/* function logSubmit(event) {
  log.textContent = `hi`;
  event.preventDefault();
} */
