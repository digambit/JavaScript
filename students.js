/* Problem Statement:

In this challenge, you must calculate the overall average of a class, as well as the individual average of each student.

To do this, you will be provided with an array of objects, each representing a student and containing the following properties:

name: The name of the student
grades: The grades for each subject of the student
Based on this information, you need to return a new object that includes the property classAverage with the overall average of the class and an array students with each student's name and their individual average.

It is important to mention that the averages must be calculated accurately and rounded to two decimal places to ensure the tests pass successfully. You can use the toFixed() method, which works as follows 👇:

const number = 100.32433;
number.toFixed(2); // "100.32"
👀 Keep in mind that this method returns the number as a string, and it is expected to be converted to a numeric type.

Example:

Input:

getStudentAverage([
{
    name: "Pedro",
    grades: [90, 87, 88, 90],
},
{
    name: "Jose",
    grades: [99, 71, 88, 96],
},
{
    name: "Maria",
    grades: [92, 81, 80, 96],
},
]);

Output:

{
classAverage: 88.17,
students: [
    {
    name: "Pedro",
    average: 88.75,
    },
    {
    name: "Jose",
    average: 88.5,
    },
    {
    name: "Maria",
    average: 87.25,
    },
],
} */

function getStudentAverage(gradesArray) {
    const sum = gradesArray.reduce((acumulador, numero) => acumulador + numero, 0);
    return parseFloat((sum / gradesArray.length).toFixed(2));
}

function getClassAverage(students) {
    let studentAverage = [];
    let totalSum = 0;
    let totalGrades = 0;
    for (let i = 0; i < students.length; i++) {
        let studentName = students[i].name;
        let studentGrades = students[i].grades;
        let average = getStudentAverage(studentGrades);
        studentAverage.push({name: studentName, average: average});
        totalSum += studentGrades.reduce((acumulador, numero) => acumulador + numero, 0);
        totalGrades += studentGrades.length;
    }
    const classAverage = parseFloat((totalSum / totalGrades).toFixed(2));
    return {
        classAverage: classAverage,
        students: studentAverage,
    }
}

const students = [
    {
    name: "Pedro",
    grades: [90, 87, 88, 90],
    },
    {
    name: "Jose",
    grades: [99, 71, 88, 96],
    },
    {
    name: "Maria",
    grades: [92, 81, 80, 96]
    }
];

console.log(getClassAverage(students));