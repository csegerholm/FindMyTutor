'use strict';

(function(){

class InboxCtrl {
  constructor($scope, UserService, MessageService) {
	this.UserService=UserService;
	this.MessageService=MessageService;

	}

  $onInit() {
    this.user = this.UserService.get();
   	this.isEditing = false;

  }

  updateUser(){

  }

}

angular.module('fmtApp').controller('InboxController', InboxCtrl);

})();