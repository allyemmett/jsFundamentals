let temp = 75;

// Read as: if "temp" is less than 70, console.log "Wear a jacket", if "temp" is NOT less than 70, console.log "No jacket necessary"
if (temp < 70) {
        console.log("Wear a jacket");
} else {
    console.log("No jacket necessary");
}

/*
CHALLENGE
************
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

// Bronze
let name = "Ally";

if (name == "Ally") {
    console.log(name)
} else {
    console.log("Hello, what is your name?")
}

// Silver
let name= "Ally";

if (name == "Ally") {
    console.log("Hello, my name is" , name)
} else {
    console.log("Hello, what is your name?")
}

// Gold
let name = "Ally"
if (name == "Al") {
    console.log(name)
} else {
    console.log("Hello, is your name" , name + "?")
}

/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

let myName = "zAchARy";
/* Will have the same result
console.log(myName.charAt(0));
console.log(myName[0]);
*/

// BRONZE
let myName = "zAchARy"


if (myName [0] == myName [0].toUpperCase()) {
    //Read as: if first letter (0) is EQUAL to uppercase version of the first letter (0)
console.log(myName)
} else {
    console.log("Hey, this isn't written correctly")
}

// SILVER
let myName = "zAchARy"

if (myName [0] == myName [0].toUpperCase()) {
console.log(myName [0])
} else {
// Can do
// console.log(myName [1] + myName [2] + myName [3] + myName [4] + myName [5] + myName [6])
// But easier if
console.log(myName.slice(1, 7).toLowerCase())
}

//GOLD
let myName = "zAchARy"
if (myName [0] == myName [0].toUpperCase()) {
    console.log(myName[0] + (myName.slice(1).toLowerCase()))
} else {
    console.log(myName[0].toUpperCase() + (myName.slice(1).toLowerCase()))
}

/*
CHALLENGE
************
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 25;

if (age >= 25) {
    console.log("You can rent a car");
} else if (age >= 21) {
        console.log("You can drink!");
} else if (age <= 18) {
        console.log("You can vote!");
} else { 
        console.log("Sorry you're too young to do anything.");
}
