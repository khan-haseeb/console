'use strict';

angular.module('maktabAppApp')
  .config(function ($stateProvider) {
    $stateProvider
    .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        // authenticate: true,
       parent: 'home'
      });
  });
