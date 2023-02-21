function playSound(key) {
  switch (key) {
    case "w":
    case "W":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
    case "A":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
    case "S":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
    case "D":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
    case "J":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
    case "K":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
    case "L":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);

  }
}

function buttonAnimation(key) {
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("."+key).classList.remove("pressed");
  }, 100);

}

function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  playSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

function handleKeyStrokes(ev) {
  playSound(ev.key);
  buttonAnimation(ev.key);
}

// var drum = document.querySelectorAll(".drum");       //one Possible way
// drum.forEach(handleClick());

//
var drum = document.querySelectorAll(".drum");
// drum.forEach(addEventListener("click", function() {
//   console.log(this);
//   this.style.color = "white";
// }));

for (var i=0 ; i<drum.length ; i++ ) {
  drum[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", function (event) {
  handleKeyStrokes(event)
})
