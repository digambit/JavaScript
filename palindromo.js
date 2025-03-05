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