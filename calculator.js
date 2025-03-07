/* Problem Statement:

In this challenge, you will need to create a calculator using closures.

The calculator should have the following methods:

add: Receives a number, adds it to the total, and returns the result.
subtract: Receives a number, subtracts it from the total, and returns the result.
multiply: Receives a number, multiplies it by the total, and returns the result.
divide: Receives a number, divides the total by it, and returns the result.
clear: Resets the total to 0 and returns the result.
getTotal: Returns the current total.

Example 1:
Input:
const calculator = createCalculator();
calculator.add(10);
Output:
10

Example 2:
Input:
const calculator = createCalculator();
calculator.add(10);
calculator.subtract(-10);
Output:
20

Example 3:
Input:
const calculator = createCalculator();
calculator.add(10);
calculator.subtract(-10);
calculator.clear();
Output:
0 */ 

function createCalculator() {
    let total = 0;
    return {
        add: function (num) {
            total += num;
            return total;
        },
        subtract(num) {
            total -= num;
            return total;
        },
        multiply(num) {
            total *= num;
            return total;
        },
        divide(num) {
            if (num !== 0) {
            total /= num;
            }
            return total;
        },
        clear() {
            total = 0;
            return total;
        },
        getTotal() {
            return total;
        }
    };
}

const calculator = createCalculator();
console.log(calculator.add(100));
console.log(calculator.subtract(50));
console.log(calculator.getTotal());
console.log(calculator.clear());
console.log(calculator.getTotal());
