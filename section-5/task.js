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
const num1 = 20;
const num2 = 6;

function getQuotient(num1, num2){
    const quotient = Math.floor( num1 / num2);
return quotient;
}
console.log(`the quotient of ${num1} and ${num2} is`,getQuotient(num1,num2) );

function getRemainder(num1, num2){
    const remainder = num1 % num2;
    return remainder;
}
console.log(`the remainder of ${num1} and ${num2} is `, getRemainder(num1,num2));

// Program to Swap Two Numbers
function getSwap(num1, num2){
    // const temp =num2;
    // num2 =num1;
    // num1 =temp;
    [num1, num2] = [num2, num1];
    return {num1, num2};

}
const result = getSwap(20,10);
console.log(`After swapping: num1 = ${result.num1}, num2 = ${result.num2}`);

// Program to Check Whether a Number is Even or Odd
function evenOdd(num1){
    if(num1 % 2 === 0){
        return`${num1} is even`;
    }
    else {
        return `${num1} is odd`;
    }

}
console.log(evenOdd(10));
console.log(evenOdd(7));


// Program to Check Whether a Character is Vowel or Consonant

function checkVowelOrConsonant(char){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    if (vowels.includes(char.toLowerCase())){
        return `${char} is vowel`;
    }    

else if(/[a-zA-Z]/.test(char)){
    return `${char} is consonant`;

}
else{
    return `${char} is not a valid alphabet letter`;
}
}

console.log(checkVowelOrConsonant('A')); 
console.log(checkVowelOrConsonant('z')); 
console.log(checkVowelOrConsonant('1')); 

// Program to Find the Largest Number Among Three Numbers

function findLargest(num1, num2, num3){
    if (num1 >= num2 && num1 >= num3){
        largest = num1;
    }
    else if(num2 >= num3 && num2 >= num1){
        largest = num2;
    }
    else {
       largest = num3;
    }
    return `The largest number among (${num1}, ${num2}, ${num3}) is ${largest}`;
}
console.log(findLargest(10,2,3));
console.log(findLargest(13,22,23));

// Program to Display Characters from A to Z Using Loop
function displayAtoZ(){
    const letters = [];

    for (let i = 65; i<=90; i++){
        console.log(String.fromCharCode(i));

    }
}

displayAtoZ();
