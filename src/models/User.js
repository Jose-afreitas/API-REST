import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [5, 250],
              msg: 'Name field must contain 5 to 250 characters',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'Invalid email',
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [8, 50],
              msg: 'The password must contain a minimum of 8 and a maximum of 50 characters',
            },
          },
        },

      },
      {
        sequelize,
      },
    );
    return this;
  }
}
