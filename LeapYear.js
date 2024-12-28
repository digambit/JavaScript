/* Problem Statement:

In this challenge, you must create the logic for the isLeapYear function, which determines whether a year is a leap year or not. A year is a leap year if it meets the following conditions:

It's divisible by 4, but not by 100.
If it's divisible by 100, it must also be divisible by 400.

The isLeapYear function receives a single parameter: the year to evaluate. It should return true if the year is a leap year or false otherwise.
Keep in mind that the function must be able to handle non-integer or negative values.
Example 1:
txtCopyInput: 2000;
Output: true;
Example 2:
txtCopyInput: -2024;
Output: false;
Example 3:
txtCopyInput: 1984.25;
Output: false; CopyRetryClaude does not have the ability to run the code it generates yet.Claude can make mistakes. Please double-check responses. */

function isLeapYear(year) {
    if (year < 0) {
    return false;
    } else if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
    } else {
    return false;
    }
}

const year = 2000
const result = isLeapYear(year)
console.log(result)