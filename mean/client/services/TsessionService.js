'use strict';

function tsessionService($http) {
  var baseUrl = './api/tsessions/';

  function get() {
    return $http.get(baseUrl);
  }

  function getOne(id){
   return $http.get(baseUrl+id);
  }

  function create(mess) {
    return $http.post(baseUrl, mess);
  }

  function update(mess) {
     return $http.put(baseUrl+mess._id, mess);
  }

  function deleteSession(sid) {
    return $http.delete(baseUrl+sid);
  }

  //returns object of functions -> dictionary for functions this file defines
  return {
    get: get,
    getOne: getOne,
    create: create,
    update: update,
    deleteSession: deleteSession
  };
}

angular.module('fmtApp').service('TsessionService', tsessionService);

