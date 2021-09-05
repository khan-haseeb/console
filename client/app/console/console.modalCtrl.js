"use strict";

angular.module("maktabAppApp").controller("consoleModalCtrl", [
  "$scope",
  "$http",
  "$stateParams",
  "$location",
  "$filter",
  "$modalInstance",
  "item",
  "RegExp",
  
  function (
    $scope,
    $http,
    $stateParams,
    $location,
    $filter,
    $modalInstance,
    item,
    RegExp
  ) {




$scope.uploadFile = function() {
               
  var file = $scope.myFile;
  console.log('file is ' + file );
};

    $scope.add = angular.copy(item);
    $scope.onEdit = function () {
      $scope.isAdd = false;
      $scope.isEdit = true;
      $scope.IsVisible = true;
      $scope.IsVisibleNotification = true;
      
    };
   
    $scope.cancel = function () {
      $modalInstance.dismiss("cancel");
    };


    $scope.saveItem = function () {
      $scope.submitted = true;
      // if ($scope.form.$valid) {
        $scope.submitted = false;
        if ($scope.add._id) {
          $http
            .put(
              "/api/adds/updateadd/" + $scope.add._id,
              $scope.student
            )
            .then(function (response) {
              AlertService.showAlert1(
                null,
                "Add Updated Succesfully",
                "Successfully saved"
              );
              $modalInstance.close($scope.student);
            }, errorResponse);
        } else {

          var formData = new FormData;
          const keys = Object.keys($scope.add);
          for (const property in $scope.add) {
            formData.append(property,$scope.add[property]);
          }

          formData.append('image',$scope.myFile);

          $http.post("/api/adds", formData,{
            transformRequest : angular.identity,
            headers : {
           'Content-Type' : undefined
            }
          }).then(res => {
            AlertService.showAlert1(
              null,
              "Add Added",
              "Successfully saved"
            );
            $modalInstance.close(res.data);
          },errorResponse)
          
        }
      // }
    };
      
     ///////////////////

    var errorResponse = function (response) {
      var msg = response.statusText;
      var msgcode = response.status;
      if (msgcode == 500) msg = "Something went wrong. Please contact Support.";
      else if (msgcode == 409)
        msg = " Please enter";

      AlertService.showAlert1(
        document.querySelector("#stdModal"),
        "Student Registration",
        msg
      );

      // End Modifier Shahid
    };
  },
]);
