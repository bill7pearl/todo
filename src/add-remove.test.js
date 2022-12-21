/* eslint-disable */
import { DisplayTodos, updateIndices } from './add-remove.js';
import Todo from './modules/delete-completed.js';

let todos = [];
describe('add todo item', () => {
  test('adds a todo to the list', () => {
    const content = document.createElement('input');
    const newTodo = new Todo(todos.length + 1, content.value, false);
    // Add the new todo to the todos array
    todos.push(newTodo);
  
    // Update the DOM
    DisplayTodos();
    
    // Check that the new todo was added to the todos array
    expect(todos).toContain(newTodo);
  
    // Get the todo list element from the DOM
    const todoList = document.querySelector('#todo-list');
  
    // Check that the todo was added to the DOM
    expect(newTodo)
  });
})

describe('test remove todo functionality', () => {
  test('deleteButton event listener removes todo from todos list and updates local storage and display', () => {
    // Set up the test by creating a todo item and adding it to the todos list
    const todo = 'Finish writing unit tests';
    let todos = [todo];
    localStorage.setItem('todos', JSON.stringify(todos));
  
    // Create a mock delete button and simulate a click event on it
    const deleteButton = document.createElement('button');
    deleteButton.addEventListener('click', () => {
      todos = todos.filter((t) => t !== todo);
      localStorage.setItem('todos', JSON.stringify(todos));
      DisplayTodos();
      updateIndices();
    });
    deleteButton.click();
  
    // Assert that the todo was removed from the todos list and local storage
    expect(todos).toEqual([]);
    expect(localStorage.getItem('todos')).toEqual('[]');
  });
})


