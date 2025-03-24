fetch('./movies.json')
.then((response) =>{
    return response.json();
})
.then((data) =>{
    console.log(data);
});


// Fetching a text file
fetch('./test.txt')
.then((response) => response.text())
.then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users')
.then((response) => response.json())
.then((data) => console.log(data));


///////

fetch('./movies.json')
.then((response) =>response.json())
.then((data) =>{
    console.log(data);
    return fetch('./test.txt');
})
.then((response) => response.text())
.then((data) => {
    console.log(data);
return fetch('https://api.github.com/users/bradtraversy');
})
.then((response) => response.json())
.then((data) =>{
    (document.querySelector('h1').textContent = data.login);
})
.catch((error) => console.error(error));

// fetch api error handling

fetch('http://httpstat.us/404')
.then((response) =>{
    if(response.status === 404) {
        throw new Error('Not found');
    } else if(response.status === 500){
        throw new Error ('Request Failed');
    } else if(response.status !== 200){
        throw new Error ('Request failed');
    }
    return response;
})
.then(() => {
    console.log('success');
})
.catch((error) =>{
    console.log(error);
});


const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({name: 'John', age: 20})
    }, 1000);
});
// promise.then ((data) => console.log(data));

async function getPromise(){
    const response = await promise;
    console.log(response);

}

// async await
async function getUsers(){
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
}

getUsers();

const getPost = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);

}
getPost();

// try catch

try{
    console.log(x);

}catch(error){
    console.log(`Error: ${error}`);
}


function double(number){
    if(isNaN(number)){
        throw new Error('${number} is not a number');
    }
    return number *2;
}
try{
const y = double('hello');
console.log(y);
}catch(error){
    console.log(error);
}

const getUsers = async () =>{
    try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users1');
        const response = await fetch('http://httpstat.us/404');
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        console.log(data);


    } catch(error){
        document.querySelector('h1').innerHTML = 'error caught by try catch';
        console.log('error', error.message);
    }
}

// getUsers();


const getPosts = async () =>{
    
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const response = await fetch('http://httpstat.us/500');
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        console.log(data);
};
getPosts().catch((error) => console.log('error', error.message));


// Async/Await Multiple Promises

function getData(endpoint) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', endpoint);

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject('Error: Something went wrong');
                }
            }
        };

        setTimeout(() => {
            xhr.send();
        }, Math.floor(Math.random() * 3000) + 1000);
    });
}


async function getAllData(){
    const movies = await getData('./movies.json');
    const actors = await getData('./actors.json');
    const directors = await getData('./directors.json');
    console.log(movies, actors, directors);
}

getAllData();

async function getAllDataWithFetch(){
    const moviesRes = await fetch('./movies.json');
    const movies = await moviesRes.json();
    
    const actorsRes = await fetch('./actors.json');
    const actors = await actorsRes.json();
    
    const directorsRes = await fetch('./directors.json');
    const directors = await directorsRes.json();
    
    console.log(movies, actors, directors);
    
}

getAllDataWithFetch();


async function getAllDataPromiseAll(){
    const [moviesRes, actorsRes, directorsRes] = await Promise.all([
        fetch('./movies.json'),
        fetch('./actors.json'),
        fetch('./directors.json'),

    ]);

    const movies = await moviesRes.json();
    const actors = await actorsRes.json();
    const directors = await directorsRes.json();

    console.log(movies, actors, directors);

}


getAllDataPromiseAll();