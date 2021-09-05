'use strict';

angular.module('maktabAppApp')
  .config(function ($stateProvider) {
    $stateProvider
    .state('teachers', {
        url: '/teachers',
        templateUrl: 'app/teachers/teachers.html',
        controller: 'TeachersCtrl',
        // authenticate: true,
       parent: 'home'
      });
  });
