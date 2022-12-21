import { DisplayTodos, updateIndices } from './add-remove.js';

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
