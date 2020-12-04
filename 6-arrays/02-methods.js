/*
    ARRAY METHODS

    - array methods are methods or functions that are built into JS, that we can use to make our lives as developers easier
*/

let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheesecake", "Hot Dog"];

// array.push() - allows us to push one or more elements to the end of our original array. Push method will always add the new elements to the END of the array.

food.push("Pizza");
console.log("push:", food);

// array.splice(delete) - the splice method allows us to add or remoce elements from an array 

food.splice(1, 1, "Bananas");
console.log("splice:", food);

food.splice(2, 0, "Sweet Potato Pie"); // 0 here says NO items should be deleted
console.log("splice 2:", food);

// array.pop() - the pop method removes the last item from an array

food.pop();
console.log("pop:", food);

// array.shift() - the shift method removes the first item from an array
food.shift();
console.log("shift:", food);

//array.unshift() - the unshift method adds one or more elements to the beginning of an array
food.unshift("Popcorn", "Steak");
console.log("unshift:", food);