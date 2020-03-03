var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColors[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour").fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

  level++;


  }


$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

})


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  },100)
}

//starting the game

$("document").keypress(function(){
  ("h1").text("Level" + level);
})
