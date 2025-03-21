// setTimeout & clearTimeout
setTimeout(changeText,2000);
function changeText(){
    document.querySelector('h1').innerHTML = 'Text Changed';
}
// console.log('from global scope');

const timerId = setTimeout(changeText,4000);

document.querySelector('#cancel').addEventListener('click',() => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('timer cancelled');
})

setInterval & clearInterval

// const intervalID = setInterval(myCallback, 1000);

function myCallback(){
    console.log(Date.now());
}
let intervalID;
function startChange(){
    if(!intervalID){
        intervalID = setInterval(changeRandomColor, 1000);
    }
}

function changeColor(){
    if(document.body.style.backgroundColor === 'white'){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';

    }else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    
    }
}

function changeRandomColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange(){
    clearInterval(intervalID);
}

function resetChange(){
    clearInterval(intervalID);
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    intervalID = null;
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);
document.getElementById('reset').addEventListener('click', resetChange);

function toggle(e){
    e.target.classList.toggle('danger');
}
document.querySelector('button').addEventListener('click', toggle);

// const posts = [
//     {title: 'Post One', body: 'this is post one'},
//     {title: 'Post Two', body: 'this is post two'},
// ];
function createPost(post, cb){
setTimeout(() =>{
    posts.push(post);
    cb(); 
}, 2000);
}

function getPosts(){
setTimeout(() =>{
    posts.forEach(function(post){
        const div = document.createElement('div');
        div.innerHTML = `<strong>${post.title}</strong>-${post.body}`;
        document.querySelector('#posts').appendChild(div);
    });
}, 1000);
}


createPost({title: 'Post Three', body:'this is post three'},getPosts);

// HTTP Requests
const xhr = new XMLHttpRequest();
xhr.open('GET', './movies.json');



xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
    const data = JSON.parse(this.responseText);
    data.forEach((movie) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
        document.querySelector('#results').appendChild(li);
    });
}
};
xhr.send();

// problems with Callback 
function getData(endpoint, cb){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            cb(JSON.parse(this.responseText));
        }
    }
    setTimeout(() => {
        xhr.send();

    }, Math.floor(Math.random() * 3000) + 1000);
}
getData('./movies.json', (data) =>{
    console.log(data);
    getData('./actors.json', (data) =>{
        console.log(data);
        getData('./directors.json', (data) =>{
            console.log(data);

        });
    });
});

//Promises
const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log('Async task completed');
        resolve();
    }, 1000);
});

promise.then(() =>{
    console.log('promise 1 cosnsumed');
});

const getUser = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({name: 'john', age:'23' });
        } else{
            reject('Error: Something went wrong');
        }
    }, 1000);
});

getUser
.then((user) => console.log(user))
.catch((error) => console.log(error))
.finally(() => console.log('done'));


console.log("from global scope");

const posts = [
    {title: 'Post One', body: 'this is post one'},
    {title: 'Post Two', body: 'this is post two'},
];
function createPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let error = false;
            if(!error){
                posts.push(post);
                resolve();
            }else{
                reject('Something Went Wrong');
            }
        },2000);
    });
}

function getPosts(){
setTimeout(() =>{
    posts.forEach(function(post){
        const div = document.createElement('div');
        div.innerHTML = `<strong>${post.title}</strong>-${post.body}`;
        document.querySelector('#posts').appendChild(div);
    });
}, 1000);
}

function showError(error){
    const h3 = document.createElement('h3');
    h3.innerHTML = `<strong> ${error}</strong>`;
    document.getElementById('posts').appendChild(h3);

}


createPost({title: 'Post Three', body:'this is post three'})
    .then(getPosts)
    .catch(showError);

    //Promise Chaining
    const promiseChaining = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({name: 'john', age:'23' });
        } else{
            reject('Error: Something went wrong');
        }
    }, 1000);
});
promise.then((user) => {
    console.log(user);
    return user.name;
})
.then((name) => {
    console.log(name);
    return name.length;
})
.then((nameLength) =>{
    console.log(nameLength);
})
.catch((error) => {
    console.log(error);
    return 123;
})
.then((x) => console.log('This will run no matter what',x));


// Promises vs Callback Hell
function getData(endpoint){
    return new Promise((resolve, reject) =>{

    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function(){
        if(this.readyState === 4){
            if( this.status === 200){
                resolve(JSON.parse(this.responseText));
            } else{
                reject('Something went wrong');
            }
        }
    };
    setTimeout(() => {
        xhr.send();

    }, Math.floor(Math.random() * 3000) + 1000);

    });
    
}

getData('./movies.json')
.then((movies) =>{
    console.log(movies);
    return getData('./actors.json');
})
.then((actors) =>{
    console.log(actors);
    return getData('./directors.json');
})
.then((directors) =>{
    console.log(directors);
})
.catch((error)  =>{
    console.log(error);
});


// Promise.all()
function getData(endpoint){
    return new Promise((resolve, reject) =>{

    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function(){
        if(this.readyState === 4){
            if( this.status === 200){
                resolve(JSON.parse(this.responseText));
            } else{
                reject('Something went wrong');
            }
        }
    };
    setTimeout(() => {
        xhr.send();

    }, Math.floor(Math.random() * 3000) + 1000);

    });
}
const moviesPromise = getData('./movies.json');
const actorsPromise = getData('./actors.json');
const directorsPromise = getData('./directors.json');

const dummyPromise = new Promise((resolve, reject) =>{
    resolve('dummy promise 1');
});

const dummyPromise2 = new Promise((resolve, reject) =>{
    resolve(' dummy promise 2');
});
const dummyPromise3 = new Promise((resolve, reject) => {
    resolve('dummy promise 3');
});
Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise, dummyPromise2, dummyPromise3])
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));
