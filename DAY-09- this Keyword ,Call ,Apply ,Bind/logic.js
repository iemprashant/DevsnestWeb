var remainingVar = 120
var bookedVar = 0
var bookedSeats = document.querySelector('.bookedSeats')
const gridContainer = document.querySelector('.grid-container')
for (let i = 1; i <= 120; i++) {
  const divbox = document.createElement('div')
  divbox.classList.add('box')
  divbox.id = `${i}`
  gridContainer.appendChild(divbox)
  divbox.addEventListener('click', (e) => {
    if (e.target.classList.contains('checked')) {
      e.target.classList.remove('checked')
      bookedVar--
      remainingVar++
      bookedSeats.innerHTML = bookedVar
    } else {
      e.target.classList.add('checked')
      bookedVar++
      remainingVar--
      bookedSeats.innerHTML = bookedVar
    }
  })
}
