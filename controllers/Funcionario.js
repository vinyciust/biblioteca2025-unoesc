import Funcionario from "../models/FuncionarioModel.js";

//método
async function listar(req, res) {
    const dados = await Funcionario.findAll();
    res.json(dados);
}

async function selecionar (req, res) {
    await Funcionario.findByPk(req.params.idfuncionario)
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
};
       
async function inserir (req, res) {
    await Funcionario.create({
        nomefuncionario: req.body.nomefuncionario,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        nascimento: req.body.nascimento,
        salario: req.body.salario,
        contratacao: req.body.contratacao,
        demissao: req.body.demissao,
        ativo: req.body.ativo,
        token: req.body.token
    })
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
   };

async function alterar(req, res) {
    await Funcionario.update({
        nomefuncionario: req.body.nomefuncionario,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        nascimento: req.body.nascimento,
        salario: req.body.salario,
        contratacao: req.body.contratacao,
        demissao: req.body.demissao,
        ativo: req.body.ativo,
        senha: req.body.senha,
        token: req.body.token
        },
        {
        where: { idfuncionario: req.params.idfuncionario }
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
};
   


async function alterarSenha(req, res) {
    await Funcionario.update({
        senha: req.body.senha
        },
        {
        where: { idfuncionario: req.params.idfuncionario }
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
};

   
export default { listar, selecionar, inserir, alterar, alterarSenha};

