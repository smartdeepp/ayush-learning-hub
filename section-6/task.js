//Program to Calculate the Sum of Natural Numbers

function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return `The sum of natural numbers from 1 to ${n} is ${sum}`;
}

// Program to Find Factorial of a Number

function factorialOfNumber(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return `The factorial of ${n} is ${factorial}`;
}

// Program to Display Fibonacci Sequence

function fibonacciSequence(n) {
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return `The fibonacci sequence is ${fibonacci}`;
}

// Program to Find GCD of Two Numbers

function gcdOfTwoNumbers(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return `The GCD of the numbers is ${a}`;
}

// Program to Find LCM of Two Numbers

function lcmOfTwoNumbers(a, b) {
    let gcd = gcdOfTwoNumbersValue(a, b);
    let lcm = (a * b) / gcd;
    return `The LCM of the numbers is ${lcm}`;
}
function gcdOfTwoNumbersValue(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Program to Count Number of Digits in an Integer

function countDigits(number) {
    let count = 0;
    while (number > 0) {
        count++;
        number = Math.floor(number / 10);
    }
    return `The number of digits is ${count}`;
}
// Program to Reverse a Number

function reverseNumber(num) {
    let reversed = 0;
    let original = Math.abs(num);
    while (original > 0) {
        reversed = reversed * 10 + original % 10;
        original = Math.floor(original / 10);
    }
    return `The reverse of ${num} is ${num < 0 ? -reversed : reversed}`;
}

// Program to Calculate the Power of a Number (base & exponent as input)

function powerOfNumber(base, exponent) {
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    return `The power of ${base}^${exponent} is ${result}`;
}

// Program to Check Whether a Number is Palindrome or Not

function isPalindrome(number) {
    let temp = number;
    let reversed = 0;
    while (temp > 0) {
        reversed = reversed * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }
    return `The number ${number} is ${number === reversed ? 'palindrome' : 'not palindrome'}`;
}

// Program to Check Whether a Number is Prime or Not

function isPrimeNumber(n) {
    if (n <= 1) return `The number ${n} is not prime`;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return `The number ${n} is not prime`;
        }
    }
    return `The number ${n} is prime`;
}

// Program to Display Prime Numbers Between Two Intervals

function primesBetween(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && i > 1) {
            primes.push(i);
        }
    }
    return `Prime numbers between ${start} and ${end} are: ${primes.join(', ')}`;
}

// Program to Check Armstrong Number

function isArmstrongNumber(number) {
    let digits = number.toString().split('');
    let sum = 0;
    for (let digit of digits) {
        sum += Math.pow(Number(digit), digits.length);
    }
    return `The number ${number} is ${number === sum ? 'armstrong' : 'not armstrong'}`;
}

// Program to Display Armstrong Numbers Between Two Intervals

function armstrongBetween(start, end) {
    let armstrongNumbers = [];
    for (let i = start; i <= end; i++) {
        let digits = i.toString().split('');
        let sum = 0;
        for (let digit of digits) {
            sum += Math.pow(Number(digit), digits.length);
        }
        if (i === sum) {
            armstrongNumbers.push(i);
        }
    }
    return `The armstrong numbers between ${start} and ${end} are ${armstrongNumbers}`;
}

// Program to Display Factors of a Number

function factorsOfNumber(number) {
    let factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return `The factors of ${number} are ${factors}`;
}
console.log(sumOfNaturalNumbers(10));
console.log(factorialOfNumber(5));
console.log(fibonacciSequence(10));
console.log(gcdOfTwoNumbers(10, 20));
console.log(lcmOfTwoNumbers(10, 20));
console.log(countDigits(12345));
console.log(reverseNumber(12345));
console.log(powerOfNumber(2, 3));
console.log(isPalindrome(12321));
console.log(isPrimeNumber(17));
console.log(primesBetween(10, 50));
console.log(isArmstrongNumber(153));
console.log(armstrongBetween(100, 500));
console.log(factorsOfNumber(28));
