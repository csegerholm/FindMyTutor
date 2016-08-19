'use strict';
(function(){
  class InboxCtrl {

    constructor($location, $scope, MessageService, Auth) {
      this.MessageService=MessageService;
      this.inbox=true;
      this.Auth= Auth;
      this.location = $location;
      var currUser = Auth.getCurrentUser();
      if(currUser!=null){
        this.location.path('/');
      }
      this.messages = this.MessageService.getInbox(currUser._id);
    }

    $onInit() {
      this.inbox=true;
    }

    viewSent(){
      this.inbox=false;
      var currUser = Auth.getCurrentUser();
      if(currUser!=null){
        this.location.path('/');
      }
      this.messages = this.MessageService.getSent(currUser._id);
    }

    reply(indexInMessages){
      
      var messageToReply = messages[indexInMessages];
      var newMessage = {};
      newMessage.senderID = messageToReply.receiverID;
      newMessage.receiverID = messageToReply.senderID;
      newMessage.subject  = "Reply:"+messageToReply.subject;
      newMessage.info  = "\n\n"+messageToReply.info;
      

    }

    deleteMessage(indexInMessages){
      var messageToDelete = messages[indexInMessages];
      this.MessageService.deleteMessage(messageToDelete._id);
      messages.splice(indexInMessages, 1);
    }

  }
  angular.module('fmtApp').controller('InboxController', InboxCtrl);
})();