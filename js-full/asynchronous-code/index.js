const myDiv = document.querySelector("div#myDiv");

myDiv.addEventListener("click", function (event) {
  console.log("You clicked me!", event);
});

const array = [1, 2, 3, 4];

array.forEach(callback);

function callback(arg) {
  console.log(arg * 2);
}

/* new Promise(function (resolve, reject) {
  // A mock async action using setTimeout

  //  setTimeout(function () {
  //    resolve(10);
  //  }, 2000);

  setTimeout(function () {
    reject("Error: This is a test");
  }, 2000);
})
  .then(function (num) {
    console.log("first then: ", num);
    return num * 2;
  })
  .then(function (num) {
    console.log("second then: ", num);
    return num * 2;
  })
  .then(function (num) {
    console.log("last then: ", num);
  })
  .catch(handleError);

function handleError(error) {
  console.log(error);
} */

/* Promises */
const promise = fetch("data/cats.json")
.then(convertToJson)
.then(displayNames);

console.log("Our promise: ", promise);

function convertToJson(resp) {
  return resp.json();
}

function displayNames(data) {
  console.log(data.cats);
  const cats = data.cats;
  cats.forEach(getOneCatName);
}

function getOneCatName(cat) {
  console.log(cat.name);
}
