const loader = document.querySelector('#loading')

function generateRandomVariable(i, max) {
    return Math.floor(Math.random() * (max - i))
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

function getData() {
    fetch('https://api.quotable.io/quotes?page=1')
        .then((response) => response.json())
        .then((data) => {
            hideLoading()
            generateCards(data.results)
        })
        .catch((error) => console.log('ERROR OCCURED'))
}

function displayLoading() {
    loader.classList.add('display')
        // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove('display')
    }, 5000)
}

function hideLoading() {
    loader.classList.remove('display')
}

function getQod() {
    fetch('https://quotes.rest/qod')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.contents.quotes[0].quote)
        })
        .catch((error) => console.log('ERROR OCCURED'))
}

document.getElementById('qodbtn').addEventListener('click', (e) => {
    getQod()
})

document.getElementById('closebtn').addEventListener('click', function(e) {
    console.log('close')
})
displayLoading()
getData()