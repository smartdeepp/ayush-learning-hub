//Challenge 1:
//Use some of the array method to mutate the arr [1, 2, 3, 4, 5] to [6, 5, 4, 3, 2, 1, 0]

const arr = [1, 2, 3, 4, 5];

x = arr;
x.push(6);
x.unshift(0);
x.reverse();

console.log(x);

//Challenge 2:
//Combine the arr1 and arr2 into a new array called arr3,
//Note: arr1 and arr2 include the number 5. find a way to get rid of extra 5


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr1WithoutLast = arr1.slice(0, 4);

// const arr3 = [...arr1WithoutLast, ...arr2];
const arr3 =arr1WithoutLast.concat(arr2);
 
console.log(arr3);

//Challenge 3 (Object Challenge)

//Step 1
const library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Mockingjay',
        author: 'Suzanne Collins',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
] 
//Steps 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//Step 3
const {title: firstBook } = library[0];

console.log(firstBook);

//Step 4
const libraryJSON = JSON.stringify(library);
