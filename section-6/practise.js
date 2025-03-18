// Loops iterations and Array Methods
// For Loop
for (let i = 0; i<=10; i++){
    if(i===7){
        console.log('7 is my lucky number');
    } else{
        console.log(i);
    }
}

// Nested Loops

for (let i = 0; i<=10; i++){
    console.log('Numbers ' + i);

    for (let j =0; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
// Loop through an array

const names = ['Brad', 'Sarah', 'Sam', 'John', 'Tim'];
for (let i = 0; i<names.length; i++){
    if (names[i] === 'John'){
        console.log(names[i] + ` is the best`);
    } else{
    console.log(names[i]); 
    }
}

// Break & Continue
// Break
for (let i = 0; i<=20; i++){
    if(i ===15){console.log('Breaking...');
    break;
}
console.log(i);
}

// Continue
for (let i = 0; i<=20; i++){
    if(i===13){{
        console.log('skipping 13...');
        continue;
    }}
    console.log(i);
}

// While & Do While Loop
let i = 0;
while(i <= 20){
    console.log(`Number  ${i}`);
    i++;
}

// Loop over arrays
const arr = [10, 20, 30, 40, 50];

while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

while( i <= 5){
    console.log(`Number ${i}`);
    let j = 1;
    while(j <= 5){
        console.log(`${i} * ${j} = ${i * j}`);
    j++;
    }
    i++;
}

do {
    console.log(`Number ${i}`);
    i++;
} while(i<=20);

// Loops through Arrays
const items = ['book', 'table', 'chair', 'kite'];
const users = [
    {name: 'Brad'},
    {name: 'John'},
    {name: 'Steve'},
];

for (const item of items ){
    console.log(item);
}
for (const user of users){
    console.log(user.name);
}

// Loop over strings
const str = 'Hellow World';

for (const letter of str){
    console.log(letter);
}
// Loop over Maps
const map = new Map();
map.set('name:', 'John');
map.set('age:', 30);
for(const [key, value] of map){
    console.log(key, value);
}

// For in Loop
const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'greed',
};
for(const key in colorObj){
    console.log(key, colorObj[key]);
}

const colorArr = ['red', 'green', 'blue', 'yellow'];
for( const key in colorArr){
    console.log(colorArr[key]);
}

// Array.forEach

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];
// console.log(socials.__proto__);
// socials.forEach(function (item){
//     console.log(item);
// });
socials.forEach((item, index, arr) => console.log(` ${index} - ${item}`, arr));

function logSocials(social){
    console.log(social);

}
socials.forEach(logSocials);


const socialObj = [
    {name:' Twitter', url: 'https://twitter.com'},
    {name:' Facebook', url: 'https://facebook.com'},
    {name:' Linkedin', url: 'https://linkedin.com'},
    {name:' Instagram', url: 'https://instagram.com'},

]
socialObj.forEach((item) => console.log(item.url));

// Array.filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evenNumbers = numbers.filter(function (number){
    // // return number %2 ===0;

// });
// Short Version
const evenNumbers = numbers.filter(number => number % 2 === 0);

// Same with forEach
// let evenNumbers = [];
// numbers.forEach((number) =>{
//     if(number %2 === 0){
//         evenNumbers.push(number);
//     }
// });


console.log(evenNumbers);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Get only retail companies
const retailCompanies = companies.filter((company) => company.category === 'Retail');
console.log(retailCompanies);

// Get companies that started in or after 1980 and ended in or before 2005

const earlyCompanies = companies.filter((company) => company.start>=1980 && company.end<=2005);
console.log(earlyCompanies);

// Get companies that lasted 10 years or more
const longCompanies = companies.filter((company) => (company.end - company.start )>=10 );
console.log(longCompanies);

// Array.map()
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleNumbers = numbers1.map((number) => number*2);
console.log(doubleNumbers);

// same with forEach
const doubleNumbere2 = [];
numbers1.forEach((number) => {
    doubleNumbere2.push(number * 2);
});
console.log(doubleNumbere2);

// Create an array of company names
const companyNames = companies.map((company) =>company.name);
console.log(companyNames);

// Create an array with just company and category
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category,
    };

});

console.log(companyInfo);

// Create an array of objects with the name and the length of each company in year
const companyYears = companies.map ((company) =>{
return {
    name: company.name,
    length : company.end - company.start + ' years',

};
});
console.log(companyYears);


// Chain map methods
const squareAndDouble = numbers1
.map((number) => Math.sqrt(number))
.map((sqrt) => sqrt *2);

//same but in detail
const squareAndDouble2 = numbers1
.map( function (number) {
    return Math.sqrt(number);

})
.map(function(sqrt){
    return sqrt *2;

});

console.log(squareAndDouble);
console.log(squareAndDouble2);

// Chaining different methods

const evenDouble = numbers1
.filter((number) => number % 2 === 0)
.map((number) => number *2);
console.log(evenDouble);

// Array.reduce()

const sum = numbers1.reduce( function (accumulator, currentValue){
    return accumulator + currentValue;
}, 0);
const sum2 = numbers1.reduce((acc, curr) => acc + curr, 0); 

console.log(sum);
console.log(sum2);

const cart = [
    {id: 1, name: 'product 1', price: 130},
    {id: 2, name: 'product 2', price: 150},
    {id: 3, name: 'product 3', price: 175},
    
];

const total = cart.reduce(function (acc, product) {
    return acc + product.price;
}, 0);
console.log(total);

// shorter version of the above code
const total1 = cart.reduce((acc, product) => acc+ product.price, 0);
console.log(total1);
