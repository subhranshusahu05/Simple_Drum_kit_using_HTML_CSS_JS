// var crash = document.querySelector(".drum");
//             crash.addEventListener("click", handelClick);

//             function handelClick(){
//                 alert("iiii")
//             }















 
///////////////////////////////////////////////THIS IS MOUSE_SECTION/////////////////////


 var numberOfDrumButtons = document.querySelectorAll(".drum").length;

 for(var i =0; i<numberOfDrumButtons; i++){

            var crash = document.querySelectorAll(".drum")[i];//here we grap all the elements that have a class drum
            crash.addEventListener("click", handelClick);

           function handelClick(){

             //1 console.log(this.innerHTML);
             //2 console.log(this.style.color="white");
            
             var buttonInnerHTML =this.innerHTML;
             switch(buttonInnerHTML){
                case"w":
                        var tom1 = new Audio("sounds/tom-1.mp3");
                       tom1.play();
                break;


                case"a":
                        var tom2 = new Audio("sounds/tom-2.mp3");
                        tom2.play();
                break;

                case"s":
                        var tom3 = new Audio("sounds/tom-3.mp3");
                        tom3.play();
                break;


                case"d":
                        var tom4 = new Audio("sounds/tom-4.mp3");
                        tom4.play();
                break;

                case"j":
                        var tom5 = new Audio("sounds/snare.mp3");
                        tom5.play();
                break;

                case"k":
                        var audio = new Audio("sounds/crash.mp3");
                        audio.play();
                break;

                case"l":
                        var audio = new Audio("sounds/kick-bass.mp3");
                        audio.play();
                break;

                default:


             }
              buttonAnimation(buttonInnerHTML);///animaton effect

        }
    


 }

 ////////////////////////////////////////////////////THIS IS KEYBOARD_SECTION//////////////////////////////////////////

 document.addEventListener("keypress", keyboardkeypress);

        function keyboardkeypress(event){
            

                

             switch(event.key){
                case"w":
                        var tom1 = new Audio("sounds/tom-1.mp3");
                       tom1.play();
                break;


                case"a":
                        var tom2 = new Audio("sounds/tom-2.mp3");
                        tom2.play();
                break;

                case"s":
                        var tom3 = new Audio("sounds/tom-3.mp3");
                        tom3.play();
                break;


                case"d":
                        var tom4 = new Audio("sounds/tom-4.mp3");
                        tom4.play();
                break;

                case"j":
                        var tom5 = new Audio("sounds/snare.mp3");
                        tom5.play();
                break;

                case"k":
                        var audio = new Audio("sounds/crash.mp3");
                        audio.play();
                break;

                case"l":
                        var audio = new Audio("sounds/kick-bass.mp3");
                        audio.play();
                break;

                default:


             }
           
           buttonAnimation(event.key); // animation efects
        }


/////////////////////////////////////BUTTON_ANIMATION_SECTION/////////////////////////////////////////////////////////////////////////////

function buttonAnimation(currentKey){
    var activeButton =   document.querySelector("." + currentKey) ; 

    activeButton.classList.add("pressed");
   
   
    function unpressed(){
            activeButton.classList.remove("pressed");
        }
        setTimeout(unpressed, 100);
}




//  var audio = new Audio("sounds/tom-1.mp3");
//                audio.play();


/***             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CODE LOGIC~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * {
 * 🎯 Goal of the Code
This code creates a drum kit on a webpage. It allows the user to:

Click on drum buttons with the mouse, or

Press keys on the keyboard (w, a, s, d, j, k, l)
→ and then plays the corresponding drum sound and gives a visual animation effect.

✅ 1. Detecting Mouse Click on Drum Buttons
js
Copy
Edit
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
👉 This finds how many buttons have the class name .drum.
Suppose you have 7 <button class="drum">w</button>... then this value is 7.

js
Copy
Edit
for (var i = 0; i < numberOfDrumButtons; i++) {
    var crash = document.querySelectorAll(".drum")[i];
👉 This for loop runs for each drum button on the page, one by one.
crash stores one drum button at a time.

js
Copy
Edit
    crash.addEventListener("click", handelClick);
👉 Adds a click listener to each button.
When you click a button, it will run the handelClick function.

✅ 2. What Happens When a Drum Button is Clicked
js
Copy
Edit
function handelClick() {
    var buttonInnerHTML = this.innerHTML;
👉 this.innerHTML gets the text inside the clicked button, like "w" or "a".

🔊 Play Sound Based on Which Button Was Clicked
js
Copy
Edit
switch(buttonInnerHTML){
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    ...
👉 switch checks which button (or key) was pressed and plays the correct sound file.

✨ Add Animation Effect
js
Copy
Edit
buttonAnimation(buttonInnerHTML);
👉 Calls a function to briefly animate the pressed button (so it looks like it’s actually pressed).

✅ 3. Detecting Keyboard Presses
js
Copy
Edit
document.addEventListener("keypress", keyboardkeypress);
👉 Listens to key presses on the keyboard.

js
Copy
Edit
function keyboardkeypress(event) {
    switch(event.key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        ...
    }

    buttonAnimation(event.key);
}
👉 Just like mouse click, this checks which key was pressed, plays sound, and animates the button.

✅ 4. Animation Function (Visual Effect)
js
Copy
Edit
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
👉 This selects the button like .w, .a, etc., based on the key you pressed.

js
Copy
Edit
    activeButton.classList.add("pressed");
👉 Adds a CSS class pressed to change the appearance (like color, shadow, etc.)

js
Copy
Edit
    function unpressed(){
        activeButton.classList.remove("pressed");
    }

    setTimeout(unpressed, 100);
}
👉 After 100 milliseconds, it removes the .pressed class, so the button goes back to normal. This creates a short press animation.

🧠 Summary:
Action	What Happens
Mouse click	Plays sound + animates the button
Keyboard key	Plays sound + animates the button
Animation	Adds .pressed class and removes it after 100ms}
 * 
 * 
 */


