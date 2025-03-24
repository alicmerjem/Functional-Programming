// transforms an array by applying a function to each element
// extracting data from objects

const markers = [
    {name: "BR", lat: -15.8, lon: -47.9},
    {name: "AR", lat: -34.6, lon: -58.4}
];

const latitudes = markers.map(x => x.lat);
console.log(latitudes);