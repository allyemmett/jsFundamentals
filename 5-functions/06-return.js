/*
    RETURN

        - the return keyword allows us to return a variable or value that is local to the scope of a function, and access that variable or value within the global scope of the document
*/

// FUNCTION DECLARATION
function myName(fName) {
    // console.log(fName);

    return (fName);  //will return parameter value from local scope to access in global scope
}

myName("Ally");
// when we return a value from a function, we need to assign the call of our function to a variable to capture the return value from the function


let myNameIs = myName("Ally"); //when this line of code is read, the function will run before anything else. Since we're returning a value from that function, our return value that will be assigned to our variable of myNameIs
console.log(myNameIs);


//********************

function hello() {
    let a = "A";
    let b = "B";
    let c = "C";

    let ABC = `The first three letters of the alphabet are ${a}, ${b}, ${c}`;

    return (ABC);
}

let string = hello();
//call function
console.log(string);
//console.log(new variable for function), then will have access to local scope from above


// BLOCK BODY ARROW FUNCTION
let myName = (fName) => {
    return (fName); //need return since it is BLOCK BODY, not concise & won't do automatically
}
let myNameIs = myName("Spongebob");
console.log(myNameIs);

// CONCISE BODY ARROW FUNCTION
let myName = (fName) => fName; // return keyword NOT needed bc it happens by default with concise body arrows

let myNameIs = myName("Spongebob");
console.log(myNameIs);