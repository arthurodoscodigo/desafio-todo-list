const tarefasLista = JSON.parse(localStorage.getItem("minhasTarefas")) || [];

const listaTarefas = document.getElementById("listaTarefas");
const botao = document.getElementById("cadastrar");
const inputElemento = document.getElementById("tarefa");

botao.addEventListener("click", cadastrarItem);


function salvarNoLocalStorage() {
    localStorage.setItem("minhasTarefas", JSON.stringify(tarefasLista));
}

function atualizarVisibilidadeLista() {
    if (tarefasLista.length === 0) {
        listaTarefas.classList.add("escondido");
    } else {
        listaTarefas.classList.remove("escondido"); 
    }
}


function criarElementoTarefaNaTela(texto) {
    const novoItemLista = document.createElement("li");
    
    const textoTarefa = document.createElement("span");
    textoTarefa.innerText = texto;
    textoTarefa.style.cursor = "pointer"; 
    
    textoTarefa.addEventListener("click", function() {
        textoTarefa.classList.toggle("concluida");
    });
    
    const botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "❌";
    botaoExcluir.style.marginLeft = "10px";
    
    botaoExcluir.addEventListener("click", function() {
        
        const indice = tarefasLista.indexOf(texto);
        if (indice !== -1) {
            tarefasLista.splice(indice, 1);
        }
        
        
        novoItemLista.remove();
        
        
        salvarNoLocalStorage();
        atualizarVisibilidadeLista();
    });
    
    novoItemLista.appendChild(textoTarefa);
    novoItemLista.appendChild(botaoExcluir);
    listaTarefas.appendChild(novoItemLista);
}

function cadastrarItem(){
    const valorDigitado = inputElemento.value.trim();
    
    if(valorDigitado !== ""){
        tarefasLista.push(valorDigitado);
        

        salvarNoLocalStorage();
        atualizarVisibilidadeLista();
        

        criarElementoTarefaNaTela(valorDigitado);
        
        inputElemento.value = "";
    }
    else {
        alert("Por favor, digite algum valor antes de adicionar!");
    }
}


function carregarTarefasSalvas() {
    tarefasLista.forEach(function(tarefa) {
        criarElementoTarefaNaTela(tarefa);
    });
    atualizarVisibilidadeLista();
}


carregarTarefasSalvas();
