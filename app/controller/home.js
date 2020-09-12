/*
 * @Author: your name
 * @Date: 2020-09-12 23:32:59
 * @LastEditTime: 2020-09-12 23:58:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \person-app\server\app\controller\home.js
 */
'use strict';

// const Controller = require('egg').Controller;

// class HomeController extends Controller {
//   async index() {
//     const { ctx } = this;
//     ctx.body = 'hi, egg';
//   }
// }

// module.exports = HomeController;
// 'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'api接口';
  }
}

module.exports = HomeController;
