'use strict';

angular.module('maktabAppApp')
  .controller('TeachersModalCtrl', ['$scope', '$http', '$stateParams','$location', '$filter','$modalInstance','item','RegExp', function ($scope,$http, $stateParams, $location, $filter,$modalInstance,item,RegExp) {



    $scope.submitted = false;

    $scope.courier = angular.copy(item);

    $scope.emailRegExp = RegExp.emailRegExp;

    $scope.phoneRegExp = RegExp.phoneRegExp;

    $scope.urlRegExp = RegExp.urlRegExp;
   console.log($scope.courier);
    if(item)
      $scope.isEdit = false;
    else
      $scope.isEdit = true;

    $scope.onEdit = function ()
    {
      $scope.isEdit = true;
    }
    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    }


    $scope.saveItem = function()
    {
        $scope.submitted = true;
        console.log($scope.courier._id);
        // if($scope.form.$valid)
          $scope.submitted=false;
          if($scope.courier._id){

            $http.put('/api/teachers/updateTeacher/'+$scope.courier.id ,$scope.courier).then(function(response){
                console.log("save item");
                $scope.courier={};
                $modalInstance.close('cancel');
            });

          }
          else
          {
            $http.post('/api/teachers',$scope.courier).then(function(response){
            $scope.courier={};
            $modalInstance.close('cancel');

            });
          }

    };

    var errorResponse = function(response)
    {

    }

  }]);
