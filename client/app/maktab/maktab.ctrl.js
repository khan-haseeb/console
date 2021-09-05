'use strict';

angular.module('maktabAppApp')
  .controller('MaktabCtrl', ['$scope', '$http', '$stateParams','$location',  '$filter', 'Auth','$modal', function ($scope, $http, $stateParams, $location, $filter, Auth,$modal) {

    //$scope.customers
    fetchCouriers();
    $scope.onEdit = function(item){

        console.log(item);
        var sOModal = $modal.open({
        animation: true,
        templateUrl: 'app/maktab/maktab.modal.html',
        controller: 'MaktabModalCtrl',
        size: 'md',
        backdrop: 'static',
        resolve: {
          item: function () {
              return item;
          }
      }
      });
      sOModal.result.then(function () {
        fetchCouriers();
      });
    }
    $scope.deleteItem = function(item)
    {
      console.log('delete',item);

      
    }
    function fetchCouriers(){
       $http.post('/api/maktabs/getAllMaktab').then(function(response)
        {
            console.log(response);
            $scope.couriers = response.data;
            //console.log($scope.customers);
        }
        );
    }

  }]);
