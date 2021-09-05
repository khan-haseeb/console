'use strict';

angular.module('maktabAppApp')
  .controller('NavbarCtrl', function ($scope, $location, $state) {
    $scope.menu = [];

    $scope.isCurrState = function(state)
    {
      if($state.current)
        return $state.current.name == state;

      return false;
    };
  });
