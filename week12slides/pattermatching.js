// use conditional logic to handle values

function handleResult(result) {
    if (result instanceof Right) {
        return `Success: ${result.value}`;
    }

    if (result instanceof Left) {
        return `Error: ${result.value}`;
    }
}