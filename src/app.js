import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const numDiv = document.querySelector("#face");

  const numArr = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
  const randomDec = Math.random();
  const randomLongNum = randomDec * numArr.length;
  const randomNumNoDec = Math.floor(randomLongNum);

  numDiv.innerHTML = numArr[randomNumNoDec];

  const suitDiv = document.querySelector("#suit");

  const suitArr = ["♦", "♥", "♠", "♣"];

  const randomDecSuit = Math.random();
  const randomLongSuit = randomDecSuit * suitArr.length;
  const randomSuitNoDec = Math.floor(randomLongSuit);

  suitDiv.innerHTML = suitArr[randomSuitNoDec];

  const refreshButton = document.querySelector("#refresh");

  refreshButton.addEventListener("click", () => {
      location.reload();
  } 
);
  }

