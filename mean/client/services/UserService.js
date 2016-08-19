'use strict';

function userService($http) {
  var baseUrl = './api/users/';

  function getList() {
    return $http.get(baseUrl);
  }

  function getOne(id){
   return $http.get(baseUrl+id);
  }

  function create(user) {
    return $http.post(baseUrl, user);
  }

  function update(user) {
     return $http.put(baseUrl+user._id, user);
  }

  function deleteThis(user) {
    return $http.delete(baseUrl+user._id);
  }

  function getMe(id) {
    return $http.get(baseUrl+'me');
  }

  //returns object of functions -> dictionary for functions this file defines
  return {
    getList: getList,
    getOne: getOne,
    create: create,
    update: update,
    deleteThis: deleteThis,
    getMe: getMe
  };
}

angular.module('fmtApp').service('UserService', userService);

