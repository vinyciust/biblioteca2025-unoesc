import express, { request } from "express";
import dotenv from "dotenv";
import banco from "./src/models/banco.js";
import Categoria from "./src/controllers/Categoria.js"
import Editora from "./src/controllers/Editora.js"
import Autor from "./src/controllers/Autor.js"
import Livro from "./src/controllers/Livro.js"
import Funcionario from "./src/controllers/Funcionario.js"

dotenv.config();

banco
  .authenticate()
  .then(() => {
    console.log('Conexão bem-sucedida.');
  })
  .catch(err => {
    console.error('Erro ao conectar:', err);
  });


const app = express();
app.use(express.json());


app.listen(4000, ()=>{
    console.log('API subiu')
});


//caminhos da api
app.get("/", (request, response) =>{
    response.json ({"mensagem":"Olám udnushdf"})
})

//FUNCIONARIO
app.get("/funcionario", Funcionario.listar);
app.get("/funcionario/:idfuncionario", Funcionario.selecionar);
app.post("/funcionario", Funcionario.inserir);
app.put("/funcionario/:idfuncionario", Funcionario.alterar);
app.put("/funcionario/alterasenha/:idfuncionario", Funcionario.alterarSenha);

//CATEGORIA
app.get("/categoria", Categoria.listar);
app.get("/categoria/:idcategoria", Categoria.selecionar);
app.post("/categoria", Categoria.inserir);
app.put("/categoria/:idcategoria", Categoria.alterar);
app.delete("/categoria/:idcategoria", Categoria.excluir);

//LIVRO
app.get("/livro", Livro.listar);
app.get("/livro/:idlivro", Livro.selecionar);
app.post("/livro", Livro.inserir);
app.put("/livro/:idlivro", Livro.alterar);  


//EDITORA
app.get("/editora", Editora.listar);
app.get("/editora/:ideditora", Editora.selecionar);
app.post("/editora", Editora.inserir);
app.put("/editora/:ideditora", Editora.alterar);
app.delete("/editora/:ideditora", Editora.excluir);

//AUTOR
app.get("/autor", Autor.listar);
app.get("/autor/:idautor", Autor.selecionar);
app.post("/autor", Autor.inserir);
app.put("/autor/:idautor", Autor.alterar);
app.delete("/autor/:idautor", Autor.excluir);








