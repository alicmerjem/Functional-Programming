// Extract domain names from emails
const domains = ["alice@gmail.com", "bob@yahoo.com"];

const extractDomains = (emails) => emails.map(domain => domain.split('@')[1]);

console.log(extractDomains(domains));