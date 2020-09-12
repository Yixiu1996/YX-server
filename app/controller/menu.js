/*
 * @Author: your name
 * @Date: 2020-09-12 23:59:53
 * @LastEditTime: 2020-09-13 00:03:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \person-app\server\app\controller\menu.js
 */
const Controller = require('egg').Controller;

class MenuController extends Controller {
  async index() {
    this.ctx.body = 'menu接口';
  }
}
module.exports = MenuController;
