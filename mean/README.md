#Find My Tutor

This is a repo for FindMyTutor using MEAN Stack.

## Installation
1. Download the repository
2. Install npm modules: `npm install`
3. Install bower dependencies `bower install`
4. Start up mongod (Found in C:/MongoDB/server/<v>/bin/mongodb.exe)
5. Start up the server: `node server.js`
6. View in browser at http://localhost:8080

## Before you run
1. Download Node and npm from 
2. Download Mongodb from
3. Create a folder in C:/data/db


File Structure:
	--client: holds all the code for the client/browser/user side
		--auth: holds code to handles log in/log out
			authMod.js: authenticaiton module-> keeps track of whether user is logged in
		--controllers: holds code for all controllers. Each page has a controller which handles the functionality of the page.
			CalendarCtrl.js
			ContactUsCtrl.js
			...
			ViewOneTutorCtrl.js
		--css: holds style sheets
			style.css: defines all styles used 
		--libs: holds packages downloaded from bower install
			-packages accessable to client code
		--services: holds code for https calls to server
			MessageService.js
			TsessionService.js
			UserService.js
		--views: holds all html files for each page. Each html shows the div that will be inserted into the index.html page.
			calendar.html
			...
			viewOneTutor.html
		app.js: defines the app module and it's dependencies
		app.Routes: defines all of the url links to specific controllers and html files.
		index.html: this is the html page that is always shown. It has things added and removed to it to form different pages.
	
	--node_modules: all modules available to be used in this project
		-many modules
	
	--server: holds all the code for the server side
		--config: holds configuration settings
			data.js: holds all info about app
			db.js: holds url for mongo db
		--models
		--services
		--validators
		routes.js: matches url routes to functions that should handle them
	bowerrc: tells it where to put everything (In this case client\libs)
	gitignore: what files to ignore when we push code to gitignore
	bower.json: tells what packages to install for client side
	package.json: Gives the project a name, the file to start the server (server.js) and all of the project's dependencies
	README.md: This file
	server.js: File that starts the server. 'node server.js' runs this file.
	



To Do:
	SERVER SIDE:
		-add authentication locks on the routes in routes.js for creating/updating/deleting
		-add all the functions to the services on server side then uncomment them in routes.js
		-Make global to app the [times]->from user.js   and [listOfComments] -> from rating.js
		-Get time to work on user model -> days is not recognized as a type
		-Enforce it so can only get tsession if you are the tutor or tutee
		-Enforce it so can only get messages if you are the sender or reciever
		
	CLIENT SIDE:
		-Log In 
		-Sign Up
		-Contact Us -> sends us an email with athira.christina@gmail.com
		-Inbox -> view/accept/delete session requests (message others?)
		-Calandar -> show all of your events allow you to schedule one
		-Create a Session 
		- View one session
		-View One User: links to create a session w/ prefilled fields
		-Find A Tutor -> List tutors page (filterable): links to view one user
		-View yourself -> like one user but editable


Security with log on:
in cookie store:
	current user id and info
	everytime you grab info tho you have to send your session id and current user to ensure they match what server has

when you log out it gives deletes that session key

when you log in it creates a new session key