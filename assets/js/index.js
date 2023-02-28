var startBtn = document.getElementById('start')
var timerContainer = document.getElementById('timer')
var instructions = document.getElementById('start-section')
var answers = document.getElementById('answer-choices')

// Start timer at
var count = 60;

var questions = {
    question: ''
}


// Timer function
var timer = function (){
    var timeInterval = setInterval( () => {
        timerContainer.textContent = count--;
        if(count < 0){
            clearInterval(timeInterval)
        }
    }, 1000) }

// Timer Starting when button is clicked
startBtn.addEventListener('click', function(){
    timer();
    instructions.style.display = "none";
    answers.style.visibility = "visible";
})