console.log(100);
const x=100;
console.log(x);
console.error("This is an error message");  
console.warn("This is a warning message");  
console.table({name:"john",email:"john@example.com"});
console.group("Group 1");
console.log("Hello");
console.log("World");
console.groupEnd();

// var, let, const
let firstName="john";
let secondName="doe";
console.log(firstName,secondName);
let age=30;
console.log(age);
const arr=[1,2,3,4,5];
arr.push(5);

const temp= 100.2;
const hasKids=true;
const aptNumber=null;
const output=aptNumber;
let test;
const id=Symbol('id');
const n=19231309823018301n;
const number = [1,2,3,4,5,6,7];
const person={
    firstName:"john",
    lastName:"doe",
    age:30,
    hobbies:['music','movies','sports'],
    address:{
        street:"50 main st",
        city:"boston",
        state:"MA"
    }
}
const output1=person;


console.log(temp,typeof temp);
console.log(firstName,typeof firstName);
console.log(hasKids,typeof hasKids);
console.log(aptNumber,typeof aptNumber);
console.log(test,typeof test);
console.log(output1,typeof output1);
console.log(n,typeof n);

//primitive data types
const name1="john";
const age1= 30; 
const person1 = {
name1:"brad",
age1:36
}
let newName=name1;
newName="sara";

let newPerson=person1;
newPerson.name1="bradley";

console.log(name1,newName);
console.log(person1,newPerson);

//type conversion
let amount='100';
//Convert string to number
amount = parseInt(amount);
amount=+amount;
amount = Number(amount);
//NaN-Not a number
amount4=parseInt(name1);
console.log(amount4,typeof amount4);

console.log(amount, typeof amount);
//Convert number to string
let amount1=100;
amount1=amount1.toString.toString();
amount1=String(amount1);

console.log(amount1,typeof amount1);

let amount2=198.123;
amount2=parseFloat(amount2);
console.log(amount2,typeof amount2);    

//Conver number to boolean
amount3=0;

amount3=Boolean(amount3);

console.log(amount3,typeof amount3);


//Arithmetic operators
let a;
a=5+5;
a=5-5;
a=5/5;
a=5*5;  
a=7%5;

//Concatenation
y="hello"+" "+"world";
console.log(y);
//Exponent
a=5**2;

//Increment
a++;

//Decrement
a--;

//Assignment
a=20;
a+=10;

//Comparison operators
a = 2 == 2;
a = 2 === '2';  
a=2 !=2;
a=2 !== '2';
a=2>2;
a=2<2;
a=2>=2;

console.log(a);

//Type coercion

let z;
z = 5 +'5';
z = 5 + Number('5');
z = 5 * '5';
z = 5 * null;
z = Number(null);
z = Number(true);
z = Number(false); 
z = 5 + undefined;

console.log(z,typeof z);


//Working with strings

let b;
const name2="john";
const age2=30;
b= 'My name is '+name2+' and I am '+age2+' years old';

//Template literals
b = 'hello my name is $(name2) and I am $(age2) years old';

//String properties and methods
const c = new String('Hello World');
b = typeof c;
b = c.length;
b = c[3];

b = c.__proto__;
b = c.toUpperCase();
b = c.toLowerCase();
b = c.charAt(2);
b = c.indexOf('o');
b = c.substring(0,5);
b = c.split(' ');
b = c.trim(); 
b = c.replace('World','There');
b = c.valueOf();
b = c.split('');

console.log(b);

//Numbers and Math object
let d;
const num = new Number(5.3213131);
d = num.toString();
d = num.length;
d = num.toFixed(2);
d = num.toPrecision(2);
d = num.toExponential(2);
d = num.toLocaleString();


console.log(d);

//Math object
let e;
e = Math.PI;
e = Math.sqrt(64);
e = Math.abs(-3);
e = Math.round(2.4);
e = Math.ceil(2.4);
e = Math.floor(2.4);
e = Math.pow(2,3);
e = Math.min(2,33,4,1,55,6,3);
e = Math.max(2,33,4,1,55,6,3);
e = Math.random();
e = Math.floor(Math.random()*10+1);


console.log(e);

//Date and time
let f;
f = new Date();
f = f.toString();
f = new Date('03/12/2025 18:43:00');
f = Date.now();
console.log(f);

f = new Date('03/12/2025 18:43:00');
// f = f.getTime();
// f = f.valueof();

f = new Date(1741785279424);
console.log(f);

//Date methods and DateTimeFormat API
let g;
let h = new Date();

g = h.toString();

g = h.getTime();
g = h.valueOf();
g = h.getFullYear();
g = h.getMonth() + 1;
g = h.getDate();
g = h.getDay();
g = h.getHours();
g = h.getMinutes();
g = h.getSeconds();

g = `${h.getFullYear()}-${h.getMonth() + 1}-${h.getDate()}`;

g = Intl.DateTimeFormat('en-US').format(h);
g = Intl.DateTimeFormat('default',{month:'long'}).format(h);
g = Intl.DateTimeFormat('default',{month:'short'}).format(h);
g = h.toLocaleString('default', {
    weekday:'long',
    year:'numeric',
    month:'long',
    dayhour:'numeric',
    minutesecond:'numeric',
    timeZone:'America/Los_Angeles',
});

console.log(g);  