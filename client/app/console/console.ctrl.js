"use strict";

angular.module("maktabAppApp").controller("consoleCtrl", [
  "$scope",
  "$http",
  "$stateParams",
  "$location",
   "$filter",
 'AlertService',
  "Auth",
  "$modal",
  function (
    $scope,
    $http,
    $stateParams,
    $location,
    $filter,
    AlertService,
    Auth,
    $modal
  ) {
    //$scope.customers
    fetchAdds();
    $scope.onEdit = function (itemId) {
      openEditModal(itemId);
    };
    function openEditModal(itemId) {
      console.log(itemId);
      var sOModal = $modal.open({
        animation: true,
        templateUrl: "app/console/console.modal.html",
        controller: "consoleModalCtrl",
        size: "lg",
        scope: $scope,
        backdrop: "static",
        resolve: {
          item: function () {
            if (itemId) return angular.copy(AddsMap[itemId]);
            else return null;
          },
        },
      });
      sOModal.result.then(function (item) {
        var add = AddsMap[item._id];
        if (add) {
          add.name = item.name;
          add.noOfClicks = item.noOfClicks;
          add.link = item.link;
          add.text = item.text;
        } else {
          $scope.adds.splice(0, 0, item);
          AddsMap[item._id] = item;
        }
      });
    }
    $scope.deleteItem = function (item) {
      console.log("delete", item);
      if (item) {
        {
          AlertService.showConfirm(
            null,
            "Delete Type",
            "Are you sure you want to delete selected item",
            function () {
              $http
                .delete("/api/adds/deleteadd/" + item)
                .then(function () {
                  var loc = AddsMap[item];
                  delete AddsMap[loc];

                  var indx = $scope.adds.indexOf(loc);
                  if (indx > -1) $scope.adds.splice(indx, 1);
                }, errorResponse);
            },
            function () {}
          );
        }
      }
    };
    
    function fetchAdds() {
      $http.get("/api/adds/getall").then(function (response) {
        processAdds(response.data);
      });
    }
    var AddsMap = {};
    function processAdds(data) {
      var addsArray = [];
      AddsMap = {};
      var count = data.length;
      var obj;
      for (var i = 0; i < count; i++) {
        obj = data[i];
        addsArray.push(obj);
        AddsMap[obj._id] = obj;
      }
      $scope.adds = addsArray;
      console.log(addsArray);
    }
    var errorResponse = function (response) {
      AlertService.showAlert(null, "Server Response", response.data.message);
    };
  },
]);
