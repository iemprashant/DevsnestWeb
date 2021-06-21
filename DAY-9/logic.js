var remainingVar = 36
var bookedVar = 0
var remainingSeats = document.querySelector('.remainingSeats')
var bookedSeats = document.querySelector('.bookedSeats')
const gridContainer = document.querySelector('.grid-container')
for (let i = 1; i <= 36; i++) {
  const divbox = document.createElement('div')
  divbox.classList.add('pixel')
  divbox.id = `${i}`
  gridContainer.appendChild(divbox)
  divbox.addEventListener('click', (e) => {
    if (e.target.classList.contains('checked')) {
      e.target.classList.remove('checked')
      bookedVar--
      bookedSeats.innerHTML = 'Booked Seats : ' + bookedVar
      remainingVar++
      remainingSeats.innerHTML = 'Remaining Seats : ' + remainingVar
    } else {
      e.target.classList.add('checked')
      bookedVar++
      bookedSeats.innerHTML = 'Booked Seats : ' + bookedVar
      remainingVar--
      remainingSeats.innerHTML = 'Remaining Seats : ' + remainingVar
    }
  })
}
