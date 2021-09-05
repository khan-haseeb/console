'use strict';

angular.module('maktabAppApp')
  .controller('MaktabModalCtrl', ['$scope', '$http', '$stateParams','$location', '$filter','$modalInstance','item',/*'$mdDialog',*/'RegExp', function ($scope,$http, $stateParams, $location, $filter,$modalInstance,item,/*,$mdDialog,*/RegExp) {



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
        console.log($scope.courier);
        // if($scope.form.$valid)
          $scope.submitted=false;
          if($scope.courier._id){

            $http.put('/api/maktabs/updateMaktab/'+$scope.courier.id ,$scope.courier).then(function(response){
                console.log("save item");
                $scope.courier={};
                $modalInstance.close('cancel');
            });

          }
          else
          {
            $http.post('/api/maktabs',$scope.courier).then(function(response){
            $scope.courier={};
            $modalInstance.close('cancel');

            });
          }

    };

    var errorResponse = function(response)
    {
      var msg = response.statusText;
      if(response.data.name === "SequelizeUniqueConstraintError")
      {
        msg = response.data.message;
        if(response.data.errors)
        {
          msg = "Customer already exists. Customer Code Must be unique."
        }
      }
      else if(response.data.name === "MongoError")
      {
        msg = response.data.errmsg;
        if(response.data.code === 11000)
          msg = "Business Category Name already exists.";
      }
      console.log(msg);
      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title('Server Response')
          .textContent(msg)
          .ariaLabel('Server Response')
          .ok('OK')
          .disableParentScroll(false)
      );
    }

  }]);
