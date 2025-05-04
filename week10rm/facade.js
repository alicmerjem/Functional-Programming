// simple ajax
export const getUrl = (url, params, cb) => {
    const xhr = newXMLHttpRequest();

    // convert params object into query string
    const query = new URLSearchParams(params).toString();
    const fullUrl = `${url}?${query}`;

    xhr.open("GET", fullUrl, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            cb(null, xhr.responseText); // success
        } else {
            cb(`Error: ${xhr.status}, null`); // error handling
        }
    };

    xhr.send();
};