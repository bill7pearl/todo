/* eslint-disable */
/* import _ from 'lodash';
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
let input = document.querySelector('#input');


let todoArr = LocalStorage.getStorage();
//let editedArr = LocalStorage.getStorage();

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
  UI.editTodo();
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
            <span class="edit-todo" data-id = ${item.todo}>✍</span>
            <span class="remove" data-id = ${item.index}>🚮</span>
        </div>
            `);
    lists.innerHTML = (displayData).join(' ');
    //UI.editTodo()
  }

  static clearField() {
    input.value = '';
  }

  static removeTodo() {
    lists.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        //e.preventDefault();
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

   static editTodo() {
    let editBtnId = document.querySelector('.edit-todo');
    
    lists.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-todo')) {
            //e.preventDefault();
            const closeInput = document.querySelector('.close-field')
            const editField = document.querySelector('.edit-field-bg')
            let userInput = document.querySelector('.user-input')
            
            editBtnId = e.target.dataset.id;
            
            const editedArr = todoArr.map(item => {
            if (item.todo === editBtnId) {
                editField.style.display = 'flex';
                userInput.innerHTML = `
                <button onclick="closeUserInput()" class="close-field">X</button>
               <input class="edit-field" type="text" name="" id="edited-input" value="">
               `
               function closeUserInput() {
                editField.style.display ='none'
              }
              //let userInputValue = document.querySelector('.edit-field')
              //userInputValue.addEventListener('submit', () => {
              //editedArr.map(item => {
              //})
              //})
              return {...item, todo: 'test'}
              
            }
            return item;
          })
          
          LocalStorage.addToStorage(editedArr);
          //location.reload()
          //UI.displayData();
          
          console.log(editedArr)
          console.log(editBtnId)
        }
        
      });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  UI.displayData();
  UI.removeTodo();
  UI.editTodo();
});
 */
