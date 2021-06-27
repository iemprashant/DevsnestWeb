let wordsarray = [
    'red',
    'orange',
    'black',
    'blue',
    'green',
    'purple',
    'pink',
    'brown',
    'grey',
]
wordsarray = [...wordsarray, ...wordsarray]

// DOM manupulation
for (let i = 1; i <= 18; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    let cardinner = document.createElement('div')
    cardinner.classList.add('card-inner')
    let cardfront = document.createElement('div')
    cardfront.classList.add('card-front')
    let cardback = document.createElement('div')
    let random = Math.floor(Math.random() * (18 - i))
    cardback.innerHTML = '<h2>' + wordsarray[random] + '</h2>'
    cardback.classList.add('card-back')
    wordsarray.splice(random, 1)
    cardinner.appendChild(cardfront)
    cardinner.appendChild(cardback)
    card.appendChild(cardinner)
    document.querySelector('.game-container').appendChild(card)
}
// Utility functions
const changeboard = (target, querytarget) => {
    document.querySelector(querytarget).innerHTML = target
}

function flipcard(democard) {
    democard.firstChild.classList.add('flipped')
}

function Unflipcard(democard) {
    democard.firstChild.classList.remove('flipped')
}

function removecard(democard) {
    democard.style.visibility = 'hidden'
}

function matchcards(firstcard, secondcard, score) {
    let ismatch =
        firstcard.firstChild.lastChild.innerHTML ===
        secondcard.firstChild.lastChild.innerHTML
    if (ismatch) {
        score += 10
        removecard(firstcard)
        removecard(secondcard)
    } else {
        Unflipcard(firstcard)
        Unflipcard(secondcard)
    }
    return score
}

function gamepopup(movescount, scorecount) {
    if (movescount == 0) {
        alert('gameover')
    }
    if (score === 90) {
        alert('You Won')
    }
}

// Game Logic
// utility variables
let moves = 50
let score = 0
let gamelock = true
let firstcardclicked
    // Show inital value to board
changeboard(moves, '.movesnumber')
changeboard(score, '.scores')
let cards = document.getElementsByClassName('card')
    // playgame buttons function
document.getElementById('playBtn').addEventListener('click', function(e) {
        gamelock = false
    })
    // reload buttons function
document.getElementById('reloadBtn').addEventListener('click', function(e) {
    window.location.reload()
})
for (let card of cards) {
    card.addEventListener('click', (e) => {
        if (gamelock) {
            return
        } else {
            moves--
            changeboard(moves, '.movesnumber')
            if (!firstcardclicked) {
                firstcardclicked = card
                flipcard(card)
            } else {
                flipcard(card)
                gamelock = true
                setTimeout(() => {
                    score = matchcards(firstcardclicked, card, score)
                    changeboard(score, '.scores')
                    firstcardclicked = undefined
                    gamelock = false
                    gamepopup(moves, score)
                }, 500)
            }
        }
    })
}