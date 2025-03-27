// Constants
const MONTH_NAMES = [
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
const DAY_NAMES = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
];

// DOM Elements
function getDOMElements() {
  return {
    dayDisplay: document.querySelector('.day'),
    monthDisplay: document.querySelector('.month'),
    yearDisplay: document.querySelector('.year'),
    weekdayDisplay: document.querySelector('.day-of-week'),
    todoForm: document.getElementById('item-form'),
    todoInput: document.getElementById('item-input'),
    todoList: document.querySelector('.todo-list'),
    clearAllBtn: document.getElementById('clear'),
  };
}

let uiElements = null;

// Function to generate a unique ID (5-6 characters)
function generateRandomTodoId() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function updateHeaderDateTime() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = MONTH_NAMES[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const dayOfWeek = DAY_NAMES[currentDate.getDay()];

  uiElements.dayDisplay.textContent = day;
  uiElements.monthDisplay.textContent = month;
  uiElements.yearDisplay.textContent = year;
  uiElements.weekdayDisplay.textContent = dayOfWeek;
}

function handleNewTodoSubmission(e) {
  e.preventDefault();
  const todoText = uiElements.todoInput.value.trim();

  if (!todoText) {
    alert('Please add an item');
    return;
  }

  const todoId = generateRandomTodoId();
  const todoItem = { id: todoId, text: todoText, completed: false };

  renderTodoItemToList(todoItem);
  saveTodoItemToLocalStorage(todoItem);

  uiElements.todoInput.value = '';
  toggleClearAllButtonVisibility();
}

function renderTodoItemToList(todoItem) {
  const listItem = createTodoListItem(todoItem.text, todoItem.id);
  if (todoItem.completed) {
    const checkbox = listItem.querySelector('.checkbox');
    checkbox.checked = true;
    checkbox.parentElement.classList.add('completed');
  }
  uiElements.todoList.appendChild(listItem);
}

function saveTodoItemToLocalStorage(todoItem) {
  let storedTodos = JSON.parse(localStorage.getItem('items')) || [];
  storedTodos.push(todoItem);
  localStorage.setItem('items', JSON.stringify(storedTodos));
}

function createTodoListItem(text, id) {
  const li = document.createElement('li');
  li.dataset.id = id; // Assign unique ID to the list item

  const now = new Date();
  const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

  const checkboxContent = document.createElement('div');
  checkboxContent.className = 'checkbox-content';

  const checkbox = createTodoCheckbox(id);
  const timestamp = createTodoTimestamp(formattedDate);

  checkboxContent.append(checkbox, document.createTextNode(text), timestamp);
  li.append(checkboxContent, createDeleteButton('delete-btn', id));

  return li;
}

function createTodoCheckbox(id) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  checkbox.addEventListener('change', (e) => {
    const li = e.target.closest('li');
    const itemId = li.dataset.id;
    checkbox.parentElement.classList.toggle('completed', checkbox.checked);
    updateTodoCompletionStatus(itemId, checkbox.checked);
  });

  return checkbox;
}

function createTodoTimestamp(date) {
  const timestamp = document.createElement('span');
  timestamp.className = 'timestamp';
  timestamp.textContent = date;
  return timestamp;
}

function deleteTodoItem(id) {
  const li = document.querySelector(`li[data-id="${id}"]`);

  deleteTodoFromLocalStorage(id);
  li.remove();
  toggleClearAllButtonVisibility();
}

function createDeleteButton(classes, id) {
  const button = document.createElement('button');
  button.className = classes;
  button.innerHTML = '❌';
  button.type = 'button';
  button.onclick = () => deleteTodoItem(id);
  return button;
}

function deleteAllTodos() {
  if (confirm('Are you sure?')) {
    while (uiElements.todoList.firstChild) {
      uiElements.todoList.removeChild(uiElements.todoList.firstChild);
    }
    localStorage.removeItem('items');
    toggleClearAllButtonVisibility();
  }
}

function toggleClearAllButtonVisibility() {
  const todoItems = document.querySelectorAll('li');
  uiElements.clearAllBtn.style.display =
    todoItems.length === 0 ? 'none' : 'block';
}

function updateTodoCompletionStatus(itemId, completed) {
  let itemsFromStorage = JSON.parse(localStorage.getItem('items')) || [];
  itemsFromStorage = itemsFromStorage.map((item) =>
    item.id === itemId ? { ...item, completed } : item
  );
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function deleteTodoFromLocalStorage(itemId) {
  let itemsFromStorage = JSON.parse(localStorage.getItem('items')) || [];
  itemsFromStorage = itemsFromStorage.filter((item) => item.id !== itemId);
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function loadTodosFromLocalStorage() {
  const itemsFromStorage = JSON.parse(localStorage.getItem('items')) || [];
  itemsFromStorage.forEach((item) => renderTodoItemToList(item));
  toggleClearAllButtonVisibility();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  uiElements = getDOMElements();

  // Verify all elements exist
  const missingElements = Object.entries(uiElements)
    .filter(([key, element]) => !element)
    .map(([key]) => key);

  if (missingElements.length > 0) {
    console.error('Missing DOM elements:', missingElements);
    return;
  }

  updateHeaderDateTime();
  loadTodosFromLocalStorage();

  // Move event listeners inside DOMContentLoaded
  uiElements.todoForm.addEventListener('submit', handleNewTodoSubmission);
  uiElements.clearAllBtn.addEventListener('click', deleteAllTodos);
  toggleClearAllButtonVisibility();
});
