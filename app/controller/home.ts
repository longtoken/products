import BaseController from '../extend/baseController';

export default class HomeController extends BaseController {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async getAllProduct() {
    const { ctx } = this;
    const result = await ctx.service.home.getProducts();
    this.render(result, '成功');
  }

}
