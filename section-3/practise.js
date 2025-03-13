//Array Literal
const numbers=[12, 33, 42, 52, 23]

const fruits = new Array('apple', 'grape', 'orange');
x = numbers[0];
x = numbers[0] + numbers[3];
x = `My favourite fruit is an ${fruits[2]}`
x = numbers.length;

fruits[2] = 'pear';

fruits[fruits.length] ='apple';
x = fruits;

console.log(x);

//array methods
let y;
x = numbers;
numbers.push(100);
numbers.pop();
numbers.unshift(99);
numbers.shift();
numbers.reverse();

y = numbers.includes(20);
y = numbers.indexOf(42);
y = numbers.slice(1,3);
// y = numbers.splice(1,3);

y = numbers.slice(1,4);
y = numbers.splice(1,4).reverse().toString().charAt(3);

console.log(y);
//Array Nesting Concat & Spread

const berries = ['strawberry', 'blueberry', 'rasberry'];

// fruits.push(berries);

// a = fruits[3][3];
const allFruits = [fruits, berries];
a = allFruits[1][0][1];

a = fruits.concat(berries);

//Spread Operator (...) 
a = [...fruits, ...berries];

//Flatten Arrays
const arr1 = [1, 2, [3, 4], 5, [6,7], 9];
b = arr1.flat();

//Static Method on Array Object
b = Array.isArray(fruits);
b = Array.from('12345');

const p = 1;
const q = 2;
const r = fruits;
b = Array.of(p, q, r);
console.log(b);

//Object Literal
let z;
const person = {
    name: 'john Doe',
    age: 30,
    isAdmind: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports'],
};

z = person.name;
z = person['age'];
z = person.address.state;
z = person.hobbies[0];
person.name = 'James Bond';
person['isAdmin'] = false;
delete person.age;
person.hasChildren = true;

person.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
};
person.greet();


z = person;
console.log(z);

//Object Spread Operator & Methods
let c;
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

c = todo;

const person1 = {
    address:{
        coords:{
            lat: 42.9934,
            lng: -82.3232,
        },
    },
};
c = person1.address.coords.lat;

const obj1 = {a: 1, b:2};
const obj2 = {c: 3, d: 4};
const obj3 ={...obj1, ...obj2};
const obj4 = Object.assign({}, obj1, obj2); 

const todos =[
    {id: 1, name: 'Buy Milk'},
    {id: 2, name: 'Pickup kids frin school'},
    {id: 3, name: 'Take out trash'},
];
c = todos[0].name;

c = Object.keys(todo);

c = Object.keys(todo).length;
c = Object.values(todo);
c = Object.entries(todo);
c = todo.hasOwnProperty('age');

console.log(c);

//Destructuring & Naming

const firstName = 'john';
const lastName = 'Doe';
const age =  30;
const person3 = {
    firstName,
    lastName,
    age,
};
console.log(person3.age);

const todo1 = {
    id: 1,
    title: 'take out trash',
    user:{
        name: 'john',
    }
};

const {id: todoId, title, user: {name} } = todo1;
console.log(todoId);

//Destructure Array

const numbers1 = [23, 45, 23, 42];

const [first, second, ...rest] = numbers1;


console.log(first, second, rest);

const post = {
    id: 1,
    title: 'post one',
    body: 'this is the  body',
};

//Convert to JSON string
const str = JSON.stringify(post);
console.log(str.id);

//Parse JSON
const obj = JSON.parse(str);
console.log(obj.id);
const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'this is the body',
    },
    {
        id: 2,
        title: 'Post two',
        body: 'this is the body',

    },
];

const str2 = JSON.stringify(posts);

console.log(str);

