// Hello, object
let user = {};
user.name = "John";
user['surname'] = "Smith";
user.name = "Pete";
delete user['name'];


// Check for emptiness
function isEmpty(obj) {
    for (let prop in obj) {
        return false
    }
    return true
}

let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false


// Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let prop in salaries) {
    sum += salaries[prop]
}
console.log(sum);


// Multiply numeric property values by 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if ((typeof obj[key]) == 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);