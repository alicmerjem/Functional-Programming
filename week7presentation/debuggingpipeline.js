// can be done using tap or tee functions
// we inspect data w/o modifying it

const tee = x => (console.log(x), x);
const tap = fn => x => (fn(x), x);

const pipelineDebug = pipeline(
    // gets the directory
    getDir,
    // logs the files 
    tap(files => console.log("Files: ", files)),
    // this filter out the .odt files
    filterOdt,
    // logs the filtered files to the console
    tap(filtered => console.log("Filtered ODTs: ", filtered)),
    count
);

// NOTE:
// tee logs the input (x) to the console and returns it
// tap does the same thing, but it also -
// takes a custom function (this is good for logging, debudding or modifying something outside the pipeline)
