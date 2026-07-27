const tarefasLista = [];
const listaTarefas = document.getElementById("listaTarefas")
const botao = document.getElementById("cadastrar")
const inputElemento = document.getElementById("tarefa");

function cadastrarItem(){
    const valorDigitado = inputElemento.value.trim();
    if(valorDigitado !== ""){
        tarefasLista.push(valorDigitado)
    
        inputElemento.value = ""
    }
    else {
        alert("Por favor, digite algum valor antes de adicionar!")
    }
    
    
}