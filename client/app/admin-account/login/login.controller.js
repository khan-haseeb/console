"use strict";

angular
  .module("maktabAppApp")
  .controller("AdminLoginCtrl", function($scope, Auth, $location) {
    $scope.emailRegExp = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    $scope.user = {};

    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        Auth.loginmaktabUser({
          email: $scope.user.email,
          password: $scope.user.password
        }).then(
          function() {
            // Logged in, redirect to dashboard
              // $state.go('dashboard');
            $location.path("/dashboard");
          },
          function(err) {
            console.log("Error", err.data.message);
            $scope.errors.other = err.data.message;
          }
        );
      }
    };
  });
