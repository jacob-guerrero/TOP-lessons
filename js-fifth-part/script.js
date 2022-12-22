let user = {
    name: "John",
    age: 30,
    "likes birds": true,
    error: true,
}
delete user.error;
//console.log(user);
// let key = prompt("What info do you want?", 'name');
// alert(user[key]);


// Complex expressions must use square brackets
/* let fruit = prompt('what fruit do you want?', 'apple'); 
let bag = {
  [fruit + 'Computers']: 5
};
console.log(bag['appleComputers']) */


// Property value shorthand
function makeUser(name, age) {
    let user1 = {
        name: name,
        age,    // same as age: age
    }
    return user1;
}
let userCreated = makeUser('Joseph', 20);
//console.log(userCreated);


// Using "in" to know if the property exist
//console.log("name" in userCreated);


// Using for...in
let user2 = {
    name: "John",
    age: 30,
    isAdmin: true,
};

for (let prop1 in user2) {
    console.log(prop1); //prop1 has all the properties of user2
    console.log(user2[prop1]);
}

