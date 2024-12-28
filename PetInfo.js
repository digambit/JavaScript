/* Problem Statement:

In this challenge, you'll receive different types of pets along with their age.
Depending on these 2 factors, you'll need to build a function called getPetExerciseInfo which will return a text string with the necessary information about how much exercise each type of pet needs.
The function will receive the following pets:

dog
cat
bird

If a pet type is passed which is not in the list, it should return "Invalid pet type"
For each pet type, the function will return different information based on age.

Dogs

If age is less than a year, should return "Puppies need short, frequent play sessions"
If age is between 1 and 7 years, should return "Dogs at this age need daily walks and play sessions"
If age is greater than 7 years, should return "Senior dogs need shorter walks"


Cats

If age is less than a year, should return "Kittens need frequent play sessions"
If age is between 1 and 7 years, should return "Cats at this age need to play daily"
If age is greater than 7 years, should return "Senior cats need shorter play sessions"


Birds

If age is less than a year, should return "Young birds need a lot of space to fly"
If age is between 1 and 7 years, should return "Birds need daily play and a place to fly"
If age is greater than 7 years, should return "Senior birds need more rest, but still need a place to fly"



You'll have inputs and outputs like the following 👇
Example 1:
txtCopyInput: getPetExerciseInfo("dog", 3)
Output: "Dogs at this age need daily walks and play sessions"
Example 2:
txtCopyInput: getPetExerciseInfo("cat", 8)
Output: "Senior cats need shorter play sessions"
Example 3:
txtCopyInput: getPetExerciseInfo("Mammoth", 25)
Output: "Invalid pet type" */

function getPetExerciseInfo(type, age) {
    switch (type) {
    case "dog":
        if (age < 1) return "Puppies need short, frequent play sessions"
        else if (age >= 1 && age <= 7) return "Dogs at this age need daily walks and play sessions"
        else return "Senior dogs need shorter walks"
        break;
    case "cat":
        if (age < 1) return "Kittens need frequent play sessions"
        else if (age >= 1 && age <= 7) return "Cats at this age need to play daily"
        else return "Senior cats need shorter play sessions"
        break;
    case "bird":
        if (age < 1) return "Young birds need a lot of space to fly"
        else if (age >= 1 && age <= 7) return "Birds need daily play and a place to fly"
        else return "Senior birds need more rest, but still need a place to fly"
        break;
    default:
        return "Invalid pet type"
    }
}

const type = "dog"
const age = 5
const result = getPetExerciseInfo(type, age)
console.log(result)