'use strict';

angular.module('maktabAppApp')
  .config(function ($stateProvider) {
    $stateProvider
    .state('maktab', {
        url: '/maktab',
        templateUrl: 'app/maktab/maktab.html',
        controller: 'MaktabCtrl',
        // authenticate: true,
       parent: 'home'
      });
  });
