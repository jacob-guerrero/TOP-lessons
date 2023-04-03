/* Inheritance in classes using extends*/
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mitzie");
d.speak(); // Mitzie barks.

// Second example
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

const l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.

/* Extending plain objects */
const AnimalPO = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  },
};

class DogPO {
  constructor(name) {
    this.name = name;
  }
}

Object.setPrototypeOf(DogPO.prototype, AnimalPO);

const dPO = new DogPO("Mitzie");
dPO.speak(); // Mitzie makes a noise.

// -----------------

/* Mixins */
const calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

const randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };

// Using the mixins:
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}

// -------

/* Composition over inheritance */
const barker = (state) => ({
  bark: () => console.log("Woof, I am " + state.name),
});

const driver = (state) => ({
  drive: () => (state.position = state.position + state.speed),
});

const killer = (state) => ({
  kill: () => console.log("Woof, I kill at " + state.position),
});

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0,
  };
  return Object.assign({}, barker(state), driver(state), killer(state));
};

murderRobotDog("Sniffles").bark();
