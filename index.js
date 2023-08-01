const mas = [];
let vvod = document.querySelector('.btn-vvod');
let inner = document.querySelector('.vivod');
let input = document.querySelector('.text_vvod');

function addtodo(text) {
    const todo = {
        text,
        status: false,
        id: `${Math.random()}`
    }
    mas.push(todo)
}

function deleteTodo(id) {
    mas.forEach(todo => {
        if (todo.id === id) {
            todo.status = true;
        }
    })
}

vvod.addEventListener('click', () => {
    addtodo(input.value)

    render()
    console.log(mas)
    input.value = ''
})

function render() {
    console.log(mas)
    let html = ''
    mas.forEach(todo => {
        if (todo.status) {
            return
        }

        html += `<div class="vivod_str">${todo.text}<button class="delete-btn" data-id=${todo.id}></button></div>`

    })

    inner.innerHTML = html
}

inner.addEventListener('click', function (event) {
    if (event.target.nodeName !== 'BUTTON') {
        return
    }
    const id = event.target.dataset.id;
    deleteTodo(id)
    render()
})































