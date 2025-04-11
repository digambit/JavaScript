/* Problem Statement:

In this challenge, you must use Promises to simulate sending an email.

The sendEmail function receives three parameters: email, subject, and body, which are necessary to send an email. You need to implement the logic using Promises to simulate sending the email after 2 seconds.

If any of the required fields are missing, you should throw an error with a message indicating that fields are missing to send the email.

Remember to use the following syntax to reject:

    reject(new Error(message));

Example 1:

Input:

sendEmail(
    "test@mail.com",
    "Nuevo reto",
    "Únete a los 30 días de JS"
)
.then(result => console.log(result))


Output:

// After 2 seconds...

{
    email: "test@mail.com"
    subject: "Nuevo reto",
    body:  "Únete a los 30 días de JS",
}

Example 2:

Input:

sendEmail(
    "test@mail.com",
    "",
    "Únete a los 30 días de JS"
)
.then(result => console.log(result))
.catch(error => console.log(error))

Output:

// After 2 seconds...

"Error: Hacen falta campos para enviar el email"

*/ 

function sendEmail(email, subject, body) {
    return new Promise((resolve, reject) => {
        if (!email || !subject || !body) {
            reject(new Error("Hacen falta campos para enviar el email"));
            return;
        }
        console.log("Enviando correo...")
        setTimeout(() => {
            resolve({
            email,
            subject,
            body
            });
        }, 2000);                 
    });
}

sendEmail("email@example.com", "Hola", "Mundo")
.then(result => console.log("✅ Resultado:", result))
.catch(error => console.log("❌ Error:", error.message));

