import Aluno from '../models/Aluno';

class HomeController {
  // eslint-disable-next-line class-methods-use-this
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      email: 'Maria@teste.com',
      idade: 80,
      peso: 70,
      altura: 1.58,

    });
    res.status(200).json(novoAluno);
  }
}

export default new HomeController();
