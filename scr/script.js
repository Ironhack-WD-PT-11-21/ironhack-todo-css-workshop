const todoList = document.getElementById('todo-list');
const newTodoInput = document.querySelector('#add-todo-form > input');

const createButton = (textContent, callback) => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = textContent;
    buttonElement.onclick = callback;
    return buttonElement;
}

const createListItemElement = (value) => {
    const todoRow = document.createElement('div');
    todoRow.className = 'todo-item';

    const todoItem = document.createElement('div');
    todoItem.addEventListener('click', setItemToDone);
    todoItem.className = 'todo-value';
    todoItem.textContent = value;

    const deleteItemButton = createButton('delete', deleteTodoItem);

    todoRow.appendChild(todoItem);
    todoRow.appendChild(deleteItemButton);
    return todoRow;
}

const addNewItem = () => {
    const newTodoValue = newTodoInput.value;
    if (!newTodoValue.length) {
        return false;
    }
    const item = createListItemElement(newTodoValue);
    todoList.appendChild(item);
    newTodoInput.value = '';
}

newTodoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addNewItem();
    }
})

newTodoInput.addEventListener('blur', function () {
    this.value = ''
})

const setItemToDone = function () {
    this.classList.toggle('done');
    this.style.backgroundColor = 'lightgreen';
}

const deleteTodoItem = function () {
    this.parentElement.classList.add('animate-out');
    this.parentElement.querySelector('.todo-value').textContent = ' ';
    setTimeout(() => {
        this.parentElement.remove();
    }, 500)
}