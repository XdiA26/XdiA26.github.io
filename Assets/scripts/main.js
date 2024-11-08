/*console.log("Hello World")
console.log("Welcome to Web Dev 101")

const myVar = "I cam frorm a variable"
console.log(myVar)



function myFunc(var1) {
    return "I am working function"
}
console.log(myFunc("shit"))

function mySum(x, y) {
    return x + y
}
function mySub(x, y) {
    return x - y
}
function myMult(x, y) {
    return x * y
}
function myDiv(x, y) {
    return x / y
}
function myExp(x, y) {
    return x ** y
}
function myMod(x, y) {
    return x % y
}


console.log(mySum(12, 10))
console.log(mySub(20, 10))
console.log(myMult(5, 10))
console.log(myDiv(20, 10))
console.log(myExp(25, 10))
console.log(myMod(25, 10))

const age = 18
if (age < 18) {
    console.log("You are Minor")
}
else if (age = 18) {
    console.log("you are barely adult")
}
else {
    console.log("You are Old as shit")
}

for (let x =1;x<=100;x=x+2) {
    if (x % 2 != 0) {
        console.log(x)
    }
    
}

let x = 0
while (x <- 10) {
    console.log(x)
    x++
}
    */

const body = document.body
document.body.append("Hello World", " Web Dev 101")

const div = document.createElement("div")
body.append(div)

div.innerText = "hello world"
div.textContent = "shit"
//unsafe
div.innerHTML = "<strong>FUCK</strong>"

//safer
const strong = document.createElement("strong")
div.append(strong)

const spanDiv = document.querySelector("div")
const spanHi = document.querySelector("hi")
const spanBye = document.querySelector("bye")

spanHi.classList.add("new-class")
spanHi.classList.remove("hi1")
spanHi.classList.toggle("hi1")