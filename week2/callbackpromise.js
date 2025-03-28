// callbacks allow handling operations that take time, such as reading files or fetching data
// promises provide a cleaner alternative to callbacks

// callback
function fetchData(callback) {
    setTimeout(() => callback("Data received"), 2000);
}
fetchData(console.log); // logs data received after 2 seconds

// promise
fetch("https://api.example.com")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));