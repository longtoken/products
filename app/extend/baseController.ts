import { Controller } from 'egg';

export default class HomeController extends Controller {
  public render(data: any, msg: string, code = '200') {
    this.ctx.body = { code, data, msg };
    this.ctx.status = 200;
  }

  public fail(code: string, message: string) {
    this.ctx.body = { code, msg: message, data: {} };
    this.ctx.status = 200;
  }

  public notFound(msg: string) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}
