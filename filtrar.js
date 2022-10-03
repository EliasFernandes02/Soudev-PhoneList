function filtrar(){
    //valor que o usuario digitou
    let letras = input_filtrar.value.toLowerCase();

    //pegando totas as tr das linhas 

    
    let linhas = tabela_pessoas.getElementsByTagName('tr');

    for ( let posicao in linhas){
        if (isNaN(posicao)){
            continue;

        } 

      let colunaItem = linhas[posicao].children[1].innerText.toLowerCase()
      let colunaQuantidade = linhas[posicao].children[2].innerText.toLowerCase()
      let colunas = colunaItem + colunaQuantidade;
     
        
      if(colunas.includes(letras)){
        linhas[posicao].style.display = '';

      } else {
        linhas[posicao].style.display = 'none';
      }
    }
}