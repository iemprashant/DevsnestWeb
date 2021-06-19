const gridContainer = document.querySelector('.grid-container')
for (let i = 1; i <= 660; i++) {
  const divbox = document.createElement('div')
  divbox.classList.add('box')
  divbox.id = `${i}`
  divbox.addEventListener('click', () => {
    changeState(divbox)
  })
  gridContainer.appendChild(divbox)
}

const Activeblack = [
  30, 31, 53, 54, 76, 97, 98, 99, 100, 101, 118, 124, 140, 146, 163, 167, 184,
  185, 186, 187, 188, 189, 190, 205, 213, 227, 248, 231, 232, 233, 234, 235,
  236, 252, 259, 270, 273, 282, 292, 295, 304, 318, 326, 340, 341, 346, 347,
  364, 365, 366, 367, 314, 336, 358, 380, 402, 424, 446, 468, 490, 512, 534,
  556, 579, 580, 581, 560, 538, 517, 518, 541, 563, 586, 587, 588, 369, 391,
  413, 435, 457, 479, 501, 523, 545, 567, 291, 290, 311, 333, 355, 377, 399,
  421, 443, 465, 488, 489,
]
const ActiveRed = [119, 120, 121, 122, 123, 143, 144, 145]
const ActiveDarkred = [141, 142, 164, 165, 166]
const ActiveYellow = [
  206, 207, 208, 209, 210, 211, 212, 228, 229, 230, 250, 251, 272, 294, 316,
  317, 338, 339, 340, 360, 361, 362, 363, 382, 383, 384, 385, 386, 387, 388,
  389, 390, 368, 450, 451, 452, 453, 454, 455, 404, 405, 406, 407, 408, 409,
  410, 411, 427, 428, 429, 430, 431, 432, 433,
]
const ActiveMustard = [
  249, 293, 271, 315, 337, 359, 381, 403, 412, 434, 455, 456, 425, 426, 447,
  448, 449, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 491, 492, 493,
  494, 495, 496, 497, 498, 499, 500, 513, 514, 515, 516, 519, 520, 521, 522,
  536, 537, 535, 542, 543, 544, 557, 558, 559, 564, 565, 566, 312, 334, 356,
  378, 400, 422, 444, 466, 313, 335, 357, 379, 401, 423, 445, 467,
]
const ActiveWhite = [255, 256, 257, 258, 277, 278, 279, 280, 281]
const ActiveBlue = [253, 254, 276, 275, 298, 299, 300, 301, 302, 303]
const ActiveDarkblue = [
  319, 320, 321, 322, 323, 324, 325, 297, 296, 274, 342, 343, 344, 345,
]
const markcolour = (Colorarray, colorname) => {
  for (let id of Colorarray) {
    const colourbox = document.getElementById(`${id}`)
    colourbox.classList.add(`${colorname}`)
  }
}
markcolour(Activeblack, 'black')
markcolour(ActiveRed, 'red')
markcolour(ActiveYellow, 'yellow')
markcolour(ActiveBlue, 'blue')
markcolour(ActiveDarkblue, 'darkblue')
markcolour(ActiveMustard, 'mustard')
markcolour(ActiveDarkred, 'darkred')
markcolour(ActiveWhite, 'white')
const changeState = (divbox) => {
  divbox.classList.toggle('active')
}
