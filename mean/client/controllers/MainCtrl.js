'use strict';

(function(){

class MainCtrl {
  constructor($scope) {
		this.isLoggedIn=false;
		$scope.tagline = 'Main';
	}

  $onInit() {
      
  }

}

angular.module('fmtApp',[])
.controller('MainController', MainCtrl);

})();