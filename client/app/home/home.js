'use strict';

angular.module('maktabAppApp')
  .config(function ($stateProvider) {
    $stateProvider
    .state('home', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl',
        abstract: true
      });
  });
