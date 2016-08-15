'use strict';

(function(){

class ContactUsCtrl {
  constructor($scope, UserService) {
		
	}

  $onInit() {
      
  }

  submit(form){
  	console.log("In contact us submit the form is: ", form);
  }

}

angular.module('fmtApp').controller('ContactUsController', ContactUsCtrl);

})();