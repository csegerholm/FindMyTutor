'use strict';

(function(){

class ViewOneTutorCtrl {
  constructor($scope, UserService) {
	this.UserService=UserService;

	}

  $onInit() {
    this.user = this.UserService.get();

  }

}

angular.module('fmtApp').controller('ViewOneTutorController', ViewOneTutorCtrl);

})();