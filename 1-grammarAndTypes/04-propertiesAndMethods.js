/*
    PROPERTIES AND METHODS

    - In most cases, properties are qualities related to the data we're working with, and methods are actions we perform on the data. Using a method causes something to happen to the data while using a property returns information about the data.

    - property and .methods()
        - methods have parentheses behind them, properties do not
*/

// STRING PROPERTIES 

// Length
let myName = "Ally";
console.log(myName.length);

let myFullName = "Allyson";
console.log(myFullName.length);

// STRING METHODS

let myDogsName = "Estella";
console.log(myDogsName.toUpperCase()); // change a string to uppercase

let home = "My home is Fort Wayne"
console.log(home.includes("Fort Wayne"));

// challenge:use google to find MDN documentation for string methods. Research string ".split()" method, and use and implement it to get an array back from a string.

let sent = "This sentence will be split into individual parts";
console.log(sent.split('')); // splits at each individual character
console.log(sent.split(' ')); // split at each space in the original 
console.log(sent.split(",")); // split at the comma (if included)

