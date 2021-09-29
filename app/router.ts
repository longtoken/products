import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, jwt } = app;

  router.get('/', controller.home.index);

  router.post('/api/v1/user/register', controller.user.register); // 用户注册
  router.post('/api/v1/user/login', controller.user.login); // 用户登陆

  // 在路由里添加jwt中间件 即可使用jwt鉴权
  router.put('/api/v1/user/:id', jwt as any, controller.user.update); // 修改用户信息
  router.get('/api/v1/getAllProduct', jwt as any, controller.home.getAllProduct); // 修改用户信息

};
