var btn = document.getElementById('start')   //Start button to start quiz
var timerContainer = document.getElementById('timer') //Timer in Navbar for setInterval
var startEndSection = document.getElementById('start-and-end') // container for start page with instructions and when quiz is over
var cardTitle = document.getElementById('card-title') //H2 title (Coding Quiz Challenge)(All done!)
var contentText = document.getElementById('content-card-section') //p tag in the start section
var userInput = document.getElementById("user-submit-initials") // container when user enters initials
var userInitial = document.querySelector("#initial-box")
var qAndA = document.getElementById('questionItem') //hidden div that appears when questions are rendered
var highScoreList = document.querySelector('#highscore-list') //High Scores Board UL
var submit = document.getElementById('submit') //Submit button for user initials

var nextQuestion = 0;
var score = 0;
var highScores = [];

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
        choices: ["in the <footer> element", "Inside the script tag ", "inside the title tag", "You don't have to add any tag for Javascript" ],
        answer:"Inside the script tag ", 
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
var endOfQuiz = false;
var createQuestionsAndAnswers = function(questionIndex){
        let title = document.createElement('h3')
        
        qAndA.style.visibility = "visible";
        var currentQuestion = questionsArray[questionIndex]
        let text1 = currentQuestion.question
        const currentChoices = currentQuestion.choices
        title.textContent = text1
        qAndA.textContent = currentQuestion.question;
// Looping over each choices array and adding them to buttons
        for(let i = 0; i < currentChoices.length; i++){
            let answerBtns = document.createElement('button');
            answerBtns.id = "answer-buttons"
            answerBtns.innerHTML = currentChoices[i]
            qAndA.appendChild(answerBtns);

            answerBtns.addEventListener('click', function (event){
                if(event.target.textContent == currentQuestion.answer){
                    answerBtns.style.background = "#c6f7ba"
                    score += 20;
                 }else{
                    answerBtns.style.background = "#f2aa9b"
                    timerContainer.textContent = count - 5;
                 }
                 questionIndex++
                 setTimeout(function(){
                    if(questionsArray.length > questionIndex){
                        createQuestionsAndAnswers(questionIndex)
                    }else{
                        quizOver()
                    }
                 }, 500)
            })
        }
 }

// Timer function
var timer = function (){
    var timeInterval = setInterval( () => {
        timerContainer.textContent = count--;
        if(count < 0 || endOfQuiz){
            clearInterval(timeInterval)
        }
    }, 1000) }

// When Start button is clicked
btn.addEventListener('click', function(){
    timer();
    startEndSection.style.display = "none";
    btn.style.display = "none";
    createQuestionsAndAnswers(nextQuestion)
})

// End Result Page when Quiz is over or time is out
var quizOver = function () {
    cardTitle.innerHTML = "All done!"
    qAndA.style.display = "none"
    contentText.textContent = `Your Score is: ${score} `;
    startEndSection.style.display = "block";
    userInput.style.display = "block"
    endOfQuiz = true;
    return
    }
    
   

// When submit button is clicked, initials in input textbox are saved to local storage
    submit.addEventListener('click', function(event){
        event.preventDefault();
        userInput.style.display = "none"
       
        //Card Title and content is change for High scores
        cardTitle.innerHTML = "High Scores"
        // contentText.appendChild = highScoreList
        saveLastHighScore()
        setUserHighScores();

        })
// value of user Initials is set to initialInputBox and stored in localStorage
    var saveLastHighScore = function(){
        var userData = {
            initial: userInitial.value,
            score: score,
        };
        highScores.push(userData)
        localStorage.setItem("initials", JSON.stringify(highScores));

        setUserHighScores();
    }

   var setUserHighScores = function(){
    let ol = document.createElement('ol')
    startEndSection.replaceChild(ol, contentText)
        highScores = JSON.parse(localStorage.getItem("initials")) || [];
        
            
        for (var i = 0; i < highScores.length; i++) {
            var userObject = highScores[i];
            console.log(userObject)
            var li = document.createElement("li");
            li.textContent = userObject.initial + " - " + userObject.score;

            ol.appendChild(li)
            }

   }

