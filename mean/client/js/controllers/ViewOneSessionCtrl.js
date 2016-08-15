'use strict';

(function(){

class ViewOneSessionCtrl {
  constructor($scope, UserService) {
	this.UserService=UserService;

	}

  $onInit() {
    this.user = this.UserService.get();

  }

  updateUser(){

  }

}

angular.module('fmtApp').controller('ViewOneSessionController', ViewOneSessionCtrl);

})();