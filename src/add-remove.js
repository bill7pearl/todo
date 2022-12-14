/* eslint-disable */
// import _ from 'lodash';
import './style.css';

let todos = [];

function DisplayTodos() {
  const todoList = document.querySelector('#todo-list');
  todoList.innerHTML = '';

  todos.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const content = document.createElement('div');
    const actions = document.createElement('div');
    const edit = document.createElement('button');
    const deleteButton = document.createElement('button');
    input.type = 'checkbox';
    input.checked = todo.completed;
    span.classList.add('bubble');
    content.classList.add('todo-content');
    actions.classList.add('actions');
    edit.classList.add('edit');
    deleteButton.classList.add('delete');
    content.innerHTML = `<input data-id="${todo.index}" type="text" value="${todo.content}" readonly>`;
    edit.innerHTML = 'Edit';
    deleteButton.innerHTML = 'Delete';
    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);
    todoList.appendChild(todoItem);

    if (todo.completed) {
      todoItem.classList.add('done');
    }

    input.addEventListener('change', (e) => {
      todo.completed = e.target.checked;
      localStorage.setItem('todos', JSON.stringify(todos));

      if (todo.completed) {
        todoItem.classList.add('done');
      } else {
        todoItem.classList.remove('done');
      }

      DisplayTodos();
    });

    edit.addEventListener('click', (e) => {
      const input = content.querySelector('input');
      input.removeAttribute('readonly');
      input.focus();
      edit.innerHTML = 'Save';
      input.addEventListener('blur', (e) => {
        input.setAttribute('readonly', true);
        todo.content = e.target.value;
        localStorage.setItem('todos', JSON.stringify(todos));
        DisplayTodos();
      });
    });

    deleteButton.addEventListener('click', (e) => {
      todos = todos.filter((t) => t !== todo);
      localStorage.setItem('todos', JSON.stringify(todos));

      DisplayTodos();
      updateIndices();
    });

    function updateIndices() {
      let i = 1;
      todos.forEach(function(obj) {
        obj.index = i;
        i++;
        localStorage.setItem('todos', JSON.stringify(todos));
   });
    }  
  });
}
window.addEventListener('load', () => {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  const nameInput = document.querySelector('#name');
  const newTodoForm = document.querySelector('#new-todo-form');
  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = {
      index: todos.length +1,
      content: e.target.elements.content.value,
      completed: false,
    };
    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));

    e.target.reset();
    DisplayTodos();
  });

  DisplayTodos();
});
