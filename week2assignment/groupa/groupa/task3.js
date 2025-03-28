// write a function fetchData that returns a promsise that resolves with "Data received" after 2 seconds

const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
};