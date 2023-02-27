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
/* function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

Student.prototype.sayName = function () {
  console.log(this.name);
};
Student.prototype.goToProm = function () {
  console.log("Eh.. go to prom?");
}; */

// Inherited Prototype
function Student() {}

Student.prototype.sayName = function () {
  console.log(this.name);
};
Student.prototype.sayGrade = function () {
  console.log(this.grade);
};

function EighthGrader(name) {
  this.name = name;
  this.grade = 8;
}

// Using Object.create!!
EighthGrader.prototype = Object.create(Student.prototype);

function NinthGrader(name) {
  this.name = name;
  this.grade = 9;
}

// Use it again to ninth grader!
NinthGrader.prototype = Object.create(Student.prototype);

NinthGrader.prototype.sayName = function () {
  console.log("HAHAHAHAHAHA");
};

const carl = new EighthGrader("carl");
carl.sayName();
carl.sayGrade();

const lucy = new NinthGrader("lucy");
lucy.sayName();
lucy.sayGrade();

// ---------

/* Creating a Constructor, and prototype */
function MyConstr(title, name) {
  this.title = title;
  this.name = name;
}

MyConstr.prototype.sayAll = function () {
  return `He is ${this.name}, a ${this.title}.`;
};

const person1 = new MyConstr("lawyer", "Bill");
console.log(person1.name);
console.log(person1.sayAll());
