'use strict';

module.exports =  function(app){
    var todoList = require('./controller');

    app.route('/').get(todoList.index);
    app.route('/users').get(todoList.users);
    app.route('/user/:user_id').get(todoList.findUser);
    app.route('/user/insert').post(todoList.createUser);
    app.route('/user/:user_id').put(todoList.updateUser);
    app.route('/user/:user_id').delete(todoList.deleteUser);
};