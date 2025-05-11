// write treeIsEmpty(tree) and treeRoot(tree) to:
// 1 - return true / false based on tree contents
// 2 - return the root value or null

// functional binary tree definition
const emptyTree = () => (nonEmpty, empty) => empty();

const newTree = (value, left, right) => 
(nonEmpty, empty) => nonEmpty(value, left, right);

// treeIsEmpty :: Tree -> Boolean
const treeIsEmpty = (tree) => 
    tree (
        () => false, // non empty case
        () => true  // empty case
    );

// treeRoot :: Tree -> a \ null
const treeRoot = (tree) =>
    tree (
        (value, _left, _right) => value,
        () => null
    );

// create an example tree 
const myTree = newTree(
    10,
    emptyTree(),
    emptyTree()
);

const empty = emptyTree;

console.log("Is tree empty?", treeIsEmpty(myTree));
console.log("Root of tree: ", tree(myTree));

console.log("Is tree empty", treeIsEmpty(myTree));
console.log("Root of empty tree: ", treeRoot(empty));