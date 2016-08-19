'use strict';

function messageService($http) {
  var baseUrl = './api/messages/';

  function getInbox(id) {
    return $http.get(baseUrl+'receiver/'+id);
  }

  function getSent(id){
   return $http.get(baseUrl+'sender/'+id);
  }

  function createNew(mess) {
    return $http.post(baseUrl, mess);
  }

  function deleteMessage(messID) {
    return $http.delete(baseUrl+messID);
  }

  //returns object of functions -> dictionary for functions this file defines
  return {
    getInbox: getInbox,
    getSent: getSent,
    createNew: createNew,
    deleteMessage: deleteMessage
  };
}

angular.module('fmtApp').service('MessageService', messageService);

