// File: chapter7/serverApp.js

angular.module('serverApp', [])
  .controller('MainCtrl', ['$http', function($http) {
    var self = this;
    self.items = [];
    self.others = [];
    self.errorMessage = '';

    $http.get('/api/note').then(function(response) {
      self.items = response.data;
    }, function(errResponse) {
      self.errorMessage = errResponse.data.msg;
    });

    $http.get('/api/note').then(function(response) {
      self.others = response.data;
    }, function(errResponse) {
      self.errorMessage = errResponse.data.msg;
    });

  }]);
