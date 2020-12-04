let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheesecake", "Hot dog"];

// regular for Loop
for (let i = 0; i < food.length; i++) {
    console.log(food[i])
}

// forEach() method
food.forEach(function(foodItem) {
    console.log(foodItem)
})

// for Each() method- fat arrow function to condense
food.forEach(foodItem => console.log(foodItem));

// functions do not need to be invoked because method performs this [part]

//-----------------------------------------------

let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheesecake", "Hot dog"];

for(let i = 0; i < food.length; i++) {
    listMyFood(food[i]);
} // loop invokes the function. Does the same as for Each method

function listMyFood(foodItem) {
    console.log(foodItem)
}

// Look at MDN docs for the forEach method()
// CHALLENGE: in the forEach() method, include the optional index parameter, and print that index to the console

let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheesecake", "Hot dog"];

//concise body arrow function
food.forEach((foodItem, index) => console.log(foodItem, index));

//block body arrow function
food.forEach((foodItem, index) => {
    console.log(foodItem, index);
})


// function declaration
food.forEach(function(foodItem, index) {
    console.log(foodItem, index);
})

/*
CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie to the end of the array
    - And replace one of your existing movies with another one
*/

let movies = ['Phantom Menance', 'Attack of the Clones', 'Revenge of the Sith', 'Solo', 'Rogue One', 'A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];

movies.forEach(movieItem => console.log (movieItem));

movies.push("Force Awakens");
movies.splice(3, 1, "The Rise of Skywalker")

console.log(movies);

// movies.splice(8, 0, "Titanic")
// console.log(movies);

// movies.splice(0, 1, "Deadpool")
// console.log(movies);
