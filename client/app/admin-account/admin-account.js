"use strict";

angular.module("maktabAppApp").config(function($stateProvider) {
  $stateProvider.state("Alogin", {
    url: "/admin/login",
    templateUrl: "app/admin-account/login/login.html",
    controller: "AdminLoginCtrl",
    authenticate: false
  });
  // .state("signup", {
  //   url: "/signup",
  //   templateUrl: "app/account/signup/signup.html",
  //   controller: "SignupCtrl"
  // })
  // .state("settings", {
  //   url: "/settings",
  //   templateUrl: "app/account/settings/settings.html",
  //   controller: "SettingsCtrl",
  //   authenticate: true
  // });
});
