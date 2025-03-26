document.addEventListener('DOMContentLoaded', () => {
    const elements = {
   day: document.querySelector('.day'),
   month: document.querySelector('.month'),
   year: document.querySelector('.year'),
   day0fWeek: document.querySelector('.day-of-week'),
    };
  const currentDate = new Date();

  // Extract date parts
  const day = currentDate.getDate();
  const monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const dayNames = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
  ];
  const dayOfWeek = dayNames[currentDate.getDay()];

  elements.day.innerText = day;
  elements.month.innerText = month;
  elements.year.innerText = year;
  elements.day0fWeek.innerText = dayOfWeek;;

});





const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.querySelector('.todo-list');
const clearBtn = document.getElementById('clear');



function addItem(e){
    e.preventDefault();
    const newItem = itemInput.value;

    if(newItem === ''){
        alert('Please add an item');
        return;
    }
    
    const li = document.createElement('li');
    const now = new Date();
    const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    
    const checkboxContent = document.createElement('div');
    checkboxContent.className = 'checkbox-content';
    
    const checkbox = createCheckbox('checkbox');
    checkbox.id = 'task-' + Date.now();
    
    const timestamp = document.createElement('span');
    timestamp.className = 'timestamp';
    timestamp.textContent = formattedDate;
    
    checkboxContent.appendChild(checkbox);
    checkboxContent.appendChild(document.createTextNode(newItem));
    checkboxContent.appendChild(timestamp);
    
    const button = createButton('delete-btn');
    
    li.appendChild(checkboxContent);
    li.appendChild(button);

    itemList.appendChild(li);

    checkUI();
    itemInput.value = '';
}



function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    button.innerHTML = '❌';
    return button;

}
function createCheckbox(classes){
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = classes;

    // Add event listener to toggle strikethrough
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            checkbox.parentElement.classList.add('completed');
        } else {
            checkbox.parentElement.classList.remove('completed');
        }
    });


    return checkbox;
}

function removeItem(e){
    if(e.target.classList.contains('delete-btn')){
        e.target.parentElement.remove();
    };
    checkUI();
}

function clearAll(){
    if(confirm('Are you sure?')){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
    checkUI();
}
}



function checkUI(){
    const items= document.querySelectorAll('li');

    if(items.length === 0){
        clearBtn.style.display = 'none';
    } else{
        clearBtn.style.display = 'block';
    }
}

//Event Listener
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearAll);
checkUI();
