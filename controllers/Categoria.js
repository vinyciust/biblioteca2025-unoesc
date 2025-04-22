import Categoria from "../models/CategoriaModel.js";

//método
async function listar(req, res) {
    const dados = await Categoria.findAll();
    res.json(dados);
}

async function selecionar (req, res) {
    await Categoria.findByPk(req.params.idcategoria)
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
};
       
async function inserir (req, res) {
    await Categoria.create({
        nomecategoria: req.body.nomecategoria
    })
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
   };

async function alterar(req, res) {
    await Categoria.update({
        nomecategoria : req.body.nomecategoria 
        },
        {
        where: { idcategoria: req.params.idcategoria }
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
};
   
async function excluir (req, res) {
    await Categoria.destroy({
    where: { idcategoria: req.params.idcategoria }
    })
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
   };
   
export default { listar, selecionar, inserir, alterar, excluir };

