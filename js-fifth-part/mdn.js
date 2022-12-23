// From mdn web docs
const person = {
    name: {
        first: "Bob",
        last: "Smith",
    },
    age: 32,
    bio: function () {
      console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name.first}.`);
    }, //Shorter syntax for a function
};

//Adding new info
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};

//Adding member values and names using variables
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;


//Creating objects with functions
function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
}
//Using the function above
const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();


//Doing the same but using constructors
function Person(name) { //the Capital letter in "Person" identifies a constructor
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
}
//Using the constructor above
const frankie = new Person("Frankie"); //Note that we use "new"
frankie.name;
frankie.introduceSelf();

const myNotification = new Notification("Hello!");