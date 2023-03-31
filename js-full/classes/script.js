/* Getters and Setters */
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  },
};

/* First example */
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};
// set fullName is executed with the given value.
user.fullName = "Alice Cooper";
console.log(user.name); // Alice
console.log(user.surname); // Cooper

/* Accessor and descriptors */
let user2 = {
  name: "John",
  surname: "Smith",
};
// Create an accessor fullName with defineProperty
Object.defineProperty(user2, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});
// Note that a property can be either an accessor or a data property, not both.
console.log(user2.fullName); // John Smith
for (let key in user2) console.log(key); // name, surname

// ---------------

/* First Basic Class Example */
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

// Usage:
let userClass = new User("John");
userClass.sayHi();

/* Classes expressions */
let UserNamedClass = class MyClass {
  sayHi() {
    console.log(MyClass);
  }
};
new UserNamedClass().sayHi();
// console.log(MyClass); // Doesn't work because MyClass it's visible only inside the class

/* Getters and Setters in classes */
class UserGS {

  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }

}

let userGS = new UserGS("JohnGS");
console.log(userGS.name); // John

user = new UserGS(""); // Name is too short.

