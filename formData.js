/* Problem Statement:

In this challenge, you must validate a user registration form.

Your task is to implement the logic for the validateForm function, which will receive as parameters an object with the form data and a list of already registered users.

The function must check that all the required fields in the form (name, lastname, email, and password) are filled in. If any required field is missing, it should throw an error specifying the missing fields.

To throw the error, use the following syntax:

throw new Error("Faltan los siguientes campos: name, email, etc...");

Additionally, the function must check if the entered email already exists in the list of registered users. If the email is already in use, it should throw an error specifying the duplicated email.

If everything is correct, the function should add the user to the list of registered users with all the data except the password, and return a message indicating that the registration was successful, along with the user's name and last name.

Example 1:

Input:

const formData = {
  name: "Juan",
  lastname: "Perez",
  email: "juan@example.com",
  password: "123456"
}

const registeredUsers = [
  { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
  { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
]

validateForm(formData, registeredUsers)

Output:

"Tu registro fue exitoso Juan Perez"

Example 2:

Input:

const formData = {
  name: "Juan",
  password: "123456",
};

const registeredUsers = [
  { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
  { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
]

validateForm(formData, registeredUsers)

Output:

"Faltan los siguientes campos requeridos: lastname, email"

*/ 

function validateForm(formData, registeredUsers) {
    const requiredFields = ["name", "lastname", "email", "password"];
    const missingFields = [];

    for (const field of requiredFields) {
    if (!formData[field]) {
        missingFields.push(field);
    }
    }

    if (missingFields.length > 0) {
    throw new Error("Faltan los siguientes campos requeridos: " + missingFields.join(", "));
    }

    const emailExists = registeredUsers.some(user => user.email === formData.email);

    if (emailExists) {
    throw new Error(`El email ${formData.email} ya está en uso`);
    }

    const { name, lastname, email } = formData;
    registeredUsers.push({ name, lastname, email });
    return `Tu registro fue exitoso ${name} ${lastname}`;
}

const formData = {
    name: "Laura",
    lastname: "Ramirez",
    email: "laura@example.com",
    password: "abcdef"
};

const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
];

try {
    const message = validateForm(formData, registeredUsers);
    console.log(message);
    console.log(registeredUsers); 
} catch (error) {
    console.log(error.message);
}
