let output;
output = document.all;
output = document.all[3];
output = document.all.length;

output = document.documentElement;

output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;
// document.forms[0].id = 'new-id';
console.log(output);

// document.getElementById()
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

//set attribute
document.getElementById('app-title').title = 'Shopping list';

document.getElementById('app-title').setAttribute('class', 'title');
const title = document.getElementById('app-title');
console.log(title);

// Get/change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong> Shopping List</strong>';

//Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);
const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'skyblue';

const list = document.querySelector('ul');
console.log(list);

const firstItem = list.querySelector('li');
console.log(firstItem);

firstItem.style.color = 'blue';

querrySelectorAll()

const listItems = document.querySelectorAll('.item');
console.log(listItems[0].innerText);
listItems[1].style.color = 'red';
listItems.forEach((item, index) =>{
    item.style.color = 'red';
    if(index === 1){
        item.remove();   
    }
    if (index === 0){
        item.innerText = 'Oranges';
    }
});


const listItems2 = document.getElementsByClassName('item');
console.log(listItems2[2].innerText);
const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) =>{
    console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerText);




const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');
// div.innerText = 'Hello World';
// const text =document.createTextNode("Hello World");
div.appendChild(text);
// document.body.appendChild(div);
document.querySelector('ul').appendChild(div);


console.log(div);

Quick & dirty

function createListItem(item){
    const li = document.createElement('li');
    li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;

          document.querySelector('.items').appendChild(li);

}
createListItem('Eggs');


// Clean &performant

function createNewItem(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');

    li.appendChild(button);

    document.querySelector('.items').appendChild(li);

}
function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;
    
}
function createIcon(classes){
    const icon =document.createElement('i');
    icon.className = classes;
    return icon
}


createNewItem('Chesse');
createNewItem('Sauce');
createNewItem('Sauce');

function insertElement(){
    const filter=document.querySelector('.filter');
    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    filter.insertAdjacentElement('afterend', h1);

}
insertElement();

function insertText(){
    const item = document.querySelector('li:first-child');
    item.insertAdjacentText('afterend', 'insertAdjacentText');

}
insertText();

function insertHtml(){
    const clearBtn = document.querySelector('#clear');
    clearBtn.insertAdjacentHTML('afterend','<h2>insertAdjacentHTML</h2>')
}
insertHtml();

function insertBeforeItem(){
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = 'insertBefore';
    const thirdItem = document.querySelector('li:nth-child(3)');

    ul.insertBefore(li, thirdItem);
}
insertBeforeItem();


function replaceFirstItem(){
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.innerText = 'Replaced First';

    firstItem.replaceWith(li);
}

replaceFirstItem();

function replaceSecondItem(){
    const secondItem = document.querySelector('li:nth-child(2)');
    secondItem.outerHTML = '<li>Replaced Second</li>'
}
replaceSecondItem();

function replaceAllItems(){
    const lis = document.querySelectorAll('li');

    // lis.forEach((item, index) =>{
    //     // item.outerHTML = '<li>Replace All</li>';
    //     if(index === 1){
    //         item.innerHTML = "second Item";    
    //     }
    //     else{
    //         item.innerHTML = 'Replace all';
    //     }
    // });

    lis.forEach((item, index) => (item.innerHTML = index ===1 ? 'Second Item':' Item ')
);}
replaceAllItems();


function replaceChild(){
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');
    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopping List';
    header.replaceChild(h2, h1);
    
}
replaceChild();

//
function removeClearButton(){
    document.querySelector('#clear').remove();

}

removeClearButton();

function removeFirstItem(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');
    ul.removeChild(li);
}
// removeFirstItem();

function removeItem(itemNumber){
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li);
}
// removeItem(1);

function removeItem2(itemNumber){
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll(`li`)[itemNumber-1];
    ul.removeChild(li);
}
// removeItem2(1);
function removeItem3(itemNumber){
    const li = document.querySelectorAll('li');
    li(itemNumber - 1).remove();

}
removeItem(3);

const removeItem4 = (itemNumber) => document.querySelectorAll('li')[itemNumber -1].remove();

removeItem4(1);

// Adding & Removing Styles & Classes
const text = document.querySelector('h1');
const itemList = document.querySelector('#item-list');
const items = itemList.querySelectorAll('li');

function run(){
    // className
    console.log(itemList.className);
    text.className = 'dark';

    // classList
    console.log(itemList.classList);
    itemList.classList.forEach((c) => console.log(c));
    text.classList.add('dark');
    text.classList.remove('title');
    text.classList.toggle('dark');

    // Change style
    itemList.style.lineHeight ='3';

    items.forEach((item, index) => {
        item.style.color = 'red';
        if(index !==2){
            item.style.color = 'blue';
    
        }
    })


}

document.querySelector('.remove-item').onclick = run;
