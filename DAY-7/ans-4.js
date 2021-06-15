var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
]

for (items in library) {
  console.log(library[items].author)
}
for (items in library) {
  console.log(library[items].title)
}
for (items in library) {
  console.log(library[items].readingStatus)
}
