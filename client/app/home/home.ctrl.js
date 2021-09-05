'use strict';

angular.module('maktabAppApp')
  .controller('HomeCtrl', function ($rootScope, $scope, $state, $http, $timeout, Auth) {

	$scope.user = Auth.getCurrentUser();

	angular.element(document).ready(function () {

      $timeout(function() {
        $('.sidebar-menu').tree();

        $(".sidebar-menu li a[ui-sref]").click(function (e) {

          if( $(e.currentTarget).is('a')) {
              $("body").removeClass('sidebar-open');
           }
        });

        $("#contentArea").mousedown(function (e) {
            $("body").removeClass('sidebar-open');
        });

      }, 500);

    });

    $scope.logout = function()
    {
      Auth.logout();
      $state.go('login');
    }
});
