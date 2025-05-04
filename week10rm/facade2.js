import { getUrl } from "./facade";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const params = { userId: 1 };

getUrl(apiUrl, params, (err, response) => {
    if (err) {
        console.log(err);
    } else {
        const data = JSON.parse(response);
        console.log("Fetched posts:", data);
    }
});