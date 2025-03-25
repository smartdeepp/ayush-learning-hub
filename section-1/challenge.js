//Challenge 1
//Capitalize challenge, i have to capitalize the first letter of the string and store it in myNewString variable

const myString = 'developer';

//Solution
let myNewString;
//Solution 1
myNewString = myString.charAt(0).toUpperCase()+myString.substring(1);

//Solution 2
myNewString= myString[0].toUpperCase() + myString.substring(1);


console.log(myNewString);

//Challenge 2
//Create a variable called `x` that is a random number between 1 and 100 along with a variable called `y` that is a random number between 1 and 50.
//Create a variable for the sum, difference, product, quotient and remainder of `x` and `y`. Log the output in a string that shows the two numbers of `x` and `y` along with the operator and result.

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);
//Get the sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

//Get the difference
const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;
console.log(differenceOutput);

//Get the product
const product = x * y;  
const productOutput = `${x} * ${y} = ${product}`;
console.log(productOutput);

//Get the quotient
const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;
console.log(quotientOutput);

//Get the remainder
const remainder = x % y;
const remainderOutput = `${x} % ${y} = ${remainder}`;
console.log(remainderOutput);




