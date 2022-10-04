
//criando uma constante para substituir a api

const API_URL = 'http://localhost:8002'


//adicionar

function inserir() {
    event.preventDefault();
    let dados = {
        nome: input_nome.value,
        telefone: parseInt(input_telefone.value), //para vir inteiro ao inves de string
        cidade: input_cidade.value

    };

    fetch(API_URL+'/pessoas',{
        method:'POST',
        body:JSON.stringify(dados), //transformando em string e mandando
        headers:{
            'Content-Type': 'application/json'
        }
    })

    .then(resposta => resposta.json())

    .then(resposta => atualizarListas());
    formAdd.reset(); //Resetar o formulario
}




//listar 

function atualizarListas() {

    fetch(API_URL+'/pessoas')
    
    .then(function (resposta) {

        return resposta.json();

    }) 

    .then(function(lista) {
        //Fazendo com que os itens não dupliquem na tabela quando cadastra
        tabela_pessoas.innerHTML='';
        lista.forEach(function (cadaItem) {
            tabela_pessoas.innerHTML +=`  
            <tr>
            <td> <input onclick ="acionarBotaoExcluir()"  value="${cadaItem.id}" data-check="acao" type="checkbox"> </td>
                <td>${cadaItem.id}</td>
                <td>${cadaItem.nome}</td>
                <td>${cadaItem.telefone}</td>
                <td>${cadaItem.cidade}</td>
                <td>
                <button  onclick="buscarParaEditar(${cadaItem.id})"data-bs-toggle="offcanvas" data-bs-target="#offcanvasEditar"class="btn btn-warning btn-md data">Editar</button>
                <button onclick="excluir(${cadaItem.id})" class="btn btn-danger btn-md">Excluir</button>
                </td>
                
            </tr>
            `;
        });
    })
   
}
atualizarListas();



//Deletar
async function excluir(id) {
    let resposta = confirm('Tem certeza') 

    if(resposta !== true){
        return;
    }

    
    await fetch(API_URL+ '/pessoas/' +id, {
        method:'DELETE'
        
        
        
    });
    
    
    atualizarListas();
    alert('item deletado com sucesso')
    
}



function buscarParaEditar(id) {
    input_editar_id.value = id;
    fetch(API_URL+'/pessoas/'+id)
        .then(res => res.json())
        .then( dados => {
            input_editar_nome.value = dados.nome;
            input_editar_telefone.value = dados.telefone;
            input_editar_cidade.value = dados.cidade;


        });

}

//editar

function editarDados () {
    event.preventDefault();

    let dados = {
        nome: input_editar_nome.value,
        cidade:input_editar_cidade.value,
        telefone:input_editar_telefone.value,
    }
    fetch(API_URL+'/pessoas/'+input_editar_id.value,{
        method:'PATCH',
        body:JSON.stringify(dados), //transformando em string e mandando
        headers:{
            'Content-Type': 'application/json'
        }
        
    })
    .then(res => res.json())
    .then(() => atualizarListas())

    let x =  document.querySelector('[data-bs-dismiss="offcanvas"]');

    x.dispatchEvent(new Event('click'));


    alert('Editado com sucesso')


    
    
}


//marcar todos os inputs
function marcarTodos() {
    let todos = document.querySelectorAll('[data-check="acao"]');

    todos.forEach((cadaCheck) => {
        if(check_all.checked === true) {
            cadaCheck.checked = true;

        } else {
            cadaCheck.checked = false;
        }
        // cadaCheck.checked = check_all.checked;
    });
    
}




