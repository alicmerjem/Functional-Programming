// functors build upon monads
// monads have the following:
// 1 - map() method 
// 2 - .chain() or .flatMap() to handle nested containers
// 3 - .unwrap()

class Monad extends Functor {
    unwrap() {
        // remove extra wrapping
    }

    chain(fn) {
        return this.map(fn).unwrap(); // map first, flatten after
    }
}