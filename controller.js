'use strict';

var response = require('./res');
var connection = require('./conn');

exports.users = function(req, res){
    connection.query(' SELECT * FROM person', function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
};

exports.findUser = function(req, res){

    var user_id = req.params.user_id;

    connection.query(' SELECT * FROM person WHERE id = ?',
    [ user_id ],    
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
};

exports.createUser = function(req,res){
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    connection.query('INSERT INTO person (first_name, last_name) values (?,?)',
    [first_name,last_name],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Success!!",res);
        }
    });
};

exports.updateUser = function(req, res) {
    
    var user_id = req.params.user_id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    connection.query('UPDATE person SET first_name = ?, last_name = ? WHERE id = ?',
    [ first_name, last_name, user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Success!!", res)
        }
    });
};

exports.deleteUser = function(req, res) {
    
    var user_id = req.params.user_id;

    connection.query('DELETE FROM person WHERE id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Success!!", res)
        }
    });
};



exports.index = function(req,res){
    response.ok("halo node js restful!!", res);
};