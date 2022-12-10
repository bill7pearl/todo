/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
import _ from 'lodash';
import './style.css';

class LocalStorage {
  static addToStorage(todoArr) {
    const storage = localStorage.setItem('todo', JSON.stringify(todoArr));
    return storage;
  }

  static getStorage() {
    const storage = localStorage.getItem('todo') === null
      ? [] : JSON.parse(localStorage.getItem('todo'));
    return storage;
  }
}

const form = document.querySelector('.form');
const lists = document.querySelector('.lists');
const input = document.querySelector('#input');

let todoArr = LocalStorage.getStorage();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let index = 0;
  const todo = new Todo(index, input.value);
  todoArr = [...todoArr, todo];
  todoArr.forEach((todo) => {
    index++;
    todo.index = index;
  });
  UI.displayData();
  UI.clearField();
  UI.removeTodo();
  LocalStorage.addToStorage(todoArr);
});

class Todo {
  constructor(index, todo) {
    this.index = index;
    this.todo = todo;
  }
}

class UI {
  static displayData() {
    const displayData = todoArr.map((item) => `
            <div class="todo">
            <input class="checkbox" type="checkbox">
            <p class="todo-desc">${item.todo}</p>
            <span class="remove" data-id = ${item.index}>🚮</span>
        </div>
            `);
    lists.innerHTML = (displayData).join(' ');
  }

  static clearField() {
    input.value = '';
  }

  static removeTodo() {
    lists.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        e.target.parentElement.remove();
      }
      const btnId = e.target.dataset.id;

      UI.removeTodoArr(btnId);
    });
  }

  static removeTodoArr(index) {
    todoArr = todoArr.filter((item) => item.index !== +index);
    LocalStorage.addToStorage(todoArr);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  UI.displayData();
  UI.removeTodo();
});