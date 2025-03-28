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

// Define interfaces for our data structures
interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

interface UIElements {
  dayDisplay: HTMLElement | null;
  monthDisplay: HTMLElement | null;
  yearDisplay: HTMLElement | null;
  weekdayDisplay: HTMLElement | null;
  todoForm: HTMLFormElement | null;
  todoInput: HTMLInputElement | null;
  todoList: HTMLElement | null;
  clearAllBtn: HTMLElement | null;
}

// DOM Elements
function getDOMElements(): UIElements {
  return {
    dayDisplay: document.querySelector('.day'),
    monthDisplay: document.querySelector('.month'),
    yearDisplay: document.querySelector('.year'),
    weekdayDisplay: document.querySelector('.day-of-week'),
    todoForm: document.getElementById('item-form') as HTMLFormElement,
    todoInput: document.getElementById('item-input') as HTMLInputElement,
    todoList: document.querySelector('.todo-list'),
    clearAllBtn: document.getElementById('clear'),
  };
}

let uiElements: UIElements | null = null;

// Function to generate a unique ID (5-6 characters)
function generateRandomTodoId(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function updateHeaderDateTime(): void {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = MONTH_NAMES[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const dayOfWeek = DAY_NAMES[currentDate.getDay()];

  if (uiElements?.dayDisplay)
    uiElements.dayDisplay.textContent = day.toString();
  if (uiElements?.monthDisplay) uiElements.monthDisplay.textContent = month;
  if (uiElements?.yearDisplay)
    uiElements.yearDisplay.textContent = year.toString();
  if (uiElements?.weekdayDisplay)
    uiElements.weekdayDisplay.textContent = dayOfWeek;
}

function handleNewTodoSubmission(e: Event): void {
  e.preventDefault();
  if (!uiElements?.todoInput) return;

  const todoText = uiElements.todoInput.value.trim();

  if (!todoText) {
    alert('Please add an item');
    return;
  }

  const todoId = generateRandomTodoId();
  const todoItem: TodoItem = { id: todoId, text: todoText, completed: false };

  renderTodoItemToList(todoItem);
  saveTodoItemToLocalStorage(todoItem);

  uiElements.todoInput.value = '';
  toggleClearAllButtonVisibility();
}

function renderTodoItemToList(todoItem: TodoItem): void {
  if (!uiElements?.todoList) return;

  const listItem = createTodoListItem(todoItem.text, todoItem.id);
  if (todoItem.completed) {
    const checkbox = listItem.querySelector('.checkbox') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = true;
      checkbox.parentElement?.classList.add('completed');
    }
  }
  uiElements.todoList.appendChild(listItem);
}

function saveTodoItemToLocalStorage(todoItem: TodoItem): void {
  const storedTodosStr = localStorage.getItem('items');
  let storedTodos: TodoItem[] = storedTodosStr
    ? JSON.parse(storedTodosStr)
    : [];
  storedTodos.push(todoItem);
  localStorage.setItem('items', JSON.stringify(storedTodos));
}

function createTodoListItem(text: string, id: string): HTMLLIElement {
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

function createTodoCheckbox(id: string): HTMLInputElement {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  checkbox.addEventListener('change', (e: Event) => {
    const target = e.target as HTMLInputElement;
    const li = target.closest('li');
    if (!li) return;

    const itemId = li.dataset.id;
    if (!itemId) return;

    checkbox.parentElement?.classList.toggle('completed', checkbox.checked);
    updateTodoCompletionStatus(itemId, checkbox.checked);
  });

  return checkbox;
}

function createTodoTimestamp(date: string): HTMLSpanElement {
  const timestamp = document.createElement('span');
  timestamp.className = 'timestamp';
  timestamp.textContent = date;
  return timestamp;
}

function deleteTodoItem(id: string): void {
  const li = document.querySelector(`li[data-id="${id}"]`);
  if (!li) return;

  deleteTodoFromLocalStorage(id);
  li.remove();
  toggleClearAllButtonVisibility();
}

function createDeleteButton(classes: string, id: string): HTMLButtonElement {
  const button = document.createElement('button');
  button.className = classes;
  button.innerHTML = '❌';
  button.type = 'button';
  button.onclick = () => deleteTodoItem(id);
  return button;
}

function deleteAllTodos(): void {
  if (!uiElements?.todoList) return;

  if (confirm('Are you sure?')) {
    while (uiElements.todoList.firstChild) {
      uiElements.todoList.removeChild(uiElements.todoList.firstChild);
    }
    localStorage.removeItem('items');
    toggleClearAllButtonVisibility();
  }
}

function toggleClearAllButtonVisibility(): void {
  if (!uiElements?.clearAllBtn) return;

  const todoItems = document.querySelectorAll('li');
  uiElements.clearAllBtn.style.display =
    todoItems.length === 0 ? 'none' : 'block';
}

function updateTodoCompletionStatus(itemId: string, completed: boolean): void {
  const storedTodosStr = localStorage.getItem('items');
  let itemsFromStorage: TodoItem[] = storedTodosStr
    ? JSON.parse(storedTodosStr)
    : [];

  itemsFromStorage = itemsFromStorage.map((item: TodoItem) =>
    item.id === itemId ? { ...item, completed } : item
  );
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function deleteTodoFromLocalStorage(itemId: string): void {
  const storedTodosStr = localStorage.getItem('items');
  let itemsFromStorage: TodoItem[] = storedTodosStr
    ? JSON.parse(storedTodosStr)
    : [];

  itemsFromStorage = itemsFromStorage.filter(
    (item: TodoItem) => item.id !== itemId
  );
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function loadTodosFromLocalStorage(): void {
  const storedTodosStr = localStorage.getItem('items');
  const itemsFromStorage: TodoItem[] = storedTodosStr
    ? JSON.parse(storedTodosStr)
    : [];

  itemsFromStorage.forEach((item: TodoItem) => renderTodoItemToList(item));
  toggleClearAllButtonVisibility();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  uiElements = getDOMElements();

  // Verify all elements exist
  const missingElements = Object.entries(uiElements)
    .filter(([_, element]: [string, any]) => !element)
    .map(([key]: [string, any]) => key);

  if (missingElements.length > 0) {
    console.error('Missing DOM elements:', missingElements);
    return;
  }

  updateHeaderDateTime();
  loadTodosFromLocalStorage();

  uiElements.todoForm?.addEventListener('submit', handleNewTodoSubmission);
  uiElements.clearAllBtn?.addEventListener('click', deleteAllTodos);
  toggleClearAllButtonVisibility();
});
