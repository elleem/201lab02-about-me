"use strict";

let user = prompt ('Hello, what is your name?');


let intro = prompt ("Welcome to my page " + user +"! Would you like to play a guessing game about my goal to visit all the US National Parks? Please answer yes or no.");

function outbound () {

  let answer1 = prompt ("Before I visit a National Park do I check out their website and pack the 10 essentials?") .toLowerCase();

  if (answer1 === 'yes' || answer1 === 'y') {
    alert ("Yes, it pays to be prepared.");
  } else if (answer1 ==='no'|| answer1 ==='n') {
    alert ("Oh no! It pays to research!");
  } else {
    alert ("Please answer with a yes or no");
 }
}
  outbound();