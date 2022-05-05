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

  function hikingFool () {

    let answer2 = prompt ("Have I visited and hiked in all 3 National Parks in the state of Washington?") .toLowerCase();
  
    if (answer2 === 'yes' || answer2 === 'y') {
      alert ("Yes, I backpacked in Olympic National Park last summer.");
    } else if (answer2 ==='no'|| answer2 ==='n') {
      alert ("But they are so close. I couldn't help but visit.");
    } else {
      alert ("Please answer with a yes or no");
   }
  }
    hikingFool();

    function snacks () {

      let answer3 = prompt ("Have I visited all the National Parks in Utah?") .toLowerCase();
    
      if (answer3 === 'yes' || answer3 === 'y') {
        alert ("Yes! Capitol Reef has orchards that are known for their pies!");
      } else if (answer3 ==='no'|| answer3 ==='n') {
        alert ("But Capitol Reef features pies made in the National Park!");
      } else {
        alert ("Please answer with a yes or no");
     }
    }
      snacks();
      

      function trailMix () {

        let answer4 = prompt ("Have I visited all the National Parks in California?") .toLowerCase();
      
        if (answer4 === 'yes' || answer4 === 'y') {
          alert ("Yes! Death Valley is one of the coolest places I have ever been.");
        } else if (answer4 ==='no'|| answer4 ==='n') {
          alert ("Oh no! California is a great road trip.");
        } else {
          alert ("Please answer with a yes or no");
       }
      }
        trailMix();  


        function compassRose () {

          let answer5 = prompt ("Have I visited the Grand Canyon?") .toLowerCase();
        
          if (answer5 === 'yes' || answer5 === 'y') {
            alert ("Yes, I watched a big snow storm roll into the canyon.");
          } else if (answer5 ==='no'|| answer5 ==='n') {
            alert ("I had to see the Grand Canyon!");
          } else {
            alert ("Please answer with a yes or no");
         }
        }
          compassRose();  