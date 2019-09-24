var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttontElementAdd = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderizarTodos() {
    listElement.innerHTML = '';
    for(todo of todos){
        var todoElement =  document.createElement('li');
        var todoText = document.createTextNode(todo);

        var buttontElementRmv = document.createElement('button');
        var buttontElementRmvText = document.createTextNode('Excluir');
        var pos = todos.indexOf(todo);

        buttontElementRmv.setAttribute('onclick', 'removerTodo(' + pos + ')');
        buttontElementRmv.appendChild(buttontElementRmvText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(buttontElementRmv);
        listElement.appendChild(todoElement);

    }
}

renderizarTodos();

function adicionarTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderizarTodos();
    salvarStorage();
}

function removerTodo(pos) {
    todos.splice(pos,1);
    renderizarTodos();
    salvarStorage();
}


buttontElementAdd.onclick = adicionarTodo;
function salvarStorage() {
    localStorage.setItem('list_todos',JSON.stringify(todos));
}


