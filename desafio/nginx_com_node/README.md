# Desafio Nginx com Node - Utilizar o nginx como proxy reverso

### Especificação:
1. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js.
2. A aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela pessoa.

- O retorno da aplicação node.js para o nginx deverá ser:

  ```html <h1>Full Cycle Rocks!</h1>
      - Lista de nomes cadastrado no banco de dados.
  ```

3. Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.
4. A linguagem de programação para este desafio é Node/JavaScript.
