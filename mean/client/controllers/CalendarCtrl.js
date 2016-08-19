'use strict';

(function(){

  class CalendarCtrl {

    constructor($scope, TsessionService, Auth) {
      this.TsessionService = TsessionService;
      this.Auth = Auth;
      var currUser = Auth.getCurrentUser();
      if(currUser==null){
        this.location.path('/');
      }
      this.sessions = TsessionService.get(currUser._id);
  	}

    $onInit() {
      
    }

    cancelSession(indexOfSession){
      var sessionToCancel = this.sessions[indexOfSession];
      if(sessionToCancel==undefined){
        return;
      }
      var today = new Date();
      var sessionDate = sessionToCancel.dateOfSession;
      //var sessionDate = new Date(sessionToCancel.dateOfSession);
      
      //utc = miliseconds from Jan 1st 1970
      //if session is set in the future give an email warning
      if(today.UTC() < sessionDate.UTC()){
        var cancelEmail = {};
      }

      this.TsessionService.deleteSession(sessionToCancel._id);
      this.sessions.slice(indexOfSession,1);

    }

    changeSession(indexOfSession){

    }

    acceptSession(indexOfSession){
      var sessionToCancel = this.sessions[indexOfSession];
      if(sessionToCancel==undefined){
        return;
      }
      this.TsessionService.update(sessionToCancel._id);
    }

    
  }

  angular.module('fmtApp').controller('CalendarController', CalendarCtrl);

})();