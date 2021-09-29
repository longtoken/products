import { Application } from 'egg';

export default (app: Application) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Account = app.model.define('account', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: {
      type: STRING,
      allowNull: false,
      unique: true,
      comment: '用户名，唯一',
    },
    password: STRING,
    created_at: DATE,
    updated_at: DATE,
  });

  return Account;

};

