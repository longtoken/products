import { Application } from 'egg';

export default (app: Application) => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;

  const Users = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
    created_at: DATE,
    // updated_at: DATE,
    updated_at: {
      type: DATE,
      // 可以重写某个字段的字段名
      // field: 'db_create_time',
      allowNull: false,
      defaultValue: NOW,
    },
  });

  return Users;
};

