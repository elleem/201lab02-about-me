// "use strict";
let playerScore = 0;
let user = prompt("Hello, what is your name?");

let intro = alert(
  "Welcome to my page " +
    user +
    "! Welcome to a guessing game about my goal to visit all the US National Parks! Please answer yes or no to the next 5 questions to play for a score."
);

function hikingFool() {
let answer1 = prompt(
  "Before I visit a National Park do I check out their website and pack the 10 essentials?"
)?.toLowerCase();

if (answer1 === "yes" || answer1 === "y") {
  alert("Yes, it pays to be prepared.");
  playerScore++;
} else if (answer1 === "no" || answer1 === "n") {
  alert("Oh no! It pays to research!");
} else {
  alert("Please answer with a (y)es or (n)o");
}
}

function compassRose() {
  let answer2 = prompt(
    "Have I visited and hiked in all 3 National Parks in the state of Washington?"
    )?.toLowerCase();
    
    if (answer2 === "yes" || answer2 === "y") {
      alert("Yes, I backpacked in Olympic National Park last summer.");
      playerScore++;
    } else if (answer2 === "no" || answer2 === "n") {
      alert("But they are so close. I couldn't help but visit.");
    } else {
      alert("Please answer with a (y)es or (n)o");
    }
  }
 
 

function tenEssentials(){
  let answer3 = prompt(
  "Have I visited all the National Parks in Utah?"
)?.toLowerCase();

if (answer3 === "yes" || answer3 === "y") {
  alert("Yes! Capitol Reef has orchards that are known for their pies!");
  playerScore++;
} else if (answer3 === "no" || answer3 === "n") {
  alert("But Capitol Reef features pies made in the National Park!");
} else {
  alert("Please answer with a (y)es or (n)o");
}
}

function leaveNoTrace(){
let answer4 = prompt(
  "Have I visited all the National Parks in California?"
)?.toLowerCase();

if (answer4 === "yes" || answer4 === "y") {
  alert("Yes! Death Valley is one of the coolest places I have ever been.");
  playerScore++;
} else if (answer4 === "no" || answer4 === "n") {
  alert("Oh no! California is a great road trip.");
} else {
  alert("Please answer with a (y)es or (n)o");
}
}

function walkWoods(){
let answer5 = prompt("Have I visited the Grand Canyon?")?.toLowerCase();

if (answer5 === "yes" || answer5 === "y") {
  alert("Yes, I watched a big snow storm roll into the canyon.");
  playerScore++;
} else if (answer5 === "no" || answer5 === "n") {
  alert("I had to see the Grand Canyon!");
} else {
  alert("Please answer with a (y)es or (n)o");
}
}
hikingFool();
compassRose();
tenEssentials();
leaveNoTrace();
walkWoods();

let correctAnswer = 27;
let guesses = 4;

while (guesses) {
  let natGuess = prompt(
    "How about two more questions to earn some points? Can you guess how many National Parks I have visited? Hint: there are only 63 National Parks."
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
let correctPark = false;
let parksGuess = 6;

while (parksGuess && !correctPark) {
  let favParksQuestions = prompt(
    "What is one of my top favorite National Parks? You have " +
      parksGuess +
      " guesses."
  )?.toLowerCase();

  for (let i = 0; i < favParks.length; i++) {
    let favPark = favParks[i]?.toLowerCase();
    if (favParksQuestions === favPark) {
      alert(
        "Excellent guess! " + favParks + " are all of the correct answers!"
      );
      correctPark = true;
      playerScore++;
    }
  }
  parksGuess--;
}

alert("Thanks for playing " + user + ". You scored " + playerScore + "!");
