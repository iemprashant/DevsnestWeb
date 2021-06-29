const question = document.getElementsByClassName('question')
const choices = document.getElementsByClassName('answer-text')
const progressText = document.getElementById('progressText')
const progressBarFull = document.getElementById('progressBarFull')
const scoreText = document.getElementById('score')
let score = 0
let questioncounter = 0
let gameplay = false
let gamelock = true
let questions = [{
        question: 'Inside which HTML element do we put the JavaScript??',
        answer1: '<script>',
        answer2: '<javascript>',
        answer3: '<js>',
        answer4: '<scripting>',
        answer: 1,
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answer1: "<script href='xxx.js'>",
        answer2: "<script name='xxx.js'>",
        answer3: "<script src='xxx.js'>",
        answer4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        answer1: "msgBox('Hello World');",
        answer2: "alertBox('Hello World');",
        answer3: "msg('Hello World');",
        answer4: "alert('Hello World');",
        answer: 4,
    },
]

function changeChoiceColour(target, targetclass) {
    target.parentElement.classList.add(targetclass)
}

function getNewQuestion() {
    console.log('hello')
}

function checkanswer(targetanswer, defaultanswer) {
    return targetanswer === defaultanswer
}

function updatescore(targetscore) {
    targetscore += 10
    scoreText.innerText = score
}
// Play button function
document.getElementById('playBtn').addEventListener('click', function(e) {
        gameplay = true
        gamelock = false
        getNewQuestion()
    })
    // gamelogic start

let currentQuestion = questions[questioncounter]
for (let choice of choices) {
    choice.addEventListener('click', (e) => {
        if (!gameplay) return
        else if (gamelock) return
        else {
            gamelock = true
            const selectedchoice = e.target
            const selectedAnswer = selectedchoice.dataset['number']
            if (checkanswer(selectedAnswer, currentQuestion.number)) {
                changeChoiceColour(selectedchoice, 'correct')
                score = updatescore(score)
            } else {
                changeChoiceColour(selectedchoice, 'incorrect')
            }
        }
        setTimeout(() => {
            changeChoiceColour(selectedchoice, 'incorrect')
            getNewQuestion()
        }, 1000)
    })
}
document.getElementById('reloadBtn').addEventListener('click', function(e) {
    window.location.reload()
})