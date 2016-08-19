'use strict';

(function(){

class ViewMeCtrl {
  constructor($scope, UserService) {
	this.UserService=UserService;

	}

  $onInit() {
    this.user = this.UserService.get();
   	this.isEditing = false;

  }

  updateUser(){

  }

}

angular.module('fmtApp').controller('ViewMeController', ViewMeCtrl);

})();