function generateRandomVariable(i, max) {
    return Math.floor(Math.random() * (max - i))
}

function generateCard(quote, author) {
    console.log(author)
    console.log(quote)
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

function generatehtml(arr) {
    let quotesarray = [...arr]
    for (var i = 0; i < 6; i++) {
        let randomvar = generateRandomVariable(i, 19 - i)
        generateCard(
            quotesarray[randomvar]['content'],
            quotesarray[randomvar]['author']
        )
    }
}

function getData() {
    fetch('https://api.quotable.io/quotes?page=1')
        .then((response) => response.json())
        .then((data) => {
            generatehtml(data.results)
        })
        .catch((error) => console.log('ERROR OCCURED'))
}

getData()