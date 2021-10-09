import { Application } from 'egg';

export default (app: Application) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define('login', {
    login_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    password: STRING,
    ip: STRING,
    update_time: DATE,
  });
  return User;
};

