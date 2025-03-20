// Challenge 1
// FizzBuzz Challenge
for( let i = 1; i<=100; i++){
    if (i % 3 === 0 && i % 5 ===0){
        console.log(`${i} FizzBuzz`);
    } else if(i % 3 === 0){
        console.log(`${i} Fizz`);
    } else if(i % 5 === 0) {
    console.log(`${i} Buzz`);
    } 
    else {
        console.log(i);
    }
}
// Challenge 2
//Take the `people` array and create an array called `youngPeople` that stores objects with ONLY `name` and `email` properties of all the people that are 25 and under. The `name` property should have their first and last name.
const peoples = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];
  
const youngPeople = peoples
.filter((person)=> person.age<=25 )
.map((person) => ({
    name: `${person.firstName} ${person.lastName}`,
    email: person.email,
}));

console.log(youngPeople);

// Challenge 3
// Add all of the positive numbers in the array.

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
.filter((number) => number>0)
.reduce((acc, cur) => acc + cur, 0);
console.log(positiveSum);

// Challenge 4
//Create a new array called `capitalizedWords` with the words from the `words` array with the first letter of each word capitalized.
const words = ['coder', 'programmer', 'developer'];

const cWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1, word.length);
});
console.log(cWords);
