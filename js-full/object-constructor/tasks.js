let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1
console.log(table.money); // undefined

// -----------

/* let hamster = {

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
    stomach: [],
  __proto__: hamster,
};

let lazy = {
    stomach: [],
  __proto__: hamster,
}; */

let hamster = {
    stomach: [],

    eat(food) {
      this.stomach = [...this.stomach,food];
    },
  };
  
  let speedy = {
    __proto__: hamster,
  };
  
  let lazy = {
    __proto__: hamster,
  };

// This one found the food
speedy.eat("apple");
speedy.eat("brocoli");
console.log(speedy.stomach); // apple, brocoli

// Empty
console.log(lazy.stomach); // 
