/* Problem Statement:

In this challenge, you must develop a custom implementation of the map method using higher-order functions.

You will receive an array and a function (func) as parameters. The array will contain a set of elements (numbers, objects, strings, etc.), and the function will be used to apply an action to each element of the array. Your goal is to return a new array with the results of the function, just like the map method would.

Example 1:

Input:
myMap([1, 2, 3, 4], (num) => num * 2)

Output:
[2, 4, 6, 8]

Example 2:

Input:
myMap([
  { name: "michi", age: 2 },
  { name: "firulais", age: 6 }
], (pet) => pet.name)

Output:
["michi", "firulais"]
*/ 

function myMap(array, func) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
    result.push(func(array[i]));
    }
    return result;
}

const original = [1, 2, 3, 4];
console.log("Original array:", original);
console.log("Mapped array:", myMap(original, (num) => num * 2));