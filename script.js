document.addEventListener('DOMContentLoaded', function() {
  const todoInput = document.getElementById('todo-input');
  const addTaskButton = document.getElementById('add-task-btn');
  const todoList = document.getElementById('todo-list');

  let tasks = JSON.parse(localStorage.getItem('tasks')) ||[];
tasks.forEach(task => renderTasks(task));
  addTaskButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    todoInput.value = '';
    console.log(tasks);
    renderTasks(); // call render after adding
  });

  function renderTasks() {
    todoList.innerHTML = '';
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.text;
      todoList.appendChild(li);
    });
  }

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});
