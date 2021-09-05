'use strict';

angular.module('alertService', [])
  .factory('AlertService', function ($mdDialog) {

    var obj = {
      showAlert: function (parent, title, msg)
      {
          $mdDialog.show(
            $mdDialog.alert()
              .clickOutsideToClose(true)
              .title(title)
              .htmlContent(msg)
              .ariaLabel(title)
              .ok('OK')
              .clickOutsideToClose(false)
              .disableParentScroll(true)
              .multiple(true)
              .parent(parent)
          );
      },

      showConfirm: function (parent, title, msg, cbYes, cbNo)
      {
        $mdDialog.show(
          $mdDialog.confirm()
            .title(title)
            .htmlContent(msg)
            .ariaLabel(title)
            .ok('YES')
            .cancel('NO')
            .clickOutsideToClose(false)
            .disableParentScroll(true)
            .multiple(true)
            .parent(parent)
        ).then(cbYes, cbNo);
      },
      showAlert1: function (parent, title, msg)
      {
          $mdDialog.show(
            $mdDialog.alert()
              .clickOutsideToClose(true)
              .title(title)
              .htmlContent(msg)
              .ariaLabel(title)
              .ok('OK')
              .clickOutsideToClose(false)
              .disableParentScroll(true)
              .multiple(true)
              .parent(parent)
          );
      }
    };

    return obj;
});
