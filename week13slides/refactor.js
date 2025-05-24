// dependency injection - a way to avoid side effects
// REFACTOR impure functoins to accept dependencies
// this allows for side effects to be isolated and easily replaced during testing
// original (impure) vs Refactored (testable)

async function getData(url) {
    const res = await fetch(url);
    return res.json();
}
// ^ this is impure
// why?
// because fetch() is an external/global browser API
// when testing this we would be making real network requests
// that means that:
// tests can fail randomly (no internet)
// they are slow
// they depend on the outside world

async function getData2(url, fetchFn) {
    const res = await fetchFn(url);
    return res.json();
}
// ^ refactored solution
// why is it good?
// in production: you pass in the real fetch()
// in tests: you pass in a fake function(like fakeFetch)
// the fake version can return dummy data w/o real network access

// example of a fake fetch in a test:
const fakeFetch = async (url) => ({
    json: async() => ({message: "hello test!"})
});

getData("https://example.com", fakeFetch).then(data => {
    console.assert(data.message === "hello test!")
});

// no real request
// no mocking library
// fast and predictable test