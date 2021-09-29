import { Service } from 'egg';
/**
 * user Service
 */
export default class User extends Service {
  async getProducts() {
    const users = await this.ctx.model.Home.findAll();
    return users;
  }
}
