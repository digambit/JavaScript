/* Problem Statement:

In this challenge, you are given a base code that demonstrates a bad programming practice known as callback hell, and your task is to avoid it by using async/await.

To solve it, you’ll find a function called runCode that takes no input parameters. This function contains the base code you need to refactor. Additionally, the tasks.js file contains the functions you need to execute.

Inside the runCode function, you should write your solution. You also need to wrap the functions from tasks.js into Promises.

Example:

Input: await runCode();

Output: ["Task 1", "Task 2", "Task 3"]

*/ 

function doTask1(callback) {
    setTimeout(() => {
        callback("Task 1");
    }, 1000);
}

function doTask2(callback) {
    setTimeout(() => {
        callback("Task 2");
    }, 1000);
}

function doTask3(callback) {
    setTimeout(() => {
        callback("Task 3");
    }, 1000);
}

function doTask1Promise() {
    return new Promise(resolve => {
        doTask1(resolve);
    });
}
function doTask2Promise() {
    return new Promise(resolve => {
        doTask2(resolve);
    });
}
function doTask3Promise() {
    return new Promise(resolve => {
        doTask3(resolve);
    });
}

async function runCode() {
    const strings = [];

    const rta1 = await doTask1Promise();
    strings.push(rta1);

    const rta2 = await doTask2Promise();
    strings.push(rta2);

    const rta3 = await doTask3Promise();
    strings.push(rta3);

    return strings;
}

runCode().then(console.log);

