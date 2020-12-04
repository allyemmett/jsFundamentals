/*
    - arrays are containers that hold a list of items
        - arrays can hold numerous data types
    - denoted by the []
*/

let list = ["orange", "banana", "apple"];


console.log(list[1]);

/*
    - when we call an array, we can append square brackets onto the end of our array with the index number that we want to reference.
    - javascript starts counting at 0
*/

let students = ["Amruta", "Marco", "Nick", "Carolina", 4, true ["Adam", "Alexandra", "Alexia", "Allyson"]];

console.log(typeof students); // object is a data type that holds multiple sets of data, which is also true for arrays.

console.log(students instanceof Array); //the instanceof operator is used to check the type of object at runtime. Will return a true or false value

console.log(students[2]); // Nick
console.log(students[1]); // Marco

// CHALLENGE: dive into nested array in the students array and pull out value
let students = ["Amruta", "Marco", "Nick", "Carolina", 4, true ["Adam", "Alexandra", "Alexia", "Allyson"]];

let name = students[6][1];
console.log(name); // Alexandra