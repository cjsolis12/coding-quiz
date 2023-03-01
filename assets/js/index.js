var startBtn = document.getElementById('start')
var timerContainer = document.getElementById('timer')
var startPage = document.getElementById('start-page')
var answers = document.getElementById('answer-choices')

// Start timer at
var count = 60;

// Question and answer Objects
var questions = [
    { 
        question: "From the given array, which index is the letter 'd' on ['a','b', 'c', 'd']? ",
        choices: ["0", "3", "4", "1" ],
        answer:this.choices[1] 
    },
    { 
        question: "Inside the HTML document, where do you place the JavaScript code? ",
        choices: ["in the <footer> element", "Inside the <script> tag", "inside the title tag", "You don't have to add any tag for Javascript" ],
        answer:this.choices[1] 
    },
    { 
        question: "Which of the following methods is used to access HTML elements using Javascript? ",
        choices: ["getDOM", "getHTML", "forEach()", "getElementbyId()" ],
        answer:this.choices[3] 
    },
    { 
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        choices: ["convert()", "parse()", "stringify()", "function()" ],
        answer:this.choices[2] 
    },
    { 
        question: "How to stop an interval timer in Javascript? ",
        choices: ["clearInterval", "clearTimer", "intervalOver", "unsetInterval" ],
        answer:this.choices[0] 
    },

]
    
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
    startPage.style.display = "none";
    answers.style.visibility = "visible";
})