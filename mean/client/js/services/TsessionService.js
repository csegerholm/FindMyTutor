'use strict';

function tsessionService($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var baseUrl = './api/tsessions/';

    function test(){
        console.log('TEST');
    }
  // AngularJS will instantiate a singleton by calling "new" on this function
  function get() {
    return $http.get(baseUrl);
  }

  function getOne(id){
   return $http.get(baseUrl+id);
  }

  function post(mess) {
    return $http.post(baseUrl, mess);
  }

  function put(mess) {
     return $http.put(baseUrl+mess._id, mess);
  }

  function deleteThis(mess) {
    return $http.delete(baseUrl+mess._id);
  }

  //returns object of functions -> dictionary for functions this file defines
  return {
    get: get,
    getOne: getOne,
    post: post,
    update: put,
    deleteThis: deleteThis,
    test: test
  };
}

angular.module('fmtApp').service('TsessionService', tsessionService);

