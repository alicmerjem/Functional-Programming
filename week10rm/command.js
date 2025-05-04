// encapsulating a request/action as an object/function
// this is done so we can execute it later, pass it around, or undo it


// example - we are building a simple robot
// step 1 - define command functions

const moveForward = () => console.log("The robot moved forward");
const turnLeft = () => console.log("Robot turns left");
const turnRight = () => console.log("Robot turns right");

// step 2 - create an invoker that stores and runs commands
function runCommands(commands) {
    commands.forEach(command => command());
}

// step 3 - use it
const commands = [moveForward, turnLeft, moveForward, turnRight];

runCommands(commands);