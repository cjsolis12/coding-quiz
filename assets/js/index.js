var startBtn = document.getElementById('start')
var timerContainer = document.getElementById('timer')

// Start timer at
var count = 60;


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
})