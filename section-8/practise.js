const clearBtn = document.querySelector('#clear');


function onClear(){
    alert('Clear Items');
}

// JavaScript Event Listener

clearBtn.onclick = function(){
    alert('Clear Items');
};
clearBtn.onclick = function (){
    console.log('ClearItems');

};

addEventListener()
clearBtn.addEventListener('click', function(){
        alert('Clear Items');
    
    });
    
    clearBtn.addEventListener('click', () => alert('Clear Items'));
    clearBtn.addEventListener('click', onClear);
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);
setTimeout(() => clearBtn.click(), 5000);

clearBtn.addEventListener('click',onClear1);
function onClear1(){
    const itemList = document.querySelector('ul');
    itemList.innerHTML ='';

}
function onClear2(){
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    items.forEach((item) => item.remove());

}
function onClear3(){
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');
while (itemList.firstChild){
    itemList.removeChild(itemList.firstChild);
}
}

// Mouse Events

const logo = document.querySelector(['img']);
const onClick = () => console.log('click event');
const onDoubleClick = () => {
    if(document.body.style.backgroundColor !== 'skyblue'){
        document.body.style.backgroundColor = 'skyblue';
        document.body.style.color = 'white';

    }else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }

};
const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart= () => console.log('drag start event');
const onDrag= () => console.log('drag event');
const onDragEnd= () => console.log('drag end event');


//Event Listener
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);

// The Event Object
function onClick1(e){
    console.log(e.target);
    console.log(e.currentTarget);
    if(e.target.style.backgroundColor === 'black'){
        e.target.style.backgroundColor = 'red';
    }
    else{
        e.target.style.backgroundColor = 'black';
    }

}

logo.addEventListener('click', onClick1);

document.body.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
});

function onClick2(e){
    console.log(e.type);
    console.log(e.timeStamp);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.pageX);
    console.log(e.pageY);
    console.log(e.screenX);
    console.log(e.screenY);


}
logo.addEventListener('click', onClick2);

document.querySelector('a').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Link was clicked');

})

logo.addEventListener('drag', onDrag);
function onDrag(e){
    document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
}

// Keyboard Events

// const itemInput = document.getElementById('item-input');
const onKeyPress = (e) => {
    console.log('keypress');
};
const onKeyUp = (e) => {
    console.log('keyup');
};
const onKeyDown = (e) => {
    // console.log('keydown');
    // Key
    console.log(e.key);
    // if(e.key === 'Enter'){
    //     alert('You pressed enter');
    // }
    // KeyCode

    if(e.keyCode === 13){
        alert('You pressed enter');
    }
    
    // code
    if(e.code === 'Digit1'){
        console.log('You pressed 1');

    }
    
    if(e.repeat){
        console.log(`You are holding down ${e.key}`);
    }
    console.log(`Shift ${e.shiftKey}`);
    console.log(`Control ${e.ctrlKey}`);
    if(e.shiftKey && e.key ==='K'){
        console.log('You hit shift +K');
    }
};
// itemInput.addEventListener('keypress',onKeyPress);
// itemInput.addEventListener('keyup',onKeyUp);
itemInput.addEventListener('keydown',onKeyDown);

const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e){
    heading.textContent = e.target.value;
    // console.log(e.target.value);
} 

function onChecked(e){
    // heading.textContent = e.target.value;
    // console.log(e.target.checked);
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not checked';
} 

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput);
checkbox.addEventListener('input', onChecked);

function onFocus(){
console.log('Input is focused');
itemInput.style.outlineStyle = 'solid';
itemInput.style.outlineWidth = '1px';
itemInput.style.outlineColor= 'yellow';



}
function onBlur(){
    console.log('Input is Blurred');
    itemInput.style.outlineStyle = 'none';

}
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);


// Form submission and FormData object
// const form = document.getElementById('item-form');

function onSubmit(e){
    e.preventDefault();
    
    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input');

    if(item === '' || priority === '' ){
        alert('please fill all the fields');
        return;
    }
    console.log(item, priority.value);

}
form.addEventListener('submit', onSubmit);

function onSubmit2(e){
    e.preventDefault();
    
    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input');

    if(item === '' || priority === '' ){
        alert('please fill all the fields');
        return;
    }
    const formData = new FormData(form);
    const entries = formData.entries();
    for(let entry of entries){
        console.log(entry[1]);

    }

}
form.addEventListener('submit', onSubmit2);

// Event Bubbling

const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');


button.addEventListener('click', (e) => {
    alert('Button was clicked');
    e.stopPropagation();

});

div.addEventListener('click', () => {
    alert('Div was clicked');

});
form.addEventListener('click', () =>{
    alert('form was clicked');
});

document.body.addEventListener('click', () =>{
    alert('Body was Clicked');
} )

// Event delegation and multiple elements
const listItem = document.querySelectorAll('li');
const list = document.querySelector('ul');
listItem.forEach((item) => {
    item.addEventListener('click', (e) =>{
        e.target.remove();

    });
});
list.addEventListener('click', (e) =>{
    if(e.target.tagName ==='LI'){
        e.target.remove();

    }

});
list.addEventListener('mouseover', (e) =>{
    if(e.target.tagName ==='LI'){
        e.target.style.color = 'red';

    }

});


