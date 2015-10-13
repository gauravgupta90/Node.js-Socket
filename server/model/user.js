var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
  * @module  User
  * @description contain the details of Attribute  
*/

var UserSchema = new Schema({
  
  /** 
    User ID. It can only contain string, is required and unique field which is indexed.
  */
  userId : { type: String, unique: true, required: true },

  /** 
    User Name. It can only contain string, is required field.
  */
  username : { type: String, required: true },

 
  
});

UserSchema.statics.getAllUsers= function(callback) {
    this.find({}, callback);
};

UserSchema.statics.getUser= function(userId, callback) {
    this.find({'userId': userId}, callback);
};

UserSchema.statics.createUser = function(requestData, callback) {
    this.create(requestData, callback);
};

UserSchema.statics.updateUser = function(userId, username, callback) {
    this.findOneAndUpdate({'userId': userId}, { $set: { 'username': username }}, callback);
};

UserSchema.statics.removeUser = function(userId, callback) {
    this.remove({'userId': userId}, callback);
};

var user = mongoose.model('user', UserSchema);

/** export schema */
module.exports = {
    User : user
};