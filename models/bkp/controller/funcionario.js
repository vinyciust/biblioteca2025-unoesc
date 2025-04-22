import funcionario from "../model/funcionarioModel.js";

async function listar (req, res) {
    const dados = await funcionario.findAll();
    return res.json(dados);
};

async function selecionar (req, res) {
    await funcionario.findByPk(req.params.idfuncionario)
                   .then(result => res.json(result))
                   .catch(err => res.status(400).json(err));
};

async function inserir (req, res) {
    await funcionario.create({
            funcionario: req.body.funcionario,
            email: req.body.email,
            senha: req.body.senha
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
};

async function alterar (req, res) {
    await funcionario.update({
            funcionario: req.body.funcionario,
            email: req.body.email,
            senha: req.body.senha
        }, 
        {
            where: { idfuncionario: req.params.idfuncionario }
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
};

async function excluir (req, res) {
    await funcionario.destroy({
            where: { idfuncionario: req.params.idfuncionario }
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
};

export default { listar, selecionar, inserir, alterar, excluir };