var UserService = require('./services/UserService');
var CourseService = require('./services/CourseService');
var RatingService = require('./services/RatingService');
var TsessionService = require('./services/TsessionService');
var MessageService = require('./services/MessageService');

    module.exports = function(app) {

        // server routes ===========================================================
        
        //USERS
        app.get('/api/users', UserService.getList);
        //app.get('/api/users/:id', UserService.getOne);
        //app.get('/api/users/me', UserService.getMe);
        app.post('/api/users', UserService.create);
        //app.put('/api/users', UserService.update);
        //app.delete('/api/users', UserService.remove);

        //COURSES
        app.get('/api/courses', CourseService.getAll);
        //app.post('/api/courses', CourseService.create);
        //app.put('/api/courses', CourseService.update);
        //app.delete('/api/courses', CourseService.remove);

        //RATINGS
        app.get('/api/ratings', RatingService.getAll);
        // app.post('/api/ratings', RatingService.create);
        // app.put('/api/ratings', RatingService.update);
        // app.delete('/api/ratings', RatingService.remove);

        //T SESSIONS
        app.get('/api/tsessions', TsessionService.getAll);
        // app.post('/api/tsessions', TsessionService.create);
        // app.put('/api/tsessions', TsessionService.update);
        // app.delete('/api/tsessions', TsessionService.remove);

        //MESSAGES - Done
        app.get('/api/messages/receiver/:rID', MessageService.getAllWithReceiver);
        app.get('/api/messages/sender/:sID', MessageService.getAllWithSender);
        app.post('/api/messages', MessageService.create);
        app.delete('/api/messages/:mID', MessageService.remove);

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./client/index.html');
	});

};