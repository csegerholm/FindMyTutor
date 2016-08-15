'use strict';

function userService($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var baseUrl = './api/users/';

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

  function post(user) {
    return $http.post(baseUrl, user);
  }

  function put(user) {
     return $http.put(baseUrl+mess._id, user);
  }

  function deleteThis(user) {
    return $http.delete(baseUrl+user._id);
  }

  //returns object of functions -> dictionary for functions this file defines
  return {
    get: get,
    getOne: getOne,
    create: post,
    update: put,
    deleteThis: deleteThis,
    test: test
  };
}

angular.module('fmtApp').service('UserService', userService);

