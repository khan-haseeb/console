'use strict';

angular.module('maktabAppApp')
  .config(function ($stateProvider) {
    $stateProvider
    .state('students', {
        url: '/students',
        templateUrl: 'app/students/students.html',
        controller: 'StudentsCtrl',
        // authenticate: true,
       parent: 'home'
      });
  });
