"use strict";

let playerScore = 0;
let user = prompt("Hello, what is your name?");

let intro = alert(
  "Welcome to my page " +
    user +
    "! Welcome to a guessing game about my goal to visit all the US National Parks! Please answer yes or no to the next 5 questions."
);
//prompt might do better for the game as an alert after testing user experience
function outbound() {
  //revision, combine everyting into one function
  let answer1 = prompt(
    "Before I visit a National Park do I check out their website and pack the 10 essentials?"
  )?.toLowerCase();

  if (answer1 === "yes" || answer1 === "y") {
    //console.log ("Yes, it pays to be prepared.");
    alert("Yes, it pays to be prepared.");
    playerScore++;
  } else if (answer1 === "no" || answer1 === "n") {
    //console.log ("Oh no! It pays to research!");
    alert("Oh no! It pays to research!");
  } else {
    alert("Please answer with a (y)es or (n)o");
    //console.log ("Please answer with a yes or no");
  }
}
outbound();

function hikingFool() {
  let answer2 = prompt(
    "Have I visited and hiked in all 3 National Parks in the state of Washington?"
  )?.toLowerCase();

  if (answer2 === "yes" || answer2 === "y") {
    //console.log ("Yes, I backpacked in Olympic National Park last summer.");
    alert("Yes, I backpacked in Olympic National Park last summer.");
    playerScore++;
  } else if (answer2 === "no" || answer2 === "n") {
    //console.log ("But they are so close. I couldn't help but visit.");
    alert("But they are so close. I couldn't help but visit.");
  } else {
    //console.log ("Please answer with a yes or no");
    alert("Please answer with a (y)es or (n)o");
  }
}
hikingFool();

function snacks() {
  let answer3 = prompt(
    "Have I visited all the National Parks in Utah?"
  )?.toLowerCase();

  if (answer3 === "yes" || answer3 === "y") {
    //console.log ("Yes! Capitol Reef has orchards that are known for their pies!");
    alert("Yes! Capitol Reef has orchards that are known for their pies!");
    playerScore++;
  } else if (answer3 === "no" || answer3 === "n") {
    //console.log ("But Capitol Reef features pies made in the National Park!");
    alert("But Capitol Reef features pies made in the National Park!");
  } else {
    //console.log ("Please answer with a yes or no");
    alert("Please answer with a (y)es or (n)o");
  }
}
snacks();

function trailMix() {
  let answer4 = prompt(
    "Have I visited all the National Parks in California?"
  )?.toLowerCase();

  if (answer4 === "yes" || answer4 === "y") {
    //console.log ("Yes! Death Valley is one of the coolest places I have ever been.");
    alert("Yes! Death Valley is one of the coolest places I have ever been.");
    playerScore++;
  } else if (answer4 === "no" || answer4 === "n") {
    //console.log ("Oh no! California is a great road trip.");
    alert("Oh no! California is a great road trip.");
  } else {
    //console.log ("Please answer with a yes or no");
    alert("Please answer with a (y)es or (n)o");
  }
}
trailMix();

function compassRose() {
  let answer5 = prompt("Have I visited the Grand Canyon?")?.toLowerCase();

  if (answer5 === "yes" || answer5 === "y") {
    //console.log ("Yes, I watched a big snow storm roll into the canyon.");
    alert("Yes, I watched a big snow storm roll into the canyon.");
    playerScore++;
  } else if (answer5 === "no" || answer5 === "n") {
    //console.log ("I had to see the Grand Canyon!");
    alert("I had to see the Grand Canyon!");
  } else {
    //console.log ("Please answer with a yes or no");
    alert("Please answer with a (y)es or (n)o");
  }
}
compassRose();

let outro = prompt("Thanks so much " + user + "! Welcome to my page!");

let correctAnswer = 27;
let guesses = 4;

while (guesses) {
  let natGuess = prompt(
    "Can you guess how many National Parks I have visited? Hint: there are only 63 National Parks."
  );

  guesses--;
  if (natGuess > correctAnswer) {
    alert("That number is too high.");
  } else if (natGuess < correctAnswer) {
    alert("That number is too low.");
  } else if (natGuess == 27) {
    alert("Correct! Congratulations!");
    playerScore++;
    break;
  }
  if (guesses === 0) {
    alert("Only 4 guesses today! The number was " + correctAnswer);
  }
}

let favParks = [
  "Yellowstone",
  "Death Valley",
  "Canyonlands",
  "Redwoods",
  "Mount Lassen",
];
let parksGuess = 6;
//let rightPark =favParks for Monday night

while (parksGuess) {
  parksGuess--;
  let favParksQuestions = prompt(
    "What is one of my top favorite National Parks?"
  );

  for (let i = 0; i < favParksQuestions.length; i++) {
    //const parksGuess = favParks [i];
    //console.log (i,favParks);
    if (favParksQuestions === favParks[i]) {
      alert("Excellent guess!");
      break;
      playerScore++;
    }
  }
  if (parksGuess != 0) {
    alert("Try another one. You have " + parksGuess + " more guesses.");
  } else {
    alert(favParks + " are all of the correct answers!");
  }
}

alert("Thanks for playing " + user + ". You scored " + playerScore + "!");
