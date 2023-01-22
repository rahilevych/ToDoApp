const toDoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".task__input")
const addButton = document.querySelector(".task__add-button");

addButton.addEventListener("click", createTask);


function createTask(event) {
    event.preventDefault();
    if (inputTask.value != '') {
        const toDoBlock = document.createElement("div");
        toDoBlock.classList.add("todo-list__block");
        const text = document.createElement("p");
        text.innerHTML = inputTask.value;
        text.contentEditable = 'true';
        text.classList.add("todo-list__text");
        toDoBlock.appendChild(text);
        const buttonBlock = document.createElement('div');
        buttonBlock.classList.add('button-block')

        const checkButton = document.createElement('button');
        checkButton.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>'
        checkButton.classList.add('check-button');
        buttonBlock.appendChild(checkButton);
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
        deleteButton.classList.add('delete-button');
        buttonBlock.appendChild(deleteButton);
        toDoBlock.appendChild(buttonBlock);
        toDoList.appendChild(toDoBlock);
        inputTask.value = '';
        checkButton.addEventListener('click', () => {
            toDoBlock.style.background = 'rgba(0, 0, 0, 0.3)';
            toDoBlock.style.color = 'grey';
            toDoBlock.style.textDecoration = 'line-through';
            checkButton.style.color = 'green';
        });
        deleteButton.addEventListener('click', () => {
            toDoBlock.remove()
        })
    } else {
        alert('Please fill your task!')
    }
}