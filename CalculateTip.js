/* Problem Statement:

In this challenge, you'll have to calculate the tip that restaurant customers should leave based on their consumption.
The calculateTip function will receive two parameters: billAmount, which represents the total cost of what was consumed, and tipPercentage, which represents the percentage of tip to leave. Both values will be of type Number and will always be positive, including 0. The function should return the tip value as a number.
You will have inputs and outputs like the following 👇
Example 1:
Input: calculateTip(100, 10);
Output: 10;
Example 2:
Input: calculateTip(1524.33, 25);
Output: 381.0825; */

function calculateTip(billAmount, tipPercentage) {
    return billAmount*(tipPercentage/100)
}

const billAmount = 1524.33
const tipPercentage = 25
const result = calculateTip(billAmount, tipPercentage)
console.log(result)