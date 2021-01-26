const elementoInput = document.querySelector('input')
const elementoBotao = document.querySelector('button')
const elementoLista = document.querySelector('ul')

const tarefas = []

function mostraTarefas() {

    elementoLista.innerHTML = ''

    for (tarefa of tarefas) {

        const itemLista = document.createElement('li')

        itemLista.innerText = tarefa

        elementoLista.appendChild(itemLista)

        const itemDelete = document.createElement('a')

        const textoDelete = document.createTextNode('delete')

        itemDelete.appendChild(textoDelete)
        itemLista.appendChild(itemDelete)

        const posicaoItem = tarefas.indexOf(tarefa)

        itemDelete.setAttribute('onclick', `deletarTarefa(${posicaoItem})`)

        itemDelete.setAttribute('class', "material-icons")

    }
}

mostraTarefas()

function addTarefa() {
    textoTarefa = elementoInput.value
    tarefas.push(textoTarefa)
    mostraTarefas()
    elementoInput.value = ''
}

elementoBotao.setAttribute('onclick', 'addTarefa()')

function deletarTarefa(posicaoItem) {
    tarefas.splice(posicaoItem, 1)
    mostraTarefas()
}