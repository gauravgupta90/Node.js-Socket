var User = require('../model/user').User,
    Boom = require('boom');


exports.getAll = function (req,res,next) {
    User.getAllUsers(function(err, user) {
      if (!err) {
          res.json(user);
      } else {
          res.send(Boom.badImplementation(err)); // 500 error
      }
    });

};

exports.getOne = function (req,res,next) {
      User.getUser(req.params.userid , function(err, user) {
        if (!err) {
            res.json(user);
        } else {
            res.send(Boom.badImplementation(err)); // 500 error
        }
    });

};

exports.create = function (req,res,next) {
    User.createUser(req.body, function(err, user) {
        if (!err) {
            res.json(user);
        } else {
             if (11000 === err.code || 11001 === err.code) {
                    res.send(Boom.forbidden("please provide another user id, it already exist"));
            }
            else res.send(Boom.forbidden(err)); // HTTP 403
        }
    });
};

exports.update = function (req,res,next) {
    User.updateUser(req.params.userid, req.body.username, function(err, user){
      if (!err) {
          res.json(user);
      } else {
           if (11000 === err.code || 11001 === err.code) {
                  res.send(Boom.forbidden("please provide another user id, it already exist"));
          }
          else res.send(Boom.forbidden(err)); // HTTP 403
      }
    });
};

exports.remove = function (req,res,next) {
    User.removeUser(req.params.userid, function(err, user){
        if(!err){
          if(user)
              res.send("User deleted successfully");
          else
              res.send("No user found");
        } else {
          res.send(Boom.badRequest("Could not delete user")); 
        }
    });
};
