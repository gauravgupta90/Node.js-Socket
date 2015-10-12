Express-Mongoose-Angular Scafolded Demo Project
================================================

The purpose of this app is to show a new way to work with Express.js, Mongodb, Mongoose, Angular.js.


### Install an app

Run the following command in root directory of an app in command prompt.

###### *Install node packages*

server/ node install

###### *Install bower components*

client/src/ bower install

### Run an app

###### *Run Server*

Run the following command in root directory of an app in command prompt.

server/ node server.js

You can see the port number in command prompt after sucessfull run

You can change the settings in server/config/config.js file

### API

###### *POST request/ Create user*

    http://localhost:8000/user
    
    Body:

    	{
			"userId":"gauravgupta90",
			"username":"gauravgupta"
		}

###### *Get request/ Get all users*

    http://localhost:8000/user

###### *Get request/ Get user by userid*

    http://localhost:8000/user/gauravgupta90

###### *PUT request/ Update user by userid*

	http://localhost:8000/user/gauravgupta90
	
	Body:

    	{
			"username":"gaurav_bng@hotmail.com"
		}

###### *DELETE request/ Delete user by userid*

	http://localhost:8000/user/gauravgupta90