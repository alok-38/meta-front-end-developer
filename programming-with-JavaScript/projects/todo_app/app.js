const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const mainEl = document.querySelector('main');
const sectionEl = document.querySelector('section');
const paraDivEl = document.querySelector('.para');

// Create the para element once
const paraEl = document.createElement('p');
paraDivEl.appendChild(paraEl);

const ulEl = document.createElement('ul');

const addTodo = () => {
    let todoItem = inputEl.value;
    console.log(todoItem);
    paraEl.textContent = "Todo item created successfully.";
    let liEl = document.createElement('li');
    liEl.textContent = todoItem;
    ulEl.appendChild(liEl);
    sectionEl.appendChild(ulEl);
    inputEl.value = "";
}

buttonEl.addEventListener('click', addTodo);
