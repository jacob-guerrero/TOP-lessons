function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = () => {
    console.log(name);
  };
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'

// ---------------

// Constructor for making "Book" objects
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => `${title} by ${author}, ${pages}, ${read}`;
}

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295 pages",
  "not read yet"
);
console.log(theHobbit.info());


// ---------------

// Using Prototypes
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

Student.prototype.sayName = function () {
  console.log(this.name);
};
Student.prototype.goToProm = function () {
  console.log("Eh.. go to prom?");
};
