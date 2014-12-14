// Load modules

var User      = require('./controller/user'),
    Static    = require('./static');

// API Server Endpoints
module.exports = function(app){

	app.route('/user')
	   .post(User.create)
       .get(User.getAll);

    app.route('/user/{userid}')
       .get(User.getOne)
       .put(User.update)
       .delete(User.remove);
}