// Task 1 Create a function that returns the length of a string
const x = 'Hello, how are you? ';
function getLength(x) {
    return x.length;
}
console.log(`The length of the string: "${x}" is ${getLength(x)}`);

// Task 2 Create a function that concatenates two strings

const y = 'I was hopping that you would call';

function concat(x, y) {
    // return x + y;
    return `${x}${y}`;
}
console.log(`The result of the concatenation of the strings: "${x}" and "${y}" is "${concat(x, y)}"`);

