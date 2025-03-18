const x = 10;
const y = 21;
// if else

if (x<y){
    console.log(`${y} is greater than ${x}`);
}

const d = new Date(10, 30,2022, 8, 0, 0);
const hour = d.getHours();
if(hour < 12){
    console.log('Good Morning');
}
else if(hour < 18) {
    console.log('Good Afternoon');
}
else {
    console.log('Good Night');
}

//Nested  if

if(hour < 12){
    console.log('Good Morning');

    if(hour == 6){
        console.log('Wake up!');
    }
}
else if(hour < 18) {
    console.log('Good Afternoon');
}
else {
    console.log('Good Night');

    if(hour >= 20){
        console.log('ZZzzz');
    }
}
if(hour >= 9 && hour< 17){
    console.log('It is work time');
}

//Switches
const month = d.getMonth();

switch (month){
    case 1:
        console.log('it is January');
        break;
    case 2:
        console.log('it is February');
        break;
    case 3:
        console.log('it is March');
        break;
    default:
        console.log('it is not Jan, Feb, March');
        break;
}

switch(true){
    case hour<12:
        console.log('Good Morning');
        break;
    case hour>12:
        console.log('Good Afternoon');
        break;
    default:
        console.log('this is a default case');
}

// Truthy & Falsy Values

// Falsy values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

const z = '';
if(z){
    console.log('This is truthy');
} else {
    console.log('This is Falsy');
}

console.log(Boolean(z));

// Truthy and Falsy caveats

const children = 0;

if(children){
    console.log(`You have ${children} children`);
}
else {
    console.log('Please enter number of children');
}

// Checking for empty arrays;
const posts = []
if (posts.length > 0) {
    console.log('List Posts');

}
else{ 
    console.log('No posts');
}

// Checking of empty objects

const user = {
    name: 'Brad',
};
if (Object.keys(user).length>0){
    console.log('List Users');
}
else {
    console.log('No Users');
}

// Logical Operators
console.log(10 < 20 && 30 < 12 && 40 > 21);
console.log(10>21 || 21 < 22);

// && - Will return first falsy value or the last value

let a;
a = 10 && 20;
a = 20 && 30 && 10;
a =22 && 0 && 10;
a =10 && '' && 20;
console.log(a);

const posts1 = ['post one ', 'post two'];
posts.lenth > 0 && console.log(posts1[0]);


let b;
b = 12 || 20;
b = 11 || 23;
b = 0 || null || '' || undefined;
console.log(b);

// ?? - Returs the right side operand when the left is null or undefined
let c;
c = 10 ?? 20;
c = null ?? 20;
c= undefined ?? 20;
c = 0 ?? 30;
c = '' ?? 30;
console.log(c);

// Logical Assignment 
// ||= assigns the right side value only if the left is a falsy value
let e = false;
    // if (!e){
    //     e = 10;
    // }
e ||= 10;
console.log(e);

// &&= assigns the right side value only if th left is a truthy value.

let f = 10;
// if(f){
//     f = 20;
// }
f &&= 20;
console.log(f);

// ??= assigns the right side value only if the left is a null or undefined
let g = null;
// if ( g === null || g ===undefined){
//     g = 20;
// }

g ??= 20;
console.log(g);

// Ternary Operator 
const age = 19;

// Using an if statement
// if (age >= 18){
//     console.log('You can vote');
// }
// else {console.log('you cannot vote');
// }

// Using a ternary operator
age >= 18 ? console.log('You can vote') : console.log('You can not vote');

// Assigning a conditional value to a variable 
const canVote = age>= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote ': 'You cannot vote';
console.log(canVote);
console.log(canVote2);

// Multiple statements
const auth = true;
// let redirect;
// if(auth){
//     alert('Welcome to the dashboard');
//     redirect ='/dashboard';
// }
// else {
//     alert('access denied');
//     redirect = '/login';

// }

const redirect = auth 
? (alert('welcome to my dashboard'), '/dashboard')
: (alert('access denied'), '/login');

console.log(redirect);
auth ? console.log('Welcome to the dashboard') : null;
auth && console.log('welcome to the dashboard');

