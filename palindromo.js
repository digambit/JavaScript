/* Problem Statement:

In this challenge, you must create a function that finds the longest palindrome in a list of words.

You will receive a single parameter: an array of words. If there are no palindromes in the list, the function should return null. If there is more than one palindrome with the same maximum length, you must return the first palindrome found in the list.

A palindrome is a word that reads the same forward and backward.

Example 1:

Input: findLargestPalindrome(["racecar", "level", "world", "hello"])

Output: "racecar"

Example 2:

Input: findLargestPalindrome(["Platzi", "javascript", "html", "css"])

Output: null */

function findLargestPalindrome(words) {
    let largestPalindrome = null;
    for (let i = 0; i < words.length; i++) {
        let word = words[i]; 
        let reversedWord = word.split("").reverse().join("");
        if (word === reversedWord) {
            if (largestPalindrome === null || word.length > largestPalindrome.length) {
                largestPalindrome = word;
            }
        }
    }
    return largestPalindrome;
}

const words = ["racecar", "level", "world", "hello"]
const result = findLargestPalindrome(words)
console.log(result)