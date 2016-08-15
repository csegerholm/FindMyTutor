'use strict';

(function(){

class TsessionCtrl {
  constructor($scope, UserService, TsessionService) {
	this.UserService=UserService;
	this.TsessionService = TsessionService;

	}

  $onInit() {
    this.user = this.UserService.get();
   	this.isEditing = false;

  }

  updateUser(){

  }

}

angular.module('fmtApp').controller('TsessionController', TsessionCtrl);

})();