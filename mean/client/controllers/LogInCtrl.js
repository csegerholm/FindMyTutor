'use strict';

(function(){

class LogInCtrl {
  constructor($scope, UserService) {
		
	}

  $onInit() {
      
  }

  login(form){
  	console.log("LOG IN");
  	console.log("In log in submit the form is: ", form);
  }

}

angular.module('fmtApp').controller('LogInController', LogInCtrl);

})();