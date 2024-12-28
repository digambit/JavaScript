/* Problem Statement:
Given an array of integers that contains numbers from 1 to N (where N is the length of the array), this code attempts to rearrange the elements so that each number appears at its corresponding index (minus 1). In other words, it tries to place each number i at index (i-1).
For example:

The number 1 should be at index 0
The number 2 should be at index 1
The number 3 should be at index 2
And so on... */

function processArray(array) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
        while (array[i] !== i + 1) {
            let p = array[i + 1];
            let f = (i + 1);
            array[p] = array[i];
            array[i] = p;
        }
    }
    return array;
}

const numbers = [1, 3, 2, 5, 4]
const result = processArray(numbers)
console.log(result)