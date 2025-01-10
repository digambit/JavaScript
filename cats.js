/* Problem Statement:

In this challenge, you must find the most famous kitty based on their number of followers.
You will receive an array of objects that include the following properties:

name: name of the kitty
followers: an array of numbers, where each one represents the followers from each social network.
Your task is to return an array with the names of cats that have only the highest number of followers. If there are two or more cats with the same maximum number of followers, you should include them in the result array, maintaining the order in which they appear in the input array.
You will have inputs and outputs like the following 👇
Example 1:

txtCopyInput: findFamousCats([
  {
    name: "Luna",
    followers: [500, 200, 300]
  },
  {
    name: "Michi",
    followers: [100, 300]
  },
])

Output: ["Luna"]
Example 2:
txtCopyInput: findFamousCats([
  {
    name: "Mimi",
    followers: [320, 120, 70]
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200]
  },
  {
    name: "Gizmo",
    followers: [250, 750]
  }
])

Output: ["Milo", "Gizmo"] */

function getTotalFollowers(followersArray) {
    return followersArray.reduce((acumulador, numero) => acumulador + numero, 0);
}

function findFamousCats(cats) {
    let maxFollowers = 0;
    let famousCats = []; 
    
    for (let i = 0; i < cats.length; i++) {
        let catName = cats[i].name;
        let catFollowers = cats[i].followers;
        let totalFollowers = getTotalFollowers(catFollowers);
        
        if (totalFollowers > maxFollowers) {
            maxFollowers = totalFollowers;
            famousCats = []; 
            famousCats.push(cats[i].name);
        } else if (totalFollowers === maxFollowers) {
            famousCats.push(cats[i].name);
        }
    }
    
    return famousCats;
}

const cats = [
    {
        name: "Luna",
        followers: [500, 200, 300]
    },
    {
        name: "Michi",
        followers: [100, 300]
    }
];

console.log(findFamousCats(cats));