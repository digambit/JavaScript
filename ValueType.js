/* Problem Statement:

In this challenge, you'll find a function called `solution` that receives a parameter called `value`. You must find the data type of the parameter `value` and return it from the `solution` function.
Remember that the parameter `value` will be different for each different way we execute the `solution` function.
For example:
Given the following function calls to `solution`:

```js
solution(1)
solution("Dieguillo")
solution(true)
```

You should get the following results:

```js
"number"
"string"
"boolean"
``` */


function solution(value) {
    return typeof value
}

const value = 1
const result = solution(value)
console.log(result)