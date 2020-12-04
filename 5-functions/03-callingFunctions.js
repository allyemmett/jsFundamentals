// CALLING FUNCTIONS

function hello() {
    console.log("hi");
}

hello(); // hi

console.log(hello); // [Function: hello], but does not run

console.log(hello()); // hi undefined - function invocations happen immediately once the line of code is read. The function will run before anything else in that line of code.

//CHALLENGE: create a function that, when invoked, prints numbers 1-10

function num() {
    for (let i = 1; i <= 10; i ++) {
        console.log(i);
    }
}
num(); //invocation

//CHALLENGE: given the array, create a function that lists out the values individually

let arr = ["This", "is", "really", "cool"];
function list(){
    for (let index in arr) {
        console.log(arr[index])
    }
}

list();

