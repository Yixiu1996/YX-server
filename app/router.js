/*
 * @Author: your name
 * @Date: 2020-09-12 23:32:59
 * @LastEditTime: 2020-09-13 00:03:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \person-app\server\app\router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/menu', controller.menu.index);
};
