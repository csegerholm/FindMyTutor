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

Bower:
bower.json: tells what packages to install for client side
bowerrc: tells it where to put everything -> client\libs



To Do:
SERVER SIDE:
-add authentication locks on the routes in routes.js for creating/updating/deleting
-add all the functions to the services on server side then uncomment them in routes.js
-Make global to app the [times]->from user.js   and [listOfComments] -> from rating.js
-Get time to work on user model -> days is not recognized as a type

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