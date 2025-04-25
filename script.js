
const time = document.getElementById('time-box');
let timerDesciption = document.getElementById('description');
let minutes = 25;// Default focus time in minutes
let seconds = 0;
let breakTime = 5;// Default break time in minutes
let focusTime = 25;// Default focus time in minutes
time.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
let timeInterval;
function starttimer() {
     timeInterval = setInterval(function () {      
        if (seconds == 0) {
            seconds = 59;
            minutes--;
        } else {
            seconds--;
        }
        if (minutes < 0) {
            clearInterval(timeInterval);
            alert("Time's up!");     
            timerDesciption.innerHTML = "time up!";       
            return;
        }
        time.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;        
    }, 1000);
}

function resetTimer() {
    clearInterval(timeInterval);
    minutes = focusTime;    
    seconds = 0;
    time.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timerDesciption.innerHTML = "focus time!";

}
function startBreak() {
    clearInterval(timeInterval);
    minutes = breakTime;
    seconds = 0;
    time.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;   
    timerDesciption.innerHTML = "Break Time!";
    starttimer();
}
function setupFocus()
{
    const userInput = prompt("Enter the number of minutes for focus time:", "25"); // Default is 25 minutes
    const minutesInput = parseInt(userInput, 10); // Convert input to an integer

    if (!isNaN(minutesInput) && minutesInput > 0) {
        minutes = focusTime = minutesInput; // Set the timer to the user input
        seconds = 0;
        time.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timerDesciption.innerHTML = "Focus time!";
    } else {
        alert("Invalid input. Please enter a positive number.");
    }
}
function setupBreak(){
    const userInput = prompt("Enter the number of minutes for break time:", "5"); // Default is 5 minutes
    const minutesInput = parseInt(userInput, 10); // Convert input to an integer

    if (!isNaN(minutesInput) && minutesInput > 0) {
        breakTime = minutesInput; // Set the timer to the user input
        seconds = 0;        
    } else {
        alert("Invalid input. Please enter a positive number.");
    }
}