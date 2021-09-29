// import { Controller } from 'egg';
import BaseController from '../extend/baseController';
// 校验用户注册参数
const vUser = {
  username: { type: 'string', required: true },
  password: { type: 'string', required: true },
};

export interface IApiData<T> {
  data: T;
  code: string;
  msg: string;
}

class UserController extends BaseController {
  // 用户注册
  async register() {
    const { ctx } = this;
    try {
      // 接收并校验参数
      ctx.validate(vUser, ctx.request.body);
      // 判断用户名是否重复
      const users = await ctx.service.user.checkUserName(ctx.request.body);
      if (users[0]) {
        this.render(users, '用户名已存在', '400');
        return;
      }
      await ctx.service.user.Register(ctx.request.body);
      this.render(true, '注册成功');
    } catch (e) {
      console.log(e, '----error');
      this.fail('500', (e as { name: string }).name);
    }
  }

  // 用户登陆
  async login() {
    const { ctx } = this;
    // 接收并校验参数
    ctx.validate(vUser, ctx.request.body);
    const data = await ctx.service.user.Login(ctx.request.body);
    if (!data) {
      ctx.status = 200;
      this.fail('400', '用户名或密码错误');
      return;
    }
    this.render(data.token, '登陆成功');
  }

  async update() {
    const { ctx } = this;
    ctx.body = '';
  }
}

export default UserController;
