/* Problem Statement:

In this challenge, you must draw a right-aligned triangle using loops.
You will receive two parameters: size and character, which define the size and the character with which the triangle should be built, respectively. Additionally, the triangle must be right-aligned, which means that the rightmost column of the triangle must be at the right edge of the console.

You will have inputs and outputs like the following 👇

Example 1:

Input: printTriangle(5, "*")
Output:
    *
   **
  ***
 ****
*****

Example 2:

Input: printTriangle(6, "$")
Output:
     $
    $$
   $$$
  $$$$
 $$$$$
$$$$$$ */

function printTriangle(size, character) {
    for (let i = 1; i <= size; i++) {
        let line = ` `
        for (let j = 0; j < size - i; j++) {
            line = line + ` `
        }
        for (let k = 0; k < i; k++) {
            line = line + character
        }
        console.log(line)
    }
}

const size = 5
const character = `*`
printTriangle(size, character)