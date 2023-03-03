var btn = document.getElementById('start')
var timerContainer = document.getElementById('timer')
var startPage = document.getElementById('start-page')
var qAndA = document.getElementById('questionItem')
var answersDisplayed= document.getElementById('choices')
var correctIncorrectAnswers = document.getElementById('result')
var nextButton = document.getElementById('next-btn')

var nextQuestion = 0;
// Start timer at
var count = 60;

// Question and answer Objects
var questionsArray = [
    { 
        question: "From the given array, which index is the letter 'd' on ['a','b', 'c', 'd']? ",
        choices: ["0", "3", "4", "1" ],
        answer:"3", 
    },
    { 
        question: "Inside the HTML document, where do you place the JavaScript code? ",
        choices: ["in the <footer> element", "Inside the <script> tag", "inside the title tag", "You don't have to add any tag for Javascript" ],
        answer: "Inside the <script> tag", 
    },
    { 
        question: "Which of the following methods is used to access HTML elements using Javascript? ",
        choices: ["getDOM", "getHTML", "forEach()", "getElementbyId()" ],
        answer:"getElementbyId()", 
    },
    { 
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        choices: ["convert()", "parse()", "stringify()", "function()" ],
        answer:"stringify()", 
    },
    { 
        question: "How to stop an interval timer in Javascript? ",
        choices: ["clearInterval", "clearTimer", "intervalOver", "unsetInterval" ],
        answer:"clearInterval", 
    },

]

// Looping over each object to make each Question Property an h3.
function createAnswerChoices (questionIndex){
        var currentQuestion = questionsArray[questionIndex]
        let title = document.createElement('h3')
        let text1 = document.createTextNode(currentQuestion.question)
        const currentChoices = currentQuestion.choices
        title.appendChild(text1)
        qAndA.appendChild(title)
        
// Looping over each choices array and adding them to buttons
        for(let i = 0; i < currentChoices.length; i++){
            let answerBtns = document.createElement('button');
            answerBtns.id = "answer-buttons"
            let text2 = document.createTextNode(currentChoices[i]);
            answerBtns.appendChild(text2)

            answerBtns.addEventListener('click', function (event){
                console.log(event.target.innerHTML)
                if(event.target.innerHTML === currentQuestion.answer){
                    answerBtns.style.background = "#c6f7ba"
                 }else{
                    answerBtns.style.background = "#f2aa9b"
                 }
                nextQuestion++;
                
            })
            qAndA.appendChild(answerBtns)
        }
 }

// Timer function
var timer = function (){
    var timeInterval = setInterval( () => {
        timerContainer.textContent = count--;
        // if(count % 10 === 0){
            createAnswerChoices(nextQuestion);
            nextQuestion++;
        // }
        if(count < 0){
            clearInterval(timeInterval)
        }
    }, 1000) }

// When Start button is clicked
btn.addEventListener('click', function(){
    timer();
    startPage.style.display = "none";
    qAndA.style.visibility = "visible";
    nextButton.style.visibility = "visible";
    btn.style.display = "none";
    console.log(nextQuestion)
})

