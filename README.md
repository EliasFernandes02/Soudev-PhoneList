## Instruções ##
1)Instalar o nodeJS

2)instalar json-server

3)executar o terminal o npm install -g json-server

4)executar o projeto

5)no terminaL execute npx json-server db.json --port 8002

6)Eu utilizei essas rotas: 

Se quiser, instale o imnsonia e teste as rotas 

-GET "http://localhost:8002/pessoas"

-POST "http://localhost:8002/pessoas"

-PATCH "http://localhost:8002/pessoas/id"

-DELETE "http://localhost:8002/pessoas/id"

7)abrir o index.html no navegador e teste diretamente na página


## Considerações ##

- Existiu a possibilidade de implementar uma nova função que selecionaria e deletaria mais de uma linha, porém como ocorreram imprevistos, tomei a liberdade de optar não implementar pois não estava funcionando como deveria. Optei por entregar um crud com menos funcionalidades porém funcional.