// basically converting from one format to another

// lets say some app expects this object format
const user = {
    fullName : "Merjem Alic",
    years: 20
};

// but the API we are using gives us this
const apiUser = {
    name: "Merjem Alic",
    age: 20
};

// we need to convert apiUser into a format our app expects
// we will do this using the adapter functionality
function adaptUser(apiUser) {
    return {
        fullName: apiUser.name,
        years: apiUser.age
    }
}

// and then we can do this
const userfinal = adaptUser(apiUser);
console.log(userfinal); // {fullName: "Merjem Alic", years: 20}