// template for sending emails

function sendEmail(to, contentFn) {
    const header = "Dear user,";
    const footer = "Best regards, The Team";

    const body = contentFn();
    return `${header}\n\n${body}\n\n${footer}`;
}

const welcomeEmail = () => "Welcome to our App!";
const goodbyeEmail = () => "We are sad to see you go :(";

console.log(sendEmail("user@example.com", welcomeEmail));
console.log(sendEmail("user@example.com", goodbyeEmail));