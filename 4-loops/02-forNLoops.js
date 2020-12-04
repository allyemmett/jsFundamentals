/*
    FOR IN LOOPS

        - great for iterating over values in an object. Properties in an object are what are known as Enumerable simply means that the properties can be counted.
        - for in Loops iterate over an objects enumerable properties
*/

// objects hold what are called key/value pairs
let student = {
// key value    - values are assigned using a :, not an =
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    week: 1
}

for (let item in student) {
    console.log(item); //gives the key
    console.log(student[item]) //gives the value of the key
}

let catArray = ['tabby', 'british shorthair', 'bermese', 'maine coon', 'rag doll'];

for (let cat in catArray) {
  //  console.log(cat); // gives the index
    console.log(catArray[cat]) // gives the value of the index
}

// CHALLENGE: write a for in Loop that capitalizes the first letter of a name, and Lowercases the rest.

let name = "sPongeBoB";
let capName;
for (let index in name) {
    // console.log(typeof index); // gives indexes of name variable - 0, 1, 2, etc
    if (Number(index) === 0) {
        capName = name[index].toUpperCase();
    } else {
        capName += name[index].toLowerCase();
    }
}
console.log(capName);
