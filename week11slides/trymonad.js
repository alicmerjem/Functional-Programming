// like a functional try catch
// it tries to run some risky code
// if it succeeds, you get a Right(result)
// if it fails, you get a Left(error)

// example
const safeCall = Try.of(() => riskyOperation(), "Failed");

// here is a simple version of how it works under the hood

class Try {
    static of(fn, fallbackMessage = "Error") {
        try {
            return new Right(fn());
        } catch (err) {
            return new Left(fallbackMessage || err.messae);
        }
    }
}