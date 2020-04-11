var drumButtons = document.querySelectorAll(".drum").length;
function keyboard(key)//this function listen to the event of the keyboard from addevnt listner from the keyboard or mouse
{

  switch (key) { //swich bet the letters to the corresponding sound
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    default:

}

}
for (var i = 0; i < drumButtons; i++) {
  //here it will activate the function whe i click on any button  by the mouse of class drum
    //the keybord function abve to display sound
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var mouseClicked = this.innerHTML; //get the letter from html
    keyboard(mouseClicked);
      console.log(mouseClicked);
  })

};


document.addEventListener("keypress",function(event){
//the keybord function abve to display sound
keyboard(event.key)//call
})
