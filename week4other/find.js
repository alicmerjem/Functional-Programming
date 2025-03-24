// returns the first matching element
// finding a country

const markers = [
    {name: "br", lon: 15.8, lat: -47.9},
    {name: "ar", lon: -34.6, lat: -58.4}
];

const brazilData = markers.find(x => x.name === "br");
console.log(brazilData);