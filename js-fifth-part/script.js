let user = {
    name: "John",
    age: 30,
    "likes birds": true,
    error: true,
}
delete user.error;
console.log(user);

//let key = prompt("What info do you want?", 'name');
//alert(user[key]);

//complex expressions must use square brackets:
let fruit = prompt('what fruit do you want?', 'apple');
let bag = {
  [fruit + 'Computers']: 5
};
console.log(bag['appleComputers'])

