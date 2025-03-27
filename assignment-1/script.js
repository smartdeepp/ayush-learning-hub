// Constants
const MONTH_NAMES = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const DAY_NAMES = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

// DOM Elements
const elements = {
    day: document.querySelector('.day'),
    month: document.querySelector('.month'),
    year: document.querySelector('.year'),
    dayOfWeek: document.querySelector('.day-of-week'), 
    itemForm: document.getElementById('item-form'),
    itemInput: document.getElementById('item-input'),
    itemList: document.querySelector('.todo-list'),
    clearBtn: document.getElementById('clear')
};

function updateDateDisplay() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = MONTH_NAMES[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const dayOfWeek = DAY_NAMES[currentDate.getDay()];

    elements.day.textContent = day;
    elements.month.textContent = month;
    elements.year.textContent = year;
    elements.dayOfWeek.textContent = dayOfWeek;
}

function addItem(e) {
    e.preventDefault();
    const newItem = elements.itemInput.value.trim();

    if (!newItem) {
        alert('Please add an item');
        return;
    }
 
    addItemToDOM(newItem);
    addItemToLocalStorage(newItem);

    elements.itemInput.value = '';
    checkUI();
}

function addItemToDOM(item){
    const li = createTodoItem(item.text || item);
    if (item.completed) {
        const checkbox = li.querySelector('.checkbox');
        checkbox.checked = true;
        checkbox.parentElement.classList.add('completed');
    }
    elements.itemList.appendChild(li);
 
}

function addItemToLocalStorage(item){
    let itemsFromStorage;
    if(localStorage.getItem('items') === null){
        itemsFromStorage = [];
    } else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    itemsFromStorage.push({text: item, completed: false});
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function createTodoItem(text) {
    const li = document.createElement('li');
    const now = new Date();
    const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    
    const checkboxContent = document.createElement('div');
    checkboxContent.className = 'checkbox-content';
    
    const checkbox = createCheckbox();
    const timestamp = createTimestamp(formattedDate);
    
    checkboxContent.append(checkbox, document.createTextNode(text), timestamp);
    li.append(checkboxContent, createButton('delete-btn'));
    
    return li;
}

function createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.id = 'task-' + Date.now();
    
    checkbox.addEventListener('change', (e) => {
        const li = e.target.closest('li');
        const text = e.target.parentElement.childNodes[1].textContent;
        checkbox.parentElement.classList.toggle('completed', checkbox.checked);
        updateItemInLocalStorage(text, checkbox.checked);
    });
    
    return checkbox;
}

function createTimestamp(date) {
    const timestamp = document.createElement('span');
    timestamp.className = 'timestamp';
    timestamp.textContent = date;
    return timestamp;
}

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    button.innerHTML = '❌';
    return button;

}

function removeItem(e){
    if(e.target.classList.contains('delete-btn')){
        const li = e.target.parentElement;
        const itemText = li.querySelector('.checkbox-content').childNodes[1].textContent;
        removeItemFromLocalStorage(itemText);
        li.remove();
    };
    checkUI();
}

function clearAll(){
    if(confirm('Are you sure?')){
    while(elements.itemList.firstChild){
        elements.itemList.removeChild(elements.itemList.firstChild);
    }
    localStorage.removeItem('items');
    checkUI();
}
}

function checkUI(){
    const items= document.querySelectorAll('li');

    if(items.length === 0){
        elements.clearBtn.style.display = 'none';
    } else{
        elements.clearBtn.style.display = 'block';
    }
}

function updateItemInLocalStorage(itemText, completed) {
    let itemsFromStorage = JSON.parse(localStorage.getItem('items')) || [];
    itemsFromStorage = itemsFromStorage.map(item => {
        if (item.text === itemText) {
            return { ...item, completed };
        }
        return item;
    });
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function removeItemFromLocalStorage(itemText) {
    let itemsFromStorage = JSON.parse(localStorage.getItem('items')) || [];
    itemsFromStorage = itemsFromStorage.filter(item => item.text !== itemText);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function loadItems() {
    const itemsFromStorage = JSON.parse(localStorage.getItem('items')) || [];
    itemsFromStorage.forEach(item => addItemToDOM(item));
    checkUI();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    updateDateDisplay();
    loadItems();
});
elements.itemForm.addEventListener('submit', addItem);
elements.itemList.addEventListener('click', removeItem);
elements.clearBtn.addEventListener('click', clearAll);
checkUI();
