/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import _ from 'lodash';
import './style.css';

const tasks = [
  {
    description: 'workouts for 10 minutes',
    completed: false,
    index: 1,
  },
  {
    description: 'read a book',
    completed: false,
    index: 2,
  },
  {
    description: 'practise coding',
    completed: false,
    index: 3,
  },
];

const todoListContainer = document.getElementById('todo-list');

let tasksList = [];
for (let i = 0; i < tasks.length; i++) {
  tasksList += `
<div class="tasks-container">
<div class="task-description"> <input type="checkbox"> ${tasks[i].description}</div>
</div>
`;
}
todoListContainer.innerHTML = tasksList;
