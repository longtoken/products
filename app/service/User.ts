import { Service } from 'egg';
import { hashSync, compareSync } from 'bcryptjs';

/**
 * user Service
 */
export interface LoginModel {
  id: number;
  username: string;
  password: string;
}
export default class User extends Service {

  // 检查用户名
  async checkUserName(query) {
    const { username } = query;
    const users = await this.ctx.model.Login.findAll({
      attributes: ['username'],
      where: { username },
    });
    return users;
  }


  // 用户注册
  async Register(body) {
    const { username, password }: LoginModel = body;
    // 对密码加密
    const hash = hashSync(password, this.config.bcrypt.saltRounds);
    const now = Date.now();
    const user = await this.ctx.model.Login.create({ username, password: hash, created_at: now, updated_at: now });
    return user;
  }


  // 用户登陆
  async Login(body) {
    const { username, password } = body;
    const user = await this.ctx.model.Login.findOne({
      where: { username },
    });

    if (!user) return {};
    const match = compareSync(password, (user as unknown as LoginModel).password);
    if (match) {
      const { id, username } = user as unknown as LoginModel;
      // 获取jwt配置
      const { jwt: { secret } } = this.app.config;
      // 生成token
      const token = this.app.jwt.sign({
        id, username,
      }, secret, { expiresIn: '24h' });
      return { token };
    }
  }

}
