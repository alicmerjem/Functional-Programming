// functors
// containers that allow mapping

// requirements:
// a map method
// containser must return a wrapped value

class Functor extends Container {
    static of(x) {
        return new Functor(x); // wraps value into a new container/functor
    }

    map(fn) {
        return Functor.of(fn(this.x)); // applies the functions and returns a new functor
    }
}