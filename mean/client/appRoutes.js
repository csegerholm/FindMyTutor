angular.module('appRoutes', ['authMod']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController',
            controllerAs: 'ctrl'
        })

        //search tutors
		.when('/findTutor', {
			templateUrl: 'views/findTutor.html',
			controller: 'FindTutorController',
			controllerAs: 'ctrl'
		})

		//view my account - edit my account
		.when('/me', {
			templateUrl: 'views/viewMe.html',
			controller: 'ViewMeController',
			controllerAs: 'ctrl'
		})

			//view one tutor
			.when('/tutors/:id', {
				templateUrl: 'views/viewOneTutor.html',
				controller: 'ViewOneTutorController',
				controllerAs: 'ctrl'
			})

		//view sessions on calendar
		.when('/calendar', {
			templateUrl: 'views/calendar.html',
			controller: 'CalendarController',
			controllerAs: 'ctrl'	
		})
			//view one session -> cancel it 
			.when('/sessions/:id', {
				templateUrl: 'views/viewOneSession.html',
				controller: 'ViewOneSessionController',
				controllerAs: 'ctrl'
			})

			//create a new session page-> creates request
			.when('/scheduleSession', {
				templateUrl: 'views/createSession.html',
				controller: 'CreateSessionController',
				controllerAs: 'ctrl'
			})

		//inbox for requests and messages
		.when('/inbox', {
			templateUrl: 'views/inbox.html',
			controller: 'InboxController',
			controllerAs: 'ctrl'
		})

		//contact us page
		.when('/contactUs', {
			templateUrl: 'views/contactUs.html',
			controller: 'ContactUsController',
			controllerAs: 'ctrl'
		})

		//log in page
		.when('/login', {
			templateUrl: 'views/logIn.html',
			controller: 'LogInController',
			controllerAs: 'ctrl'
		})

		//sign up page
		.when('/signUp', {
			templateUrl: 'views/signUp.html',
			controller: 'SignUpController',
			controllerAs: 'ctrl'
		});



	$locationProvider.html5Mode(true);

}])

.run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });