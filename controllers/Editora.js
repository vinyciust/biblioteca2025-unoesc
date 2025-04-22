import Editora from "../models/EditoraModel.js";


//método
async function listar(req, res) {
    const dados = await Editora.findAll();
    res.json(dados);
}

async function selecionar (req, res) {
    await Editora.findByPk(req.params.ideditora)
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
};

async function inserir (req, res) {
    await Editora.create({
        EDITORA: req.body.editora
    })
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
};
async function alterar(req, res) {
    await Editora.update({
        EDITORA: req.body.editora
        },
        {
        where: { IDEDITORA: req.params.ideditora }
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
};
   
async function excluir (req, res) {
    await Editora.destroy({
    where: { IDEDITORA: req.params.ideditora }
    })
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
   };

export default { listar, selecionar, inserir, alterar, excluir };
