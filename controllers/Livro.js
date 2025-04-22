import Livro from "../models/LivroModel.js";

//método
async function listar(req, res) {
    const dados = await Livro.findAll();
    res.json(dados);
}

async function selecionar (req, res) {
    await Livro.findByPk(req.params.idlivro)
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
};
       
async function inserir (req, res) {
    await Livro.create({
        titulo: req.body.titulo,
        ano: req.body.ano,
        paginas: req.body.paginas,
        edicao: req.body.edicao,
        resumo: req.body.resumo,
        emprestado: req.body.emprestado,
        idcategoria: req.body.idcategoria,
        ideditora: req.body.ideditora,
        idautor: req.body.idautor
    })
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
   };

async function alterar(req, res) {
    await Livro.update({
        titulo: req.body.titulo,
        ano: req.body.ano,
        paginas: req.body.paginas,
        edicao: req.body.edicao,
        resumo: req.body.resumo,
        emprestado: req.body.emprestado,
        idcategoria: req.body.idcategoria,
        ideditora: req.body.ideditora,
        idautor: req.body.idautor
        },
        {
        where: { idlivro: req.params.idlivro }
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
};
  
/*
async function excluir (req, res) {
    await Categoria.destroy({
    where: { IDCATEGORIA: req.params.idcategoria }
    })
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
   };
 */ 
export default { listar, selecionar, inserir, alterar };

