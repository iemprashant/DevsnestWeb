const gridContainer = document.querySelector('.game-container')
for (let i = 1; i <= 12; i++) {
    const divbox = document.createElement('div')
    divbox.classList.add('box')
    divbox.id = `${i}`
    gridContainer.appendChild(divbox)
}
console.log('ndkjhn')