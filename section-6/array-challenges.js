


// Data setup for Person-related functions
let persons = [
    { id: 1, firstName: "John", lastName: "Doe", gender: "Male", age: 25 },
    { id: 2, firstName: "Jane", lastName: "Smith", gender: "Female", age: 30 },
    { id: 3, firstName: "John", lastName: "Brown", gender: "Male", age: 25 },
];


// Program to Filter an Array of Person Objects by ID

function getPersonById(persons, id) {
    return persons.filter(person => person.id === id);
}

const filteredPersons = getPersonById(persons, 2);
console.log(filteredPersons);
// Program to Filter an Array of Person Objects where firstName is "John"

function filterByFirstName(persons, firstName) {
    return persons.filter(person => person.firstName === firstName);
}
const filteredPersons1 = filterByFirstName(persons,'John');
console.log(filteredPersons1); 

// Program to Filter an Array of Person Objects where lastName is "Doe"

function filterByLastName(persons,lastName) {
    return persons.filter(person => person.lastName === lastName);
}
const filteredPerson2 = filterByLastName(persons, 'Brown');
console.log(filteredPerson2)

// Program to Filter an Array of Person Objects where gender is "Male"

function filterByGender(persons, gender) {
    return persons.filter(person => person.gender === gender);
}
const filteredPerson3 = filterByGender(persons, 'Male');
console.log(filteredPerson3);

// Program to Filter an Array of Person Objects where age is 25

function filterByAge(persons, age) {
    return persons.filter(person => person.age === age);
}
const filteredPerson4 = filterByAge(persons, 25);
console.log(filteredPerson4);

// Program to List Out All Keys of a Person Object

function listKeys(person) {
    return Object.keys(person);
}

const keys = listKeys(persons[0]);
console.log(keys); 



// Data setup for matrix-related functions
const matrices1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrices2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];



// Program to Add Two Matrices Using Multi-Dimensional Arrays

function addMatrices(A, B) {
    let result = [];
    for (let i = 0; i < A.length; i++){
        let row = [];
        for(let j = 0; j< A[i].length; j++){
            row.push(A[i][j] + B[i][j]);
        }
        result.push(row);
    }
    return result;
}
const added = addMatrices(matrices1, matrices2);
console.log(added);


// Program to Multiply Two Matrices Using Multi-Dimensional Arrays

function multiplyMatrices(A, B) {
    let result = [];
    for (let i = 0; i < A.length; i++){
        result[i] = [];
        for(let j = 0; j< B[0].length; j++){
            let sum = 0;
            for(let k = 0; k < B.length; k++){
                sum += A[i][k] * B[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}
const multiplied = multiplyMatrices(matrices1, matrices2);
console.log(multiplied);

// Program to Find Transpose of a Matrix

function transposeMatrix(A) {
    let result = [];
    for(let i = 0; i<A[0].length; i++){
        result[i] = [];
        for(let j = 0; j< A.length; j++){
            result[i][j] = A[j][i];
        }
    }
    return result;
}
const result2 = transposeMatrix(matrices1);
console.log(result2);


// Data for string-based functions
let sampleString = "Hello World! 123 ";

// Program to Find the Frequency of Characters in a String

function charFrequency(str) {
    let freq = {};
    for(let char of str){
        if(freq[char]){
            freq[char]++;
        } else{
            freq[char] = 1;
        }
    }
    return freq;
}
console.log(charFrequency(sampleString));

// Program to Count the Number of Vowels, Consonants in a String
function countVowelsAndConsonants(str) {
    let vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;

    for(let char of sampleString){
        if(/[a-zA-Z]/.test(char)){
            if(vowels.includes(char)){
            vowelCount++;
        } else{
            consonantCount++;
        }
    }
}
return { vowels:vowelCount, consonants: consonantCount};

}
console.log(countVowelsAndConsonants(sampleString));


// Program to Remove All Characters in a String Except Alphabet

function removeNonAlphabets(str) {
    return str.replace(/[^a-zA-Z]/g, '');
}
console.log(removeNonAlphabets(sampleString));

// Program to Find the Length of a String

function getStringLength(str) {
    return str.length;
}
console.log(getStringLength(sampleString));

// Program to Concatenate Two Strings
let sampleString2 = "Hello, how are you ?";

function concatenateStrings(str1, str2) {
    return str1 + str2;
}
console.log(concatenateStrings(sampleString, sampleString2))

// Program to Sort String Elements in Lexicographical Order

function sortString(str) {
    return str.split('').sort().join('');
}
console.log(sortString(sampleString));

// Data for array-based functions

let numbers = [5, 3, 8, 1, 10];


// Program to Calculate Average Using Arrays
function calculateAverage(arr){
    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}
console.log(calculateAverage(numbers));

// Program to Find Largest & Smallest Element of an Array

function findMinMax(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return {min, max};
}
console.log(findMinMax(numbers));

// Program to Sort an Array of Person Objects by id, firstName, lastName, gender, age

function sortPersons(persons, key) {
    let personsCopy = [...persons]; 
    return personsCopy.sort((a, b) => {
        if (typeof a[key] === 'string') {
            return a[key].localeCompare(b[key]); 
        } else {
            return a[key] - b[key]; 
        }
    });
}

console.log(sortPersons(persons, 'id'));
console.log(sortPersons(persons, 'firstName'));
console.log(sortPersons(persons, 'lastName'));
console.log(sortPersons(persons, 'gender'));
console.log(sortPersons(persons, 'age'));
