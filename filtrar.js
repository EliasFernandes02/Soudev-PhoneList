function filtrar(){
    //valor que o usuario digitou

    let letras = input_filtrar.value.toLowerCase();

    //pegando totas as tr das linhas 

    
    let linhas = tabela_pessoas.getElementsByTagName('tr');

    for ( let posicao in linhas){

        if (isNaN(posicao)){

            continue;

        } 

      let colunaNome = linhas[posicao].children[1].innerText.toLowerCase()
      let colunaTelefone = linhas[posicao].children[2].innerText.toLowerCase()
      let colunaCidade = linhas[posicao].children[2].innerText.toLowerCase()
      let colunas = colunaNome + colunaTelefone + colunaCidade;
     
        
      if(colunas.includes(letras)){

        linhas[posicao].style.display = '';

      } else {
        
        linhas[posicao].style.display = 'none';
      }
    }
}


