const loader = document.querySelector('#loading')
let dailybite = false

function generateRandomVariable(i, max) {
    return Math.floor(Math.random() * (max - i))
}

function displayLoading() {
    loader.classList.add('display')

    setTimeout(() => {
        loader.classList.remove('display')
    }, 5000)
}

function hideLoading() {
    loader.classList.remove('display')
}

function generateCard(quote, author) {
    let card = document.createElement('div')
    card.classList.add('card')
    let quotestext = document.createElement('h3')
    quotestext.classList.add('quote')
    quotestext.innerHTML = `“${quote}”`
    let quotesauthor = document.createElement('h4')
    quotesauthor.classList.add('author')
    quotesauthor.innerHTML = `-${author}`
    card.appendChild(quotestext)
    card.appendChild(quotesauthor)
    document.querySelector('.card-container').appendChild(card)
}

function generateCards(arr) {
    let quotesarray = [...arr]
    for (var i = 0; i < 6; i++) {
        let randomvar = generateRandomVariable(i, 19 - i)
        generateCard(
            quotesarray[randomvar]['content'],
            quotesarray[randomvar]['author']
        )
        quotesarray.splice(randomvar, 1)
    }
}

function generateqodCard(quote, author) {
    document.querySelector('#qodquote').innerHTML = `“${quote}”`
    document.querySelector('#qodauthor').innerHTML = `-${author}`
}

function getData() {
    fetch('https://api.quotable.io/quotes?page=1')
        .then((response) => response.json())
        .then((data) => {
            hideLoading()
            generateCards(data.results)
        })
        .catch((error) => console.log('ERROR OCCURED'))
}

function getQod() {
    fetch('https://quotes.rest/qod')
        .then((response) => response.json())
        .then((data) => {
            generateqodCard(
                data.contents.quotes[0].quote,
                data.contents.quotes[0].author
            )
        })
        .catch((error) => console.log('ERROR OCCURED'))
}

document.getElementById('qodbtn').addEventListener('click', function(e) {
    if (dailybite === false) {
        getQod()
        document.getElementById('qod-container').style.visibility = 'visible'
        dailybite = true
    } else {
        document.getElementById('qod-container').style.visibility = 'hidden'
        dailybite = false
    }
})
document.getElementById('closebtn').addEventListener('click', function(e) {
    console.log('close')
    if (dailybite == true) {
        document.getElementById('qod-container').style.visibility = 'hidden'
        dailybite = false
    }
})
displayLoading()
getData()