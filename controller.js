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



exports.index = function(req,res){
    response.ok("halo node js restful!!", res);
};