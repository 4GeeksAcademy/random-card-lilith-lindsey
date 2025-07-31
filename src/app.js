import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = ["hearts", "spades", "clubs", "diamonds"];
  const values = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const symbols = {
    hearts: "♥",
    spades: "♠",
    clubs: "♣",
    diamonds: "♦"
  }

  function drawCard() {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];
    const symbol = symbols[suit];

    document.getElementById("app").innerHTML = `
        <div class="card ${suit}">
          <div class="top">${symbol}</div>
          <div class="value">${value}</div>
          <div class="bottom">${symbol}</div>
        </div>
      `;
  }

  drawCard();

  const refreshButton = document.querySelector("#refresh");
  refreshButton.addEventListener("click", () => {
    location.reload();
  });
};
  // const numDiv = document.querySelector("#face");

  // const numArr = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
  // const randomDec = Math.random();
  // const randomLongNum = randomDec * numArr.length;
  // const randomNumNoDec = Math.floor(randomLongNum);

  // numDiv.innerHTML = numArr[randomNumNoDec];

  // const suitDiv = document.querySelector("#suit");

  // const suitArr = ["♦", "♥", "♠", "♣"];

  // const randomDecSuit = Math.random();
  // const randomLongSuit = randomDecSuit * suitArr.length;
  // const randomSuitNoDec = Math.floor(randomLongSuit)
  //     if(suitArr[randomSuitNoDec] == "♦" || suitArr[randomSuitNoDec] == "♥"){
  //         suitDiv.
  //     }

  // suitDiv.innerHTML = suitArr[randomSuitNoDec];
  

  // const refreshButton = document.querySelector("#refresh");

  // refreshButton.addEventListener("click", () => {
  //     location.reload();
  //   } 
  // );
  
  // }


