function addTask() {
    var taskInput = document.getElementById('enter-task');
    var taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    var taskList = document.getElementById('taskList');
    var task = document.createElement('p');

    task.innerHTML = `
        <input type="checkbox" onchange="mark(this)">
        <span>${taskText}</span>
        <button id='deleteButton' onclick="deleteTask(this)">🗑️</button>
    `;
    task.classList.add('task')
    taskList.appendChild(task);
    taskInput.value = '';
}

function mark(checkbox) {
    var taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
    } else {
        taskText.style.textDecoration = 'none';
    }
}

function deleteTask(button) {
    var listItem = button.parentElement;
    listItem.remove();
}
