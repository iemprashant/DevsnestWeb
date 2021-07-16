const questionelement = document.getElementById('question')
const choices = document.getElementsByClassName('answer-text')
const progressText = document.getElementById('progressText')
const progressBarFull = document.getElementById('progressBarFull')
const scoreText = document.getElementById('score')
    // QuestionsList
let questionsArray = [{
            question: 'JavaScript is a ___ -side programming language.',
            choice1: 'Client',
            choice2: 'Server',
            choice3: 'Both',
            choice4: 'None',
            answer: 3,
        },
        {
            question: 'What will the code return:-   Boolean(3 < 7)',
            choice1: 'true',
            choice2: 'false',
            choice3: 'NaN',
            choice4: 'SyntaxError',
            answer: 1,
        },
        {
            question: 'Which of the following print content on the browser window?',
            choice1: 'document.write(“print content”);',
            choice2: 'response.write(“print content”);',
            choice3: 'document.write(print content);',
            choice4: ' write(“print content”);',
            answer: 1,
        },
        {
            question: 'Which of the following statements will show a message as well as ask for user input in a popup?',
            choice1: 'alert()',
            choice2: 'prompt()',
            choice3: 'confirm()',
            choice4: 'message()',
            answer: 2,
        },
        {
            question: 'Which of the following is an event listener in JavaScript?',
            choice1: 'onclick',
            choice2: 'blur',
            choice3: 'click',
            choice4: 'Click()',
            answer: 4,
        },
    ]
    // game variable
let score = 0
let questioncounter = 0
let gameplay = false
let gamelock = true
let totalquestionCount = questionsArray.length
let maxscore = totalquestionCount * 10
    // game function

function changeChoiceColour(target, targetclass) {
    target.parentElement.classList.add(targetclass)
}

function removeChoiceColour(target, targetclass) {
    target.parentElement.classList.remove(targetclass)
}

function isanswermatch(targetanswer, defaultanswer) {
    return targetanswer == defaultanswer
}

function updatescoreboard(targetscore) {
    scoreText.innerHTML = `${targetscore}`
}

function updatequestionboard(quescount, totalques) {
    progressText.innerText = `Question: ${quescount}/${totalques}`
}

function updateProgressbar(quescount, totalques) {
    progressBarFull.style.width = `${(quescount / totalques) * 100}%`
}

function updateQuestionElemnt(questionvalue) {
    questionelement.innerHTML = questionvalue['question']
}

function updateallchoices(questionvalue) {
    for (let choice of choices) {
        const datasetnumber = choice.dataset['number']
        let choicevalue = questionvalue['choice' + datasetnumber]
        choice.innerHTML = `${choicevalue}`
    }
}

function getNewQuestion(quescount, totalques, questionsarray) {
    if (quescount >= totalques) {
        gamelock = true
        return
    }
    quescount++
    updatequestionboard(quescount, totalques)
    updateProgressbar(quescount, totalques)
    let currentQuestion = questionsarray[quescount - 1]
    updateQuestionElemnt(currentQuestion)
    updateallchoices(currentQuestion)
    return quescount
}

function gamepopup(currentscore, maxpossiblescore, quescount, totalques) {
    if (quescount !== totalques) {
        return
    }
    alert(`Your score is ${currentscore}/${maxpossiblescore}`)
    window.location.reload()
}
// Play button function
document.getElementById('playBtn').addEventListener('click', function(e) {
        if (!gameplay) {
            questioncounter = getNewQuestion(
                questioncounter,
                totalquestionCount,
                questionsArray
            )
        }
        gameplay = true
        gamelock = false

        document.getElementById('board').style.visibility = 'visible'
    })
    // gamelogic start

for (let choice of choices) {
    choice.addEventListener('click', (e) => {
        if (!gameplay) return
        else if (gamelock) return
        else {
            gamelock = true
            const selectedchoice = e.target
            const selectedAnswer = selectedchoice.dataset['number']
            const choicecolour = isanswermatch(
                    selectedAnswer,
                    questionsArray[questioncounter - 1]['answer']
                ) ?
                'correct' :
                'incorrect'
            changeChoiceColour(selectedchoice, choicecolour)
            if (choicecolour == 'correct') {
                score += 10
            }
            updatescoreboard(score)
            setTimeout(() => {
                removeChoiceColour(selectedchoice, choicecolour)
                gamepopup(score, maxscore, questioncounter, totalquestionCount)
                questioncounter = getNewQuestion(
                    questioncounter,
                    totalquestionCount,
                    questionsArray
                )
                gamelock = false
            }, 1000)
        }
    })
}
document.getElementById('reloadBtn').addEventListener('click', function(e) {
    window.location.reload()
})

window.onload = start()