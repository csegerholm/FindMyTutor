'use strict';

(function(){

class FindTutorCtrl {
  constructor($scope, UserService) {
	this.UserService=UserService;

	}

  $onInit() {
    this.user = this.UserService.get();

  }

  updateUser(){

  }

}

angular.module('fmtApp').controller('FindTutorController', FindTutorCtrl);

})();