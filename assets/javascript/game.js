$(document).ready(function() {

//Declare global variables
var winTotal = 0;
var lossTotal = 0;
var totalScore = 0;

//Randomly generate the number to get
var goalNumber = 19 + Math.floor(Math.random() * 102);

//Randomly generate the values of the crystals
function randomCrystal() {

  crystalDiamond = 1 + Math.floor(Math.random() * 12);
  crystalEmerald = 1 + Math.floor(Math.random() * 12);
  crystalRuby = 1 + Math.floor(Math.random() * 12);
  crystalAmethyst = 1 + Math.floor(Math.random() * 12);

}

//Call the function to get the values of the crystals
randomCrystal();

//Making the document print out the updated variables
document.querySelector("#number").innerHTML = "<p>Number to get: " + goalNumber + "</p>";
document.querySelector("#wins").innerHTML = "<p>Wins: " + winTotal + "</p>";
document.querySelector("#losses").innerHTML = "<p>Losses: " + lossTotal + "</p>";
document.querySelector("#TotalScore").innerHTML = "<p>Total Score: " + totalScore + "</p>";

//Assigning classes and attributes to crystals
var imageDiamond = $("<img>");
imageDiamond.attr("src", "./assets/images/diamond.png");
imageDiamond.attr("data-crystalDiamond", crystalDiamond);
imageDiamond.addClass("crystal-button1 crystal-button");


var imageEmerald = $("<img>");
imageEmerald.attr("src", "./assets/images/emerald.png");
imageEmerald.attr("data-crystalEmerald", crystalEmerald);
imageEmerald.addClass("crystal-button2 crystal-button");

var imageRuby = $("<img>");
imageRuby.attr("src", "./assets/images/ruby.png");
imageRuby.attr("data-crystalRuby", crystalRuby);
imageRuby.addClass("crystal-button3 crystal-button");

var imageAmethyst = $("<img>");
imageAmethyst.attr("src", "./assets/images/amethyst.png");
imageAmethyst.attr("data-crystalAmethyst", crystalAmethyst);
imageAmethyst.addClass("crystal-button4 crystal-button");

//Adding the crystal images to the appropriate <div>
$("#crystals").append(imageDiamond);
$("#crystals").append(imageEmerald);
$("#crystals").append(imageRuby);
$("#crystals").append(imageAmethyst);

//The function that will restart the game once it is over
function reset() {
  goalNumber = 19 + Math.floor(Math.random() * 102);

  document.querySelector("#number").innerHTML = "<p>Number to get: " + goalNumber + "</p>";

  randomCrystal();
  
  totalScore = 0;

  document.querySelector("#TotalScore").innerHTML = "<p>Total Score: " + totalScore + "</p>";

}

//Setting what the crystals do when clicked
$(".crystal-button1").on("click", function() {

    //Storing the crystal variable in a new variable
    var crystalValue1 = crystalDiamond;
    //Changing the new variable into an integer
    crystalValue1 = parseInt(crystalValue1);
    //Adding the integer to totalScore
    totalScore = totalScore + crystalValue1;
    //Displaying the new total score
    document.querySelector("#TotalScore").innerHTML = "<p>Total Score: " + totalScore + "</p>";

    //Setting the conditions of winning and losing
    if (totalScore === goalNumber) {
      winTotal++
      document.querySelector("#wins").innerHTML = "<p>Wins: " + winTotal + "</p>";
      //Calling the reset functon to reset the game
      reset();
    }

    else if (totalScore > goalNumber) {
      lossTotal++;
      document.querySelector("#losses").innerHTML = "<p>Losses: " + lossTotal + "</p>";
      reset();
    }

});

$(".crystal-button2").on("click", function() {

    var crystalValue2 = crystalEmerald;
    crystalValue2 = parseInt(crystalValue2);
    totalScore = totalScore + crystalValue2;
    document.querySelector("#TotalScore").innerHTML = "<p>Total Score: " + totalScore + "</p>";


    if (totalScore === goalNumber) {
      winTotal++
      document.querySelector("#wins").innerHTML = "<p>Wins: " + winTotal + "</p>";
      reset();
    }

    else if (totalScore > goalNumber) {
      lossTotal++;
      document.querySelector("#losses").innerHTML = "<p>Losses: " + lossTotal + "</p>";
      reset();
    }

});

$(".crystal-button3").on("click", function() {

    var crystalValue3 = crystalRuby;
    crystalValue3 = parseInt(crystalValue3);
    totalScore = totalScore + crystalValue3;
    document.querySelector("#TotalScore").innerHTML = "<p>Total Score: " + totalScore + "</p>";


    if (totalScore === goalNumber) {
      winTotal++
      document.querySelector("#wins").innerHTML = "<p>Wins: " + winTotal + "</p>";
      reset();
    }

    else if (totalScore > goalNumber) {
      lossTotal++;
      document.querySelector("#losses").innerHTML = "<p>Losses: " + lossTotal + "</p>";
      reset();
    }

});

$(".crystal-button4").on("click", function() {

    var crystalValue4 = crystalAmethyst;
    crystalValue4 = parseInt(crystalValue4);
    totalScore = totalScore + crystalValue4;
    document.querySelector("#TotalScore").innerHTML = "<p>Total Score: " + totalScore + "</p>";


    if (totalScore === goalNumber) {
      winTotal++
      document.querySelector("#wins").innerHTML = "<p>Wins: " + winTotal + "</p>";
      reset();
    }

    else if (totalScore > goalNumber) {
      lossTotal++;
      document.querySelector("#losses").innerHTML = "<p>Losses: " + lossTotal + "</p>";
      reset();
    }

});

});