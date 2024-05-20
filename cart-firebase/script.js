import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, push, ref } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings = {
  databaseURL: 'https://playground-8f28f-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, 'shoppingList');

const form = document.getElementById('shopping-form');
const inputField = document.getElementById('input-field');
const shoppingList = document.getElementById('shopping-list');

form.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = inputField.value;
  appendLiInShoppingList(inputValue);
  push(shoppingListInDB, inputValue);
  inputField.value = '';
});

function appendLiInShoppingList(value) {
  const li = document.createElement('li');
  li.innerText = value;
  shoppingList.appendChild(li);
}
