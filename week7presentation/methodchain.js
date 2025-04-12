// regular methods return undefined break chaining
// use proxies to make methods return the object

function chainify(obj) {
    // wrapping an obj in a proxy
    // a proxy modifies and the return value to support chaining
    return new Proxy(obj, {
        // getting the properties (for example obj.group or obj.method)
        get(target, prop, receiver) {
            // get the actual property from the original object
            const value = target[prop];
            // if the property is a function (a method)
            if (typeof value === 'function') {
                // return a new function that wraps the original one
                return (...args) => {
                    // call the original method with the correct context and arguments
                    const result = value.apply(target, args);
                    return result === undefined ? receiver : result;
                };
            }
            return value;
        }
    });
}

const chained = chainify(myCity);
chained.setName("Paris").setLat(48.8).setLong(2.3);