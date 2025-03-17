// Create functions...

// Simple Calculator Using switch...case

function calculator(num1, num2, operator){
    let result;

switch(operator){
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        result = 'Invalid Operator';
}

console.log(`num1 is ${num1} & num2 is ${num2} & the result is: `,result);
return result;
}

calculator(5, 2, '+');
calculator(5, 2, '-');
calculator(5, 2, '*');
calculator(5, 2, '/');
calculator(5, 2, '&');


// Program to Compute Quotient and Remainder


// Program to Swap Two Numbers
// Program to Check Whether a Number is Even or Odd
// Program to Check Whether a Character is Vowel or Consonant
// Program to Find the Largest Number Among Three Numbers
// Program to Display Characters from A to Z Using Loop


