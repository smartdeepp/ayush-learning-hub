//Calculator using Switch

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
