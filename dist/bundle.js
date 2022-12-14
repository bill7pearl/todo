"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["bundle"],{

/***/ "./src/add-remove.js":
/*!***************************!*\
  !*** ./src/add-remove.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* eslint-disable */
//import _ from 'lodash';

window.addEventListener('load', function () {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  var nameInput = document.querySelector('#name');
  var newTodoForm = document.querySelector('#new-todo-form');
  var username = localStorage.getItem('username') || '';
  nameInput.value = username;
  nameInput.addEventListener('change', function (e) {
    localStorage.setItem('username', e.target.value);
  });
  newTodoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var todo = {
      content: e.target.elements.content.value,
      category: e.target.elements.category.value,
      done: false,
      createdAt: new Date().getTime()
    };
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

    // Reset the form
    e.target.reset();
    DisplayTodos();
  });
  DisplayTodos();
});
function DisplayTodos() {
  var todoList = document.querySelector('#todo-list');
  todoList.innerHTML = "";
  todos.forEach(function (todo) {
    var todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    var label = document.createElement('label');
    var input = document.createElement('input');
    var span = document.createElement('span');
    var content = document.createElement('div');
    var actions = document.createElement('div');
    var edit = document.createElement('button');
    var deleteButton = document.createElement('button');
    input.type = 'checkbox';
    input.checked = todo.done;
    span.classList.add('bubble');
    if (todo.category == 'personal') {
      span.classList.add('personal');
    } else {
      span.classList.add('business');
    }
    content.classList.add('todo-content');
    actions.classList.add('actions');
    edit.classList.add('edit');
    deleteButton.classList.add('delete');
    content.innerHTML = "<input type=\"text\" value=\"".concat(todo.content, "\" readonly>");
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
    if (todo.done) {
      todoItem.classList.add('done');
    }
    input.addEventListener('change', function (e) {
      todo.done = e.target.checked;
      localStorage.setItem('todos', JSON.stringify(todos));
      if (todo.done) {
        todoItem.classList.add('done');
      } else {
        todoItem.classList.remove('done');
      }
      DisplayTodos();
    });
    edit.addEventListener('click', function (e) {
      var input = content.querySelector('input');
      input.removeAttribute('readonly');
      input.focus();
      input.addEventListener('blur', function (e) {
        input.setAttribute('readonly', true);
        todo.content = e.target.value;
        localStorage.setItem('todos', JSON.stringify(todos));
        DisplayTodos();
      });
    });
    deleteButton.addEventListener('click', function (e) {
      todos = todos.filter(function (t) {
        return t != todo;
      });
      localStorage.setItem('todos', JSON.stringify(todos));
      DisplayTodos();
    });
  });
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/add-remove.js"));
/******/ }
]);
//# sourceMappingURL=bundle.js.map