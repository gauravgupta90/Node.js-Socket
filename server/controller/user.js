'use strict';

var User = require('../model/user').User,
    Boom = require('boom');


/**
   GET: /user
 */

exports.getAll = function (req,res,next) {
    User.getAllUsers(function(err, user) {
      if (!err) {
          res.json(user);
      } else {
          res.send(Boom.badImplementation(err)); // 500 error
      }
    });

};

/**
   GET: /user/:userid
 */

exports.getOne = function (req,res,next) {
      User.getUser(req.params.userid , function(err, user) {
        if (!err) {
            res.json(user);
        } else {
            res.send(Boom.badImplementation(err)); // 500 error
        }
    });

};

/**
   POST: /user
 */

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

/**
   PUT: /user/:userid
 */

exports.update = function (req,res,next) {
    User.updateUser(req.params.userid, req.body.username, function(err, user){
      if (!err) {
          if (user)
              res.send("User updated successfully");
          else
              res.send("No such user found");
      } else {
           if (11000 === err.code || 11001 === err.code) {
                  res.send(Boom.forbidden("please provide another user id, it already exist"));
          }
          else res.send(Boom.forbidden(err)); // HTTP 403
      }
    });
};

/**
   DEL: /user/:userid
 */

exports.remove = function (req,res,next) {
    User.removeUser(req.params.userid, function(err, user){
        if(!err){
          if(user.result.n) // checks from mongodb response for successfull deletion
              res.send("User deleted successfully");
          else
              res.send("No user found");
        } else {
          res.send(Boom.badRequest("Could not delete user")); 
        }
    });
};
