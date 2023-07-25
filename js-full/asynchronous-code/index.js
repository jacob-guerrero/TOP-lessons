const myDiv = document.querySelector("div#myDiv")

myDiv.addEventListener("click", function(event){
  console.log("You clicked me!", event)
})

const array = [1,2,3,4]

array.forEach(callback)

function callback(arg){
  console.log(arg * 2)
}