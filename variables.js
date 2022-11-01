const { json } = require("express")

var myStr = "I am a \"double quoted\" string insted \"double quotes\""



myStr +=  " I am after quotes"

console.log (myStr)


var lastName = "Keshwani"

console.log(lastName.length)


var ourArray = ["A", "B", "Davif"]
//pop to remove
//push to add
//shift removes first element instead of last
//unshift add's element to beg of array

function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5]

console.log("Before : " + JSON.stringify(testArr)) // to convert to String

console.log(nextInLine(testArr, 10));

console.log("After " + JSON.stringify(testArr))

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
}

var entreeValue = testObj['an entree'] // if there is space you need to use bracket notation
console.log(entreeValue)

delete testObj["my side"] //to delete property

console.log(testObj)


