const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

const connection = mysql.createConnection({
  host: 'db_mysql',
  user: 'root',
  password: 'supremo_lista_nomes',
  database: 'db_supremo_lista_nomes'
})

const sql_create_table_pessoa = `
  CREATE TABLE IF NOT EXISTS pessoa (
    id int(11) NOT NULL AUTO_INCREMENT,
    nome varchar(128) NOT NULL,
    PRIMARY KEY (id)
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1
`
connection.query(sql_create_table_pessoa)

/* 
  Carga de dados para teste
  Hoje no dia que executo esse desafio, eu não sei executar uma carga de dados para testes ao subir o container. Você saber? então jogue duro faça isso para nós
*/
connection.query(`INSERT INTO pessoa(nome) values('All Might')`)
connection.query(`INSERT INTO pessoa(nome) values('Isuku Midoriya')`)

app.get('/', (req,res) => {

  connection.query('SELECT nome FROM pessoa', function (error, results) {
    if(error) throw error;

    /* 
      Hoje no dia que executo esse desafio, não sei separar camada Back-end da parte dos elementos HTML, acrescentamos que para o propósito do desafio que é Docker
      está tudo bem ficar dessa forma, ou seja escolhemos assumir esse débito técnico
    */
    var elementList = '<ul>'
    
    results.forEach(it => elementList += `<li>${it.nome}</li>`)

    elementList += '</ul>'

    res.send(
      `<h1>Full Cycle Rocks! Eu sou Fernando(fmchagas) Dev. Full Cycle</h1>
      <h2>Lista de nomes cadastrados</h2>
      ${elementList}
      Criado por fmchagas
      `
    )
  });
  
})


app.listen(port, ()=> {
  console.log(`Rodando na porta ${port}`)
})
