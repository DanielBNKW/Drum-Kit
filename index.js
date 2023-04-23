
var numberOfBottns = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfBottns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    
}

//detecting keybor press


document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event,key);
});

function makeSound(key){
    switch (key) {
        case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();            
        
            break;
        case "a":        
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;        
        case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;
        case "d":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;
        case "j":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;
        case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;
        case "l":
                var kickbass = new Audio('sounds/kick-bass.mp3');
                kickbass.play();
            break;
        
        
        
        
        
        
        
        default: console.log(b)
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton =  document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")}, 100);

}
















// document.querySelectorAll(".w").addEventListener("click", function(){
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
// });
// document.querySelectorAll(".a").addEventListener("click", function(){
//     var audio2 = new Audio('sounds/tom-2.mp3');
//     audio.play();
// });
// document.querySelectorAll(".s").addEventListener("click", function(){
//     var audio3 = new Audio('sounds/tom-3.mp3');
//     audio.play();
// });
// document.querySelectorAll(".d").addEventListener("click", function(){
//     var audio4 = new Audio('sounds/tom-4.mp3');
//     audio.play();
// });
// document.querySelectorAll(".j").addEventListener("click", function(){
//     var audio5 = new Audio('sounds/snare.mp3');
//      audio.play();
// });
// document.querySelectorAll(".k").addEventListener("click", function(){
//     var audio6 = new Audio('sounds/crash.mp3');
//     audio.play();
// });
// document.querySelectorAll(".l").addEventListener("click", function(){
//     var audio7 = new Audio('sounds/kick-bass.mp3');
//      audio.play();
// });