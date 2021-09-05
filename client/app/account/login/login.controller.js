'use strict';

angular.module('maktabAppApp')
  .controller('LoginCtrl', function ($scope, Auth,$state, $location,RegExp) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          // $location.path('/');
          $state.go('dashboard');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });
