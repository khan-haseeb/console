'use strict';

angular.module('maktabAppApp')
  .config(function ($stateProvider) {
    $stateProvider
    .state('console', {
        url: '/console',
        templateUrl: 'app/console/console.html',
        controller: 'consoleCtrl',
      //  parent: 'home'
      });
  });