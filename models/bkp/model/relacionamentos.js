import autor from './autorModel.js';
import categoria from './categoriaModel.js';
import emprestimo from './emprestimoModel.js';
import livroautor from './livroautorModel.js';
import livro from './livroModel.js';
import pessoa from './pessoaModel.js';
import funcionario from '../controller/funcionario.js';

categoria.hasMany(livro, { foreignKey: 'idcategoria' });
livro.belongsTo(categoria, { as: 'categoria', foreignKey: 'idcategoria' });