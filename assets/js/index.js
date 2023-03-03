var btn = document.getElementById('start')
var timerContainer = document.getElementById('timer')
var startPage = document.getElementById('start-page')
var qAndA = document.getElementById('questionItem')
var answersDisplayed= document.getElementById('choices')


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
        // answer:this.choices[1], 
    },
    { 
        question: "Which of the following methods is used to access HTML elements using Javascript? ",
        choices: ["getDOM", "getHTML", "forEach()", "getElementbyId()" ],
        // answer:this.choices[3], 
    },
    { 
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        choices: ["convert()", "parse()", "stringify()", "function()" ],
        // answer:this.choices[2], 
    },
    { 
        question: "How to stop an interval timer in Javascript? ",
        choices: ["clearInterval", "clearTimer", "intervalOver", "unsetInterval" ],
        // answer:this.choices[0], 
    },

]



var choice = 0; 
// Looping over each object and storing it in questionAnswer




function createAnswerChoices (questionIndex){
    // questionsArray.forEach((currentQuestion)=>{
        var currentQuestion = questionsArray[questionIndex]
        let title = document.createElement('h3')
        let text1 = document.createTextNode(currentQuestion.question)
        const currentChoices = currentQuestion.choices
        title.appendChild(text1)
        qAndA.appendChild(title)

        for(let i = 0; i < currentChoices.length; i++){
            let answerCard = document.createElement('button');
            let text2 = document.createTextNode(currentChoices[i]);
            answerCard.appendChild(text2)

            answerCard.addEventListener('click', function (event){
                console.log(event.target.innerHTML)
                console.log(event.target.innerHTML=== currentQuestion.answer)
            })
            qAndA.appendChild(answerCard)
        }
    //  })
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
btn.addEventListener('click', function(){
    timer();
    startPage.style.display = "none";
    qAndA.style.visibility = "visible";
    createAnswerChoices(1);
    btn.style.display = "none"
})

