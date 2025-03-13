// Challenge 1

// function getCelsius(f){
//     const Celsius = ((f - 32) * 5) / 9;
// return Celsius;
// }

const getCelsius = (f) => ((f - 32) * 5) / 9;
console.log(`The temp is ${getCelsius(80)}`);

// Challenge 2

function minMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return{
        min,
        max,
    };
}
console.log(minMax([1, 2, 3, 5, 6]));

// Challenge 3
((length, width) => {
    const area = length * width;
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
    console.log(output);

}) (20,10);