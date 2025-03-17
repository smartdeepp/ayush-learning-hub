//Function Basics
function sayHello(){
    console.log('Hello World');
}
sayHello();
function add(num1, num2){
    return num1 + num2;
}
console.log(add(10,20));

function subtract(num1, num2){
    return num1 - num2;
}
const result = subtract(20,12);
console.log(result, subtract(20,5));

//More on Params & Arguments
//Default Params
function registerUser(user = 'Bot'){
    // if(!user){
    //     user = 'Bot';
    // }
    // return user+ ' is registered';
    return `${user} is registered`;
}

console.log(registerUser());

//Rest Params
function sum(...numbers){
    let total = 0;
    for(const num of numbers){
        total += num;
    }
    return total;
    
}
console.log(sum(1, 2, 3, 4, 5, 6));

// Objects as params
function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged in`;

}

const user = {
    id: 1,
    name: 'John',
};

console.log(loginUser(user));
console.log(
    loginUser({
        id:2,
        name:'Sara',
    })
);

//Arrays as param
function getRandom(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(item);
}
getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Global & Function Scope

const x =100;
console.log(x, 'in global');

function run(){
    console.log(window.innerHeight);
    console.log(x, 'in function');

}
run();
if (true){
    console.log(x, 'in block')
}

// function add(){
//     const y =50;
//     console.log(y);
// }
// add();
 
//Block Scope
const y = 100;
if (true){
    const y = 200;
    console.log(x + y);

}
// console.log(x + y);
for (let i = 0; i<=10; i++){
    console.log(i);
}
//console.log(i);
if (true) {
    const a = 500;
    let b = 500;
    var c = 900;
}
console.log(c)

function run1(){
    const d = 100;
    console.log(d);

}
run1();
// console.log(d);

//Nested Scope
function first(){
    const x = 100;

    function second(){
        const y = 200;
        console.log(x + y);
    }
    second();

}
first();

//Function Declaration 
function addDollarSign(value){
    // return '$'+ value;
    return `$${value}`;
}
console.log(addDollarSign(200));

//Function Expression
const addPlusSign = function (value) {
    return '+' +value;

};
console.log(addPlusSign(200)); 

//Arrow Functions

// function add(a, b) {
//     return a + b;
// }
const add1 = (a, b) => {
    return a + b;
};
const sub = (a, b) => a - b;
const double = a => a*2;

const createObj = () =>( {
    name: 'Brad',

});

const numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(function(n){
    console.log(n);
});

numbers.forEach((n) => console.log(n));
console.log(add1(1,2));
console.log(sub(29,23));
console.log(double(10));
console.log(createObj());

//IIFE (Immediately Invoked Function Expressions)

(function (){
    const user1 = 'John';
    console.log(user1);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();

(function (name){
    console.log('Hello '+ name);
})('Shawn');

//Execution Context
const e = 100;
const f = 50;
function getSum(n1, n2){
    const sum = n1 + n2;
    return sum;
}
const sum1 = getSum(x, y);
const sum2 = getSum(10, 4);
console.log(sum1, sum2);

//Call Stack

