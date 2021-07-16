## THA-7 Object Assignment

Question-1

> Write a JavaScript program to list the properties of a JavaScript object.
>Sample object:
>var student = {
>name : "David Rayy",
>sclass : "VI",
>rollno : 12 };
>Sample Output: name,sclass,rollno

```javascript
var student = {
  name: 'Prashant Gupta',
  sclass: 'VI',
  rollno: 11,
}
var ans = Object.keys(student)
console.log(ans.join(','))

console.log(student)

delete student.rollno

console.log(student)
```

Question-2

>Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };


```javascript
var student = { name : "Prashant Gupta", sclass : "VI", rollno : 12 };

console.log(student);
delete student.rollno;
console.log(student);
```

Question-3
>Write a JavaScript program to get the length of a JavaScript object.
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };


```javascript
var student = {
  name: 'Prashant Gupta',
  sclass: 'VI',
  rollno: 11,
}
var size = Object.keys(student).length
console.log(size)

```

Question-4

 >Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];

```javascript
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

```

Question-5

>Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.z

```javascript
const volume = {
  pi: Math.PI,
  radius: 10,
  height: 10,
  ans: function () {
    return (volume.pi * volume.radius ** 2 * volume.height).toFixed(4)
  },
}

console.log(volume.myVal())

```

Question-6

>Write a JavaScript program to sort an array of JavaScript objects.
Sample Object :
var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
Expected Output:
[[object Object] {
  author: "Walter Isaacson",
  libraryID: 4264,
  title: "Steve Jobs"
}, [object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
  author: "The Road Ahead",
  libraryID: 1254,
  title: "Bill Gates"
}]

```javascript
var library = [ 
{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 


library.sort((a, b) => (a.libraryID > b.libraryID) ? -1 : 1);
for(let item in library){
  console.log(library[item].title+" "+library[item].author+" "+library[item].libraryID);
}
```
