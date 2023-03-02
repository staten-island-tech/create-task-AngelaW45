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
};

DOMSelectors.submitForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // gets User input on player names
  const player1 = document.getElementById("player1").value;
  const player2 = document.getElementById("player2").value;
  const NumOfRolls = document.getElementById("NumOfRolls").value;

  for (let i = 0; i < NumOfRolls; i++) {
    const player1Score = rollDice();
    const player2Score = rollDice();
    console.log(rollDice);

    // Empty string to store result from later
    let result = [];
    let history = [];
    console.log(history);

    // determine the result
    if (player1Score > player2Score) {
      result = `${player1} won the round`;
    } else if (player2Score > player1Score) {
      result = `${player2} won the round`;
    } else {
      result = "This round is tied";
    }

    function ShowResult() {
      const Result = document.querySelector("#results");
      let results = `
      <div id="Card">
      <p>${player1} => ${player1Score}</p>
      <p>${player2} => ${player2Score}</p>
      <p>${result}</p></div>
      `;
      Result.insertAdjacentHTML("afterend", results);
    }
    ShowResult();

    function clearfields() {
      DOMSelectors.NumOfRolls.value = "";
      DOMSelectors.player1.value = "";
      DOMSelectors.player2.value = "";
      DOMSelectors.results.value = ``;
    }

    DOMSelectors.Reset.addEventListener("click", function () {
      undisableBtn();
      clearfields();
    });

    function disableBtn() {
      document.getElementById("submitted").disabled = true;
    }
    disableBtn();
  }

  function undisableBtn() {
    document.getElementById("submitted").disabled = false;
  }

  for (let i = 0;)
  //history button stuff (loop it!!, check classroom for referance)

  DOMSelectors.historyBtn.addEventListener("click", function () {
    function ShowHistory() {
      const HistoryBox = document.querySelector("#historyBox");
      let historyBox = `
      <div id="Card">
      <p>${player1} => ${player1Score}</p>
      <p>${player2} => ${player2Score}</p>
      <p>${result}</p></div>
      `;
      HistoryBox.insertAdjacentHTML("afterend", historyBox);
    }
    ShowHistory();
  });
});

// display the result on the page

/* const DOMSelectors = {
  submitForm: document.querySelector("form"),
};

DOMSelectors.submitForm.addEventListener("submit", function (event) {
  event.preventDefault();
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
  }); */

/* function logSubmit(event) {
  log.textContent = `hi`;
  event.preventDefault();
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);
 */

// const formDetails = document.getElementById("submitted");

/* const DOMSelectors = {
  submitForm: document.querySelector("form"),
  box1: document.querySelector("player1"),
  box2: document.querySelector("player2"),
  box3: document.querySelector("NofRolls"),
  Results: document.querySelector("results"),
};

function card(player1, player2) {
  DOMSelectors.Results.insertAdjacentHTML(
    "beforeend",
    <div class="result-card">
      <p>
        ${player1} => ${player1Score}
      </p>
      <p>
        ${player2} => ${player2Score}
      </p>
      <p>${result}</p>`;
    </div>
  );
}

function clearfields() {
  DOMSelectors.box1.value = "";
  DOMSelectors.box2.value = "";
  DOMSelectors.box3.value = "";
}
 */
