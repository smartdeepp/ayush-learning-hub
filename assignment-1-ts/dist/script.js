'use strict';
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
  if (
    uiElements === null || uiElements === void 0
      ? void 0
      : uiElements.dayDisplay
  )
    uiElements.dayDisplay.textContent = day.toString();
  if (
    uiElements === null || uiElements === void 0
      ? void 0
      : uiElements.monthDisplay
  )
    uiElements.monthDisplay.textContent = month;
  if (
    uiElements === null || uiElements === void 0
      ? void 0
      : uiElements.yearDisplay
  )
    uiElements.yearDisplay.textContent = year.toString();
  if (
    uiElements === null || uiElements === void 0
      ? void 0
      : uiElements.weekdayDisplay
  )
    uiElements.weekdayDisplay.textContent = dayOfWeek;
}
function handleNewTodoSubmission(e) {
  e.preventDefault();
  if (
    !(uiElements === null || uiElements === void 0
      ? void 0
      : uiElements.todoInput)
  )
    return;
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
  var _a;
  if (
    !(uiElements === null || uiElements === void 0
      ? void 0
      : uiElements.todoList)
  )
    return;
  const listItem = createTodoListItem(todoItem.text, todoItem.id);
  if (todoItem.completed) {
    const checkbox = listItem.querySelector('.checkbox');
    if (checkbox) {
      checkbox.checked = true;
      (_a = checkbox.parentElement) === null || _a === void 0
        ? void 0
        : _a.classList.add('completed');
    }
  }
  uiElements.todoList.appendChild(listItem);
}
function saveTodoItemToLocalStorage(todoItem) {
  const storedTodosStr = localStorage.getItem('items');
  let storedTodos = storedTodosStr ? JSON.parse(storedTodosStr) : [];
  storedTodos.push(todoItem);
  localStorage.setItem('items', JSON.stringify(storedTodos));
}
function createTodoListItem(text, id) {
  const li = document.createElement('li');
  li.dataset.id = id;
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
    var _a;
    const target = e.target;
    const li = target.closest('li');
    if (!li) return;
    const itemId = li.dataset.id;
    if (!itemId) return;
    (_a = checkbox.parentElement) === null || _a === void 0
      ? void 0
      : _a.classList.toggle('completed', checkbox.checked);
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
  if (!li) return;
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
  if (
    !(uiElements === null || uiElements === void 0
      ? void 0
      : uiElements.todoList)
  )
    return;
  if (confirm('Are you sure?')) {
    while (uiElements.todoList.firstChild) {
      uiElements.todoList.removeChild(uiElements.todoList.firstChild);
    }
    localStorage.removeItem('items');
    toggleClearAllButtonVisibility();
  }
}
function toggleClearAllButtonVisibility() {
  if (
    !(uiElements === null || uiElements === void 0
      ? void 0
      : uiElements.clearAllBtn)
  )
    return;
  const todoItems = document.querySelectorAll('li');
  uiElements.clearAllBtn.style.display =
    todoItems.length === 0 ? 'none' : 'block';
}
function updateTodoCompletionStatus(itemId, completed) {
  const storedTodosStr = localStorage.getItem('items');
  let itemsFromStorage = storedTodosStr ? JSON.parse(storedTodosStr) : [];
  itemsFromStorage = itemsFromStorage.map((item) =>
    item.id === itemId
      ? Object.assign(Object.assign({}, item), { completed })
      : item
  );
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}
function deleteTodoFromLocalStorage(itemId) {
  const storedTodosStr = localStorage.getItem('items');
  let itemsFromStorage = storedTodosStr ? JSON.parse(storedTodosStr) : [];
  itemsFromStorage = itemsFromStorage.filter((item) => item.id !== itemId);
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}
function loadTodosFromLocalStorage() {
  const storedTodosStr = localStorage.getItem('items');
  const itemsFromStorage = storedTodosStr ? JSON.parse(storedTodosStr) : [];
  itemsFromStorage.forEach((item) => renderTodoItemToList(item));
  toggleClearAllButtonVisibility();
}
// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  var _a, _b;
  uiElements = getDOMElements();
  // Verify all elements exist
  const missingElements = Object.entries(uiElements)
    .filter(([_, element]) => !element)
    .map(([key]) => key);
  if (missingElements.length > 0) {
    console.error('Missing DOM elements:', missingElements);
    return;
  }
  updateHeaderDateTime();
  loadTodosFromLocalStorage();
  (_a = uiElements.todoForm) === null || _a === void 0
    ? void 0
    : _a.addEventListener('submit', handleNewTodoSubmission);
  (_b = uiElements.clearAllBtn) === null || _b === void 0
    ? void 0
    : _b.addEventListener('click', deleteAllTodos);
  toggleClearAllButtonVisibility();
});
