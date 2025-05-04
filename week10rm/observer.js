// letting one part of your code (observer) watch another part (called a subject)
// it automatically reacts when the subject changes

const createObservable = () => {
    let observers = [];

    return {
        subscribe: fn => observers.push(fn),
        notify: data => observers.forEach(fn => fn(data))
    };
};

const observable = createObservable();

observable.subscribe(data => console.log("Got ", data));
observable.notify("New data, yipee!");

// think of this as you (the observer) subscribe to a channel (the subject) on youtube
// when the channel uploads a video, you get notified
// you dont keep checking it manually, because its automatic