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


