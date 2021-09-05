'use strict';

var myApp = angular.module('maktabAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'regExp',
  'ui.bootstrap',
  "ngMaterial",
  'alertService'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/console');

    // $locationProvider.html5Mode(true);
    // $httpProvider.interceptors.push('authInterceptor');
  })

  myApp.directive('fileModel', ['$parse', function ($parse) {
    return {
       restrict: 'A',
       link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;
          
          element.bind('change', function() {
             scope.$apply(function() {
                modelSetter(scope, element[0].files[0]);
             });
          });
       }
    };
 }]);

 myApp.factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        // if(response.status === 401) {
        //   $location.path('/login');
        //   // remove any stale tokens
        //   $cookieStore.remove('token');
        //   return $q.reject(response);
        // }
        // else {
        //   return $q.reject(response);
        // }
        return $q.reject(response);
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });


  // angular
  // .module("maktabAppAppAdmin", [
  //   'ngCookies',
  //   'ngResource',
  //   'ngSanitize',
  //   'btford.socket-io',
  //   'ui.router',
  //   'regExp',
  //   'ui.bootstrap'
  // ])
  //
  // .controller("AdminMainCtrl", function($rootScope, $location) {})
  //
  // .config(function(
  //   $stateProvider,
  //   $urlRouterProvider,
  //   $locationProvider,
  //   $httpProvider
  // ) {
  //   $urlRouterProvider.otherwise("/admin/login");
  //
  //   $locationProvider.html5Mode(true);
  //   $httpProvider.interceptors.push("authInterceptor");
  // })
  //
  // .factory("authInterceptor", function(
  //   $rootScope,
  //   $q,
  //   $cookieStore,
  //   $location
  // ) {
  //   return {
  //     // Add authorization token to headers
  //     request: function(config) {
  //       config.headers = config.headers || {};
  //       if ($cookieStore.get("token")) {
  //         config.headers.Authorization = "Bearer " + $cookieStore.get("token");
  //       }
  //       return config;
  //     },
  //
  //     // Intercept 401s and redirect you to login
  //     responseError: function(response) {
  //       if (response.status === 401) {
  //         $location.path("/admin/login");
  //         // remove any stale tokens
  //         $cookieStore.remove("token");
  //         return $q.reject(response);
  //       } else {
  //         return $q.reject(response);
  //       }
  //     }
  //   };
  // })
  //
  // .run(function($rootScope, $location, Auth) {
  //   // Redirect to login if route requires auth and you're not logged in
  //   $rootScope.$on("$stateChangeStart", function(event, next) {
  //     Auth.getCurrentmaktabUser(function(loggedIn) {
  //       if (next.authenticate && !loggedIn) {
  //         $location.path("/admin/login");
  //       }
  //     });
  //
  //   });
  // });
